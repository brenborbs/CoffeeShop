import React from 'react';

export default (props) => (
  <div style={{ margin: '2em 15em 3em 15em' }} >
      <div className="post-body" 
        dangerouslySetInnerHTML={{__html: props.content}}
      />
  </div>
)