import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="container">  
    <Header />
    <div className="layout">{props.children}</div>
      <Footer />
  </div>
);

export default Layout;
