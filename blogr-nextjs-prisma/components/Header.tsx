import React from 'react';
import Link from 'next/link'; 
import { useRouter } from 'next/router' //This line imports the useRouter Hook from Next.js. This will allow the navigation of the application. 

//This is a functional component named Header
const Header: React.FC = () => {
  const router = useRouter(); //we use the Hook here.

  //In the return statement we are building out a Navbar which has links to different routes.
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      {/*The Link component is a Next.js component that enables client-side navigation. */}
      {/*Dynamically adding the active class to the nav link based on the current route. */}
      <Link href="/">
        <a className={'navbar-brand' + (router.pathname === '/' ? ' active' : '')}>MO</a>
      </Link>
       {/*button for responsive navbar*/}
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
        {/*possible mistake in the line below as it does not indicate active class for 'Contact', instead, it applies to '/'. */}
        <a className={'nav-link' + (router.pathname === '/' ? ' Contact' : '')}>Contact</a>
      </Link>
    </li>
  </ul>
</div>
    </nav>
  );
}

//Exports Header component.
export default Header;