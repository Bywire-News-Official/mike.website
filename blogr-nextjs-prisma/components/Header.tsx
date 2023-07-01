import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className={'navbar-brand' + (router.pathname === '/' ? ' active' : '')}>Home</a>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a className={'nav-link' + (router.pathname === '/' ? ' active' : '')}>Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className={'nav-link' + (router.pathname === '/about' ? ' active' : '')}>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;