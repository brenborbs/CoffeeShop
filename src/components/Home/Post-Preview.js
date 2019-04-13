import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default (props) => (
        
    <React.Fragment>
                <div className="post-preview" >
                    <h1 style={{ color: 'brown' , fontSize: '36px' }} >{props.title}</h1>
                     <Img 
                     fluid={props.fluidImage}
                     className="pull-left img-responsive thumb margin10 img-thumbnail"
                     alt=""
                     />
                     <article className="post-preview-desc" ><p>{props.description}</p></article>
                     <p>{props.date}</p>
                     <Link className="btn btn-blog pull-right marginBottom10" to={props.slug} style={{ 
                         color: '#ffffff',
                         backgroundColor: '#2d1e1f',
                         borderColor: '#ff9e09',
                         borderRadius: '0',
                         marginBottom: '10px',
                     }} >
                     READ MORE
                     </Link> 
                </div>
    </React.Fragment>
)