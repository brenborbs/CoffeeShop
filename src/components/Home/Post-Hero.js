import React from 'react';


export default props => (
          <div className="jumbotron" style={{ textAlign: 'center' }} >
          <h1 className="display-4">{props.title}</h1>
          <p className="lead">{props.metaDescription}</p>
          <hr className="my-4"/>
          <p>{props.date}</p>
          <p>Written by:<strong> {props.author}</strong></p>
        </div>
)