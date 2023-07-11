import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from "react";
import Layout from '../components/Layout';
import Router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import prisma from '../lib/prisma';

const QuillNoSSRWrapper = dynamic(import('react-quill'), { ssr: false });

const PostDraft: React.FC<{ post: any }> = ({ post }) => {
  const router = useRouter();

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenStored = window.localStorage.getItem("token");
    if (tokenStored) {
      setToken(tokenStored);
    }
  }, []);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body = { title, content };
    const res = await fetch(post ? `/api/auth/update/${post.id}` : '/api/auth/post', {
      method: post ? 'PUT' : 'POST',
      headers: { 
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      await Router.push(post ? `/post/${post.id}` : '/drafts');
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
          <QuillNoSSRWrapper value={content} onChange={setContent} />
          <input disabled={!content || !title} type="submit" value={post ? "Update" : "Create" } />
          <a className="back" href="#" onClick={() => Router.push(post ? `/post/${post.id}` : '/')}>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id) {
    return { props: {} };
  }

  const post = await prisma.post.findUnique({ where: { id: String(params.id) } });
  return { props: { post } };
};

export default PostDraft;