import React from 'react';
import Link from 'next/link'; 
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  // If session loading
  if (status === 'loading') {
    return (
      <nav className="navbar navbar-light bg-light p-3">
        <p>Validating session ...</p>
      </nav>
    );
  }

  return (
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
          {
            // Only show certain links if user is logged in
            session && (
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
            <Link href="/about">
              <a className={'nav-link' + (router.pathname === '/about' ? ' active' : '')}>About</a>
            </Link>
          </li>
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
            !session && (
              <li className="nav-item">
                <Link href="/api/auth/signin">
                  <a className={'nav-link' + (router.pathname === '/signup' ? ' active' : '')}>Log in</a>
                </Link>
              </li>
            )
          }
          {
            // If user is logged in, show logout button
            session && (
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => signOut()}>
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
  );
}

export default Header;