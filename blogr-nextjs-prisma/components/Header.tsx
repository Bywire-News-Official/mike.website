import React, { useEffect, useState } from 'react';
import Link from 'next/link'; 
import { useRouter } from 'next/router';
import Head from 'next/head';

const Header: React.FC = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  }, []);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Michael O'Sullivan",
    "jobTitle": ["CEO of Bywire News", "Asst AI", "UK Fact Check"],
    "url": "https://www.mike.website",
    "sameAs": [
      "https://www.linkedin.com/in/heavymossman",
      "https://twitter.com/bywirenews",
      "https://instagram.com/ukfactcheckpolitics",
    ]
  }

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <Link href="/">
          <a className={'navbar-brand' + (router.pathname === '/' ? ' active' : '')}>
            <img src="/logo.png" alt="logo" height="80" width="80" />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/about">
                <a className={'nav-link' + (router.pathname === '/about' ? ' active' : '')}>About</a>
              </Link>
            </li>
            {
              // Only show certain links if user is logged in
              loggedIn && (
                <>
                  <li className="nav-item">
                    <Link href="/drafts">
                      <a className={'nav-link' + (router.pathname === '/drafts' ? ' active' : '')}>My drafts</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/create">
                      <a className={'nav-link' + (router.pathname === '/create' ? ' active' : '')}>New post</a>
                    </Link>
                  </li>
                </>
              )
            }
            <li className="nav-item">
              <Link href="/projects">
                <a className={'nav-link' + (router.pathname === '/projects' ? ' active' : '')}>Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className={'nav-link' + (router.pathname === '/blog' ? ' active' : '')}>Blog</a>
              </Link>
            </li>
            {
              // If user is logged out, show login link
              !loggedIn && (
                <li className="nav-item">
                  <Link href="/login">
                    <a className={'nav-link' + (router.pathname === '/login' ? ' active' : '')}>Log in</a>
                  </Link>
                </li>
              )
            }
            {
              // If user is logged in, show logout button
              loggedIn && (
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() => {
                    localStorage.removeItem('token');
                    setLoggedIn(false);
                  }}>
                    Logout
                  </button>
                </li>
              )
            }
            <li className="nav-item">
              <Link href="/contact">
                <a className={'nav-link' + (router.pathname === '/contact' ? ' active' : '')}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
