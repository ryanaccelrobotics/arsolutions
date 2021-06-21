import React, { useEffect } from 'react'
import { RichText } from 'prismic-reactjs'
import { useRouter } from 'next/router'
import { Link } from 'prismic-reactjs'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const TabbedCarousel = ({ slice }) => {
  const router = useRouter()
  const itemClass = router.asPath.endsWith('/') ? slice.primary.activeClass : router.asPath.endsWith(`#` + slice.primary.sectionId) ? 'selected' : ''

  // console.log(slice) 
  // console.log(router)
  // console.log(`#` + slice.primary.sectionId);
  // console.log(router.asPath)
  // console.log(router.asPath.endsWith('/'))
  // console.log(router.asPath.endsWith(`#` + slice.primary.sectionId))

  return (
   <section /*id={slice.primary.sectionId}*/ className={`image-gallery ` + slice.primary.class + ` ` + itemClass}>
      <div className="container">
        <div className="gallery-text">
          <RichText render={slice.primary.carouselSubTitle} />
          <RichText render={slice.primary.carouselTitle} />
          <RichText render={slice.primary.carouselDescription} />
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
              </div>
            )}
          </Carousel>
          </div>
        </div>
      </div>
  </section>
  )
}

export default TabbedCarousel;