import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Pay = ({ data: { pay } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={pay.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{pay.title}</h1>
        <p className="sheet__lead">{pay.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={pay.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: pay.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Pay

export const query = graphql`
  query PayQuery {
    pay: datoCmsPayPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
