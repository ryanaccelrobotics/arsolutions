import React, { useEffect } from 'react'
import { RichText } from 'prismic-reactjs'
import { useRouter } from 'next/router'
import { Link } from 'prismic-reactjs'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselSlice = ({ slice }) => {
  //console.log(slice)
  const router = useRouter()
  //console.log(router)

  console.log(router.asPath.endsWith("#location-entertainment-sports"))
  return (
   <section id={slice.primary.sectionId} className={`image-gallery ` + slice.primary.class}>
      <div className="container">
        <div className="gallery-text">
          <RichText render={slice.primary.gallerySubTitle} />
          <RichText render={slice.primary.galleryTitle} />
          <RichText render={slice.primary.galleryDescription} />
        </div>
        <div className="gallery-images">
          <div className="gallery-items">
          <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          showIndicators={false}
          interval={10000}
          transitionTime={1000}>
            { slice?.items?.map((item, i) =>
              <div key={i} className="gallery-item">
                <img
                  src={item.image.url}
                  alt={item.image.alt}
                />
                {/* <RichText render={item.imageDescription}/>
                <p>
                  <a className="gallery-link" href={Link.url(item.link)}>
                    <span>{item.linkLabel}</span>
                  </a>
                </p> */}
              </div>
            )}
          </Carousel>
          </div>
        </div>
      </div>
  </section>
  )
}

export default CarouselSlice