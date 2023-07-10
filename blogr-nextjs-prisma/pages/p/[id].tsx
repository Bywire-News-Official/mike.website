import React, { useState } from "react";
import prisma from '../../lib/prisma';
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
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
  let title = props.title;
  if (!published) {
    title = `${title} (Draft)`;
  }

  const publishPost = async (publish: boolean) => {
    const token = localStorage.getItem("token");

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

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <ReactMarkdown children={props.content} />
        <button onClick={() => publishPost(!published)}>
          {published ? "Unpublish" : "Publish"}
        </button>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }
    
        .actions {
          margin-top: 2rem;
        }
    
        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }
    
        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
}

export default Post;