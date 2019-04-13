import React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Preview from './Post-Preview';


export default class PostList extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;
    const hasNext = this.props.data.posts.pageInfo.hasNextPage;
    return (
     <Layout>
       <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
       
        <div className="jumbotron" style={{ textAlign: 'center' }} >
          <h1 className="display-4">Our Many Stories!</h1>
          <p className="lead">Read our stories below to guide you for your next Coffee adventure.</p>
          <hr className="my-4"/>
          <p>All stories carefully written by our rock star staffs.</p>
        </div>

       <div className="container" >
          <div className="row" >
                <div className="col-md-10 blogShort">
                {posts.map(({node}) => (
                    <Preview
                      key={node.frontmatter.id} 
                      fluidImage={node.frontmatter.postImage.childImageSharp.fluid}
                      slug={node.frontmatter.slug}
                      title={node.frontmatter.title}
                      date={node.frontmatter.date}
                      // category={node.frontmatter.category}
                      description={node.frontmatter.metaDescription} />
                  ))}
                            <div className="clearfix" style={{ marginBottom: '2em' }} >
                            {hasNext &&
                            <Link
                              className="btn btn-yellow float-right"
                              to={this.props.pageContext.nextPage}>
                              Next Page &rarr;
                              </Link>
                        }
                        </div>
                        </div>                       
                    </div>
                </div>
    </Layout>
    )
  }
}


export const blogListQuery = graphql`
  query posts($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "post"}}},
      sort: {fields: frontmatter___date, order: DESC},
      limit: $limit,
      skip: $skip,
    ) {
      edges {
        node {
          frontmatter {
            id
            title
            date(formatString: "MMM Do YYYY")
            metaDescription
            slug 
              postImage {
                childImageSharp {
                  fluid(maxWidth: 1080, maxHeight: 480) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      pageInfo {
        hasNextPage
      }
    }
  }
`

  
  




