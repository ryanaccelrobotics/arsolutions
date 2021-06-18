import React from 'react';
import { RichText } from 'prismic-reactjs';
import { useRouter } from 'next/router';
import { Link } from 'prismic-reactjs'

const customLink = (type, element, content, children, index) => {
  const router = useRouter()

  console.log('------')
  console.log(type)
  console.log(element)
  console.log(content)
  console.log(children)
  console.log(index)

  const handleClick = (e) => {
    e.preventDefault()
    // console.log(element.data.url)
    router.push(element.data.url)
    // console.log(href)
  }

  
  // console.log(element.data.url)
  // console.log((router.asPath).substring(1))

  // console.log(router.asPath.endsWith('/'))
  //console.log((element.data.url).indexOf((router.asPath).substring(1)) > 0)

  const linkClass = (element.data.url).indexOf((router.asPath).substring(1)) > 0 ? `selected` : ``;
  
  return (
    <a className={linkClass} href={element.data.url} onClick={handleClick}>!!!!{content}!!!</a>
  )
}

const TabbedContent = ({ slice }) => {
  return (
    <section id={slice.primary.sectionId} className={`tabbed-content ` + slice.primary.class}>
      <div className="container">
        <RichText render={slice.primary.title} />
        <RichText render={slice.primary.text} />
        <ul>
          {
            slice?.items?.map((item, index) => <LinkItem item={item} index={index} key={index} />)
          }
        </ul>
      </div>
    </section>
  )
}

const LinkItem = ({ item, index, key }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    // console.log(e.target.href)
    router.push(e.target.href)
  }

  // console.log(item)
  console.log(router.asPath.endsWith('/'))
  console.log((Link.url(item.link)).indexOf((router.asPath).substring(1)) > 0)
  
  const itemClass = router.asPath.endsWith('/') ? item.activeClass : (Link.url(item.link)).indexOf((router.asPath).substring(1)) > 0 ? 'selected' : ''
  
  console.log(itemClass)

  // console.log(index);

  return (
    <li>
      <a className={itemClass} key={`item.link-${key}`} onClick={handleClick} href={Link.url(item.link)}>
        {item.linkLabel}
      </a>
    </li>
  )
}

export default TabbedContent;