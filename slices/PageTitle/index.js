import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section className={`page-title ` + slice.primary.class}>
    <div className="container">
      <div className="brow"><RichText render={slice.primary.section}/></div>
      <RichText render={slice.primary.title}/>
    </div>
  </section>
);

export default MySlice;
