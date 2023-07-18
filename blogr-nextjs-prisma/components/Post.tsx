import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import Link from 'next/link'; // Add this line

export type PostProps = {
  id: string;
  slug: string; 
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
  image?: string;  // Add image field as optional
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/p/[slug]", `/p/${post.slug}`)}> {/* Use post.slug here instead of post.id */}
      <Link href={`/p/${post.slug}`}> {/* Wrap the title in a Link component */}
        <a><h2>{post.title}</h2></a>
      </Link>
      <small>By {authorName}</small>
      <Link href={`/p/${post.slug}`}> {/* Wrap the content in a Link component */}
        <a><ReactMarkdown children={post.content} /></a>
      </Link>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
