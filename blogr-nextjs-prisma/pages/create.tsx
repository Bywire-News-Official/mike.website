import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from "react";
import Layout from '../components/Layout';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import prisma from '../lib/prisma';
import stringifySafe from 'json-stringify-safe';
import slugify from 'slugify';


const QuillNoSSRWrapper = dynamic(import('react-quill'), { ssr: false });

const PostDraft: React.FC<{ post: any }> = ({ post }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [image, setImage] = useState(post?.image || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [seoTitle, setSeoTitle] = useState(post?.seo?.title || "");
  const [seoDescription, setSeoDescription] = useState(post?.seo?.description || "");
  const [seoKeywords, setSeoKeywords] = useState(post?.seo?.keywords || "");
  const [socialMediaImage, setSocialMediaImage] = useState(post?.seo?.socialMediaImage || "");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenStored = window.localStorage.getItem("token");
    if (tokenStored) {
      setToken(tokenStored);
    }
  }, []);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  
    // Generate a slug from the title
    const slug = slugify(title, { lower: true, strict: true });
console.log("Generated slug: ", slug);

  
    const body = { 
      title, 
      content, 
      image, 
      slug,  // Include the slug in your request body
      seo: { 
        title: seoTitle, 
        description: seoDescription, 
        keywords: seoKeywords, 
        socialMediaImage 
      } 
    }; 
  
    let url = "";
    let method = "";
  
    if (post) {
      url = `/api/auth/post/${post.id}`;
      method = "PUT";
    } else {
      url = "/api/auth/post";
      method = "POST";
    }
  
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
  
    if (res.ok) {
      // Redirect to the new slug-based route if it's a new post.
      // Otherwise, redirect to the existing post route.
      await Router.push(post ? `/p/${post.id}` : "/drafts");
    } else {
      const errorData = await res.json();
      console.error(errorData);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>{post ? "Edit Post" : "New Draft" }</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <input
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            type="text"
            value={image}
          />
          {/* New SEO fields */}
          <input
            onChange={(e) => setSeoTitle(e.target.value)}
            placeholder="SEO Title"
            type="text"
            value={seoTitle}
          />
          <input
            onChange={(e) => setSeoDescription(e.target.value)}
            placeholder="SEO Description"
            type="text"
            value={seoDescription}
          />
          <input
            onChange={(e) => setSeoKeywords(e.target.value)}
            placeholder="SEO Keywords"
            type="text"
            value={seoKeywords}
          />
          <input
            onChange={(e) => setSocialMediaImage(e.target.value)}
            placeholder="Social Media Image URL"
            type="text"
            value={socialMediaImage}
          />
          <QuillNoSSRWrapper value={content} onChange={setContent} />
          <input disabled={!content || !title} type="submit" value={post ? "Update" : "Create" } />
          <a className="back" href="#" onClick={() => Router.push(post ? `/p/${post.id}` : '/')}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type='text'] {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
     </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const postId = query.id as string;
    
    if (postId) {
      let post = await prisma.post.findUnique({
        where: { id: String(postId) },
        include: { seo: true },
      });
      
      // Convert the post object to JSON with stringifySafe
      const postStringified = stringifySafe(post);
      // Parse the stringified post back into post
      post = JSON.parse(postStringified);
      
      return { props: { post } };
    }
    
    return { props: {} };
  };
  
  export default PostDraft;