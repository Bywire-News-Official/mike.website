import React from "react";
import prisma from '../lib/prisma';
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
   const feed = await prisma.post.findMany({
     where: { published: true },
     include: {
       author: {
         select: { name: true },
       },
     },
   });

   // Convert Date objects to string
   const serializedFeed = JSON.parse(JSON.stringify(feed));
   serializedFeed.forEach((post) => {
     post.createdAt = new Date(post.createdAt).toISOString();
     post.updatedAt = new Date(post.updatedAt).toISOString();
   });

   return {
     props: { feed: serializedFeed },
     revalidate: 10,
   };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
   const truncate = (input) => input.length > 100 ? `${input.substring(0, 100)}...` : input;

   return (
     <Layout>
       <div className="page megaMargin">
         <h1>Public Feed</h1>
         <main>
           {props.feed.map((post) => (
             <div key={post.id} className="post p-5">
               <h2>{post.title}</h2>
               <div>
                 Written by{' '}
                 <Link href="/p/[id]" as={`/p/${post.id}`}>
                   <a>{post.author.name}</a>
                 </Link>
               </div>
               <div dangerouslySetInnerHTML={{__html: truncate(post.content)}} />
               <div className="mt-3">
                 <Link href="/p/[id]" as={`/p/${post.id}`}>
                   <a>Read more</a>
                 </Link>
               </div>
             </div>
           ))}
         </main>
       </div>
       <style jsx>{`
         .post {
           background: white;
           transition: box-shadow 0.1s ease-in;
         }

         .post:hover {
           box-shadow: 1px 1px 3px #aaa;
         }

         .post + .post {
           margin-top: 2rem;
         }
       `}</style>
     </Layout>
   )
}

export default Blog;