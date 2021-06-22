import React from "react";
import { RichText, Link } from 'prismic-reactjs'

const Footer = ({ menu = [] }) => (
    <section className="site-footer">
      <div className="container">
        <a href="/" className="logo">
          {RichText.asText(menu.data.title)}
        </a>
        <div className="footer-menu">
          <Links menuLinks={menu.data.menu_links} />
        </div>
        <div className="site-sub-footer">
          <div className="footer-sub-menu">
            <ul>
              <li>&copy; 2021 Accel Robotics</li>
            </ul>
          </div>
          <div className="footer-social">
            <ul>
              <li><a href="https://www.twitter.com/accelrobotics" target="_blank"><img src="images/icon-twitter.svg" alt="" /></a></li>
              <li><a href="https://www.facebook.com/accelrobotics" target="_blank"><img src="images/icon-facebook.svg" alt="" /></a></li>
              <li><a href="https://www.linkedin.com/company/accel-robotics/" target="_blank"><img src="images/icon-linkedin.svg" alt="" /></a></li>
            </ul>

          </div>
        </div>
      </div>
    </section>
);

const Links = ({menuLinks}) => {
  if (menuLinks) {
    return (
      <nav>
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li key={`menulink-${index}`}>
              <a href={Link.url(menuLink.link)}>
                {RichText.asText(menuLink.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  return null
}

export default Footer;
