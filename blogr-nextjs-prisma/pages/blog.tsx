import { Prisma } from '@prisma/client';
import React from 'react';
import prisma from '../lib/prisma';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Post, { PostProps } from '../components/Post';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  const serializedFeed = feed.map((post: Prisma.PostGetPayload<{include: {author:true}}>) => ({
    ...post,
    createdAt: post.createdAt instanceof Date ? post.createdAt.toISOString() : post.createdAt,
    updatedAt: post.updatedAt instanceof Date ? post.updatedAt.toISOString() : post.updatedAt,
  }));

  return {
    props: { feed: serializedFeed },
    revalidate: 10,
   }
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = ({ feed }) => {
  const truncate = input => input.length > 100 ? `${input.substring(0, 100)}...` : input;

  return (
    <Layout>
      <div className="page megaMargin">
         <h1>Public Feed</h1>
         <main>
           {feed.map((post) => (
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
               <Link href="/p/[slug]" as={`/p/${post.slug}`}>
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