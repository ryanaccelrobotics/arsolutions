import React from 'react';

const FullWidthImage = ({ slice }) => (
  <section id={slice.primary.sectionId} className={`container ` + slice.primary.class}>
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
  </section>
);

export default FullWidthImage;