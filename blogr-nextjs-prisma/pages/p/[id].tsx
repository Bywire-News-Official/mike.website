import React, { useState, useEffect } from "react";
import prisma from '../../lib/prisma';
import Router, { useRouter } from 'next/router';
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  // If the post is not found return a 404 page
  if (!post) {
    return {
      notFound: true
    };
  }

  // Convert date objects to string
  const formattedPost = {
    id: post.id,
    title: post.title,
    content: post.content,
    published: post.published,
    createdAt: post.createdAt.toISOString(),
    author: post.author,
    image: post.image
  };

  return {
    props: formattedPost,
  };
};

const Post: React.FC<any> = (props) => {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const [published, setPublished] = useState(props.published);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const tokenStored = window.localStorage.getItem("token"); 
    if (tokenStored) {
      setToken(tokenStored);
    }
  }, []);

  useEffect(() => {
    setTitle(props.title);
    setContent(props.content);
    setPublished(props.published);
  }, [props]);

  let displayTitle = title;
  if (!published) {
    displayTitle = `${title} (Draft)`;
  }

  const publishPost = async (publish: boolean) => {
    const res = await fetch(`/api/auth/publish/${props.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ publish }),
    });

    if (res.ok) {
      setPublished(publish);
    } else {
      // handle error here
    }
  };

  const deletePost = async () => {
    const res = await fetch(`/api/auth/delete/${props.id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });

    if (res.ok) {
      return Router.push('/');
    } else {
     // handle error here
    }
  };

  return (
    <Layout>
        <div className="container">    
            <div className="row mt-1">
                <div className="col col-md-2"></div>
                <div className="col-md-8 whitebk">
                    <div className="">
                       
                        <h1 className="my-1">{displayTitle}</h1>
                        <p>By {props?.author?.name || "Unknown author"}</p>

                        {/* Convert strings back to Date objects */}
                        <p>Published at: {new Date(props.createdAt).toLocaleString()} 
                     </p>

                        {props.image && <img src={props.image} alt={props.title} className="img-fluid" />}
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        <br />
                        {token && (
                        <>
                            <button className="btn btn-sm btn-outline-primary me-2 mt-1" onClick={() => publishPost(!published)}>
                            {published ? "Unpublish" : "Publish"}
                            </button> 
                            
                            <button className="btn btn-sm btn-outline-primary me-2 mt-1" onClick={() => {Router.push(`/create?id=${props.id}`);}}>Edit</button>
                            
                            <button className="btn btn-sm btn-outline-primary me-2 mt-1" onClick={deletePost}>Delete</button>
                        </>
                        )}
                    </div>
                </div>
                <div className="col col-md-2">
                <button className="btn btn-sm btn-outline-primary" onClick={() => router.back()}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                </div>
            </div>
        </div>
        <style jsx>{`
            .actions {
            margin-top: 2rem;
            }
        `}</style>
    </Layout>
  );
}

export default Post;