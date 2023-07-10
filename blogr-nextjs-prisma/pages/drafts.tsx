import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import Post, { PostProps } from '../components/Post';
import prisma from '../lib/prisma';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies['token']; // replace with the name of your cookie

  if (!token) {
    return {
      props: { drafts: [] },
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY!);

    const drafts = await prisma.post.findMany({
      where: {
        published: false,
      },
      include: {
        author: {
          select: { name: true },
        },
      },
    });

    return {
      props: { drafts },
    };
  } catch (err) {
    return {
      props: { drafts: [] },
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
};

type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>My Drafts</h1>
        <main>
          {props.drafts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: var(--geist-background);
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
  );
};

export default Drafts;
