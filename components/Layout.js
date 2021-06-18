import React from "react";
import Head from "next/head";
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, menu }) => {
  return (
    <div>
      <Head>
        <title>Accel Robotics</title>
      </Head>
      <Header menu={menu} />
      <main className="main">{children}</main>
      <Footer menu={menu} />
    </div>
  );
};

export default Layout;
