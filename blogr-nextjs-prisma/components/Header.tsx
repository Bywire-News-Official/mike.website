import React from 'react';
import Link from 'next/link'; 
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <Link href="/">
      <a className={'navbar-brand' + (router.pathname === '/' ? ' active' : '')}>
          <img src="/logo.png" alt="logo" height="80" width="55" />
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