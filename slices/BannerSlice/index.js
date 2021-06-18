import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'

const BannerSlice = ({ slice }) => (
    <section className="homepage-banner">
      <div className="container">
        <h2 className="banner-title">{RichText.asText(slice.primary.title)}</h2>
        <div className="banner-description">
          <RichText render={slice.primary.description} />
        </div>
        <a href={Link.url(slice.primary.link)}>
          { slice.primary.linkLabel }
        </a>
      </div>
    </section>
)

export default BannerSlice
