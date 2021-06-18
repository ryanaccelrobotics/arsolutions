import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section>
    <div className="container">
      <span className="title">
        {
          slice.primary.title ?
          <RichText render={slice.primary.title}/>
          : <h2>Template slice, update me!</h2>
        }
      </span>
      {
        slice.primary.description ?
        <RichText render={slice.primary.description}/>
        : <p>start by editing this slice from inside the SliceMachine builder!</p>
      }
    </div>
  </section>
);

export default MySlice;
