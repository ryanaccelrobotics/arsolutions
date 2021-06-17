import React from "react";
import { RichText, Link } from 'prismic-reactjs'

const Footer = ({ menu = [] }) => (
    <section className="site-footer">
      <a href="/" className="logo">
        {RichText.asText(menu.data.title)}
      </a>
      <Links menuLinks={menu.data.menu_links} />
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
