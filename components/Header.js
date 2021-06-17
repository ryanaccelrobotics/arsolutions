import React from "react";
import { RichText, Link } from 'prismic-reactjs'

const Header = ({ menu = [] }) => (
    <header className="site-header">
      <div className="container">
        <a href="/" className="logo">
          {RichText.asText(menu.data.title)}
        </a>
        <Links menuLinks={menu.data.menu_links} />
      </div>
    </header>
);

const Links = ({menuLinks}) => {
  if (menuLinks) {
    return (
      <nav className="main-nav hidden">
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

export default Header;
