import React from 'react'
import { RichText } from 'prismic-reactjs'

const QuoteSlice = ({ slice }) => (
  <section className="container quote">
    <div className="container">
      <blockquote>
        {RichText.asText(slice.primary.quotetext)}
      </blockquote>
    </div>
  </section>
)

export default QuoteSlice
