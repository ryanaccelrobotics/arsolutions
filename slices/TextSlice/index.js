import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'prismic-reactjs'

const TextSlice = ({ slice }) => (
  <section id={slice.primary.sectionId} className={`text-slice ` + slice.primary.class}>
    <div className="container">
      <RichText render={slice.primary.text} />
      <p>
          <a className="btn" href={Link.url(slice.primary.link)}>
            <span>{slice.primary.linkLabel}</span>
          </a>
        </p>
    </div>
  </section>
);

export default TextSlice;
