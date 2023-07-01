import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    
    <Header />
    
    <main className="container py-4">{props.children}</main>
  </div>
);

export default Layout;
