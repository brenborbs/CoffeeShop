import React from 'react';

export default (props) => (
  <div 
  className="container-blog"
  // style={{ margin: '2em 15em 3em 15em' }} 
  >
  <div className="row" >
    <div className="col full" >
    <div className="entry-content" 
        dangerouslySetInnerHTML={{__html: props.content}}
      />
    </div>
  
  </div> 
  </div>
)