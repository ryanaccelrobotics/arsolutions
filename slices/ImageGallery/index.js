import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'

const ImageGallery = ({ slice }) => {
  console.log(slice)
  return (
   <section id={slice.primary.sectionId} className={`image-gallery ` + slice.primary.class}>
      <div className="container">
        <div className="gallery-text">
          <RichText render={slice.primary.gallerySubTitle} />
          <RichText render={slice.primary.galleryTitle} />
          <RichText render={slice.primary.galleryDescription} />
        </div>
        <div className="gallery-items items-end">
          { slice?.items?.map((item, i) =>
            <div key={i} className="gallery-item flex-wrap">
              <img
                src={item.image.url}
                alt={item.image.alt}
              />
              <RichText render={item.imageDescription}/>
              {/* <p>
                <a className="gallery-link" href={Link.url(item.link)}>
                  <span>{item.linkLabel}</span>
                </a>
              </p> */}
            </div>
          )}
        </div>
      </div>
  </section>
  )
}

export default ImageGallery