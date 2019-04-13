import React from 'react';
import Layout from '../../components/layout';
import Hero from './Post-Hero';
import Body from './Post-Body';
import SEO from '../../components/seo';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const {
    author,
    slug,
    date,
    title,
    metaDescription,
  } = data.post.frontmatter;
  const content = data.post.html;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero 
      date={date} title={title} description={metaDescription} slug={slug} author={author}
      />
        <Body 
        content={content}
        description={metaDescription}
        fluidImage={data.post.frontmatter.postImage.childImageSharp.fluid}
        />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMM Do, YYYY")
        title
        slug
        author
        metaDescription
        postImage {
          childImageSharp {
            fluid(maxWidth: 1080, maxHeight: 512) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    date: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        date
      }
    }
  }
`
