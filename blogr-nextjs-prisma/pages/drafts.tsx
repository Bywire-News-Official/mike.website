import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Post, { PostProps } from '../components/Post';
import Router from 'next/router';

const Drafts: React.FC = () => {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const fetchDrafts = async () => {
      const token = localStorage.getItem('token');

      const res = await fetch('/api/auth/drafts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.ok) {
        const drafts = await res.json();
        setDrafts(drafts);
      } else {
        Router.push('/login');
      }
    };

    fetchDrafts();
  }, []);

  return (
    <Layout>
      <div className="page megaMargin">
        <h1>My Drafts</h1>
        <main>
          {drafts.map((post) => (
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