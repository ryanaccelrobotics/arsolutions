import { Link } from 'react-router-dom';
import React from 'react';
import { RichText } from 'prismic-reactjs';
import { useRouter } from 'next/router';


//const router = useRouter()



const customLink = (type, element, content, children, index) => {
  const router = useRouter()

  // console.log(type)
  // console.log(element)
  // console.log(content)
  // console.log(children)
  // console.log(index)

  const handleClick = (e) => {
    e.preventDefault()
    //console.log(element.data.url)
    router.push(element.data.url)
    // console.log(href)
  }

  return (
    
      <a href={element.data.url} onClick={handleClick}>!!!!{content}!!!</a>
    
  )
}

const TextSlice = ({ slice }) => {
  

  return (
  <section id={slice.primary.sectionId} className={`text-slice ` + slice.primary.class}>
    <div className="container">
      <RichText render={slice.primary.text} serializeHyperlink={customLink} />
    </div>
  </section>
  )
};

export default TextSlice;
