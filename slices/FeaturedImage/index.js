import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'

const FeaturedImage = ({ slice }) => (
  <section id={slice.primary.sectionId} className={`featured-image-section ` + slice.primary.class}>
    <div className="container">
      <div className="featured-image">
        <img
          src={slice.primary.featuredImage.url}
          alt={slice.primary.featuredImage.alt}
        />
      </div>
      <div className="featured-text">
        <div className="brow">
          <RichText render={slice.primary.subTitle} />
        </div>
        <RichText render={slice.primary.title} />
        <RichText render={slice.primary.description} />
        <p>
          <a href={Link.url(slice.primary.link)}>
            <span>{slice.primary.linkLabel}</span>
          </a>
        </p>
      </div>
    </div>
  </section>
)

export default FeaturedImage
