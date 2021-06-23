import React from "react";
import Head from "next/head";
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, menu }) => {
  return (
    <div>
      <Head>
        <title>Accel Robotics</title>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-103888794-1', 'auto');
            ga('send', 'pageview');
        ` }} />
      </Head>
      <Header menu={menu} />
      <main className="main">{children}</main>
      <Footer menu={menu} />
    </div>
  );
};

export default Layout;