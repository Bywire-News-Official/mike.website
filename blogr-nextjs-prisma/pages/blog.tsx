import { Prisma } from '@prisma/client';
import React from 'react';
import prisma from '../lib/prisma';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Post, { PostProps } from '../components/Post';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
      // Include SEO fields if nested
      seo: true,  
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const serializedFeed = feed.map((post: Prisma.PostGetPayload<{include: {author:true, seo: true}}>) => ({
    ...post,
    createdAt: post.createdAt instanceof Date ? post.createdAt.toISOString() : post.createdAt,
    updatedAt: post.updatedAt instanceof Date ? post.updatedAt.toISOString() : post.updatedAt,
    // Include SEO field if nested
    seo: post.seo,
    // Include image field
    image: post.image,
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
  const truncate = input => input.length > 240 ? `${input.substring(0, 240)}...` : input;

  return (
    <Layout>
      <Container className="page megaMargin">
         <h1>Public Feed</h1>
         <main>
         {feed.map((post) => (
          <Row key={post.id} className="post p-2 whitebk my-5">
            <Col md={8} className="post-content">
              <Link href="/p/[slug]" as={`/p/${post.slug}`}>
                <a><h2>{post.title}</h2></a>
              </Link>
              <div>
                Written by{' '}
                <Link href="/p/[id]" as={`/p/${post.id}`}>
                  <a>{post.author.name}</a>
                </Link>
              </div>
              <Link href="/p/[slug]" as={`/p/${post.slug}`}>
                <a><div dangerouslySetInnerHTML={{__html: truncate(post.content)}} /></a>
              </Link>
              <div className="my-3">
                <Link href="/p/[slug]" as={`/p/${post.slug}`}>
                  <a>Read more</a>
                </Link>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={3} className="post-image">
              {/* Directly access image */}
              <Link href="/p/[slug]" as={`/p/${post.slug}`}>
                <a><img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} /></a>
              </Link>
              <hr className='my-5' />
            </Col>
          </Row>
        ))}
         </main>
      </Container>
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