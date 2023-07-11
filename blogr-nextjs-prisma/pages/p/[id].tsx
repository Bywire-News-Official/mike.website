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
  return {
    props: post,
  };
};

const Post: React.FC<any> = (props) => {
  const [published, setPublished] = useState(props.published);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const tokenStored = window.localStorage.getItem("token");
    if (tokenStored) {
      setToken(tokenStored);
    }
  }, []);

  let title = props.title;
  if (!published) {
    title = `${title} (Draft)`;
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
      <div className="megaMargin">
        <button className="btn btn-sm btn-outline-primary" onClick={() => router.back()}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2 className="my-3">{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <br />
        {token && (
          <>
            <button className="btn btn-sm btn-outline-primary me-2 mt-1" onClick={() => publishPost(!published)}>
              {published ? "Unpublish" : "Publish"}
            </button> 
            <button className="btn btn-sm btn-outline-primary mt-1" onClick={deletePost}>Delete</button>
          </>
        )}
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