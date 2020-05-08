import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import Image from "gatsby-image"
import { Link } from "gatsby"

import { Title } from "../components/type"

const IndexPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Home" />

      {products.map(product => (
        <Link to={product.node.handle}>
          {product.node.images.map(image => (
            <Image fixed={image.localFile.childImageSharp.fixed} />
          ))}
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          title
          handle
          images {
            localFile {
              id
              childImageSharp {
                fixed(width: 1000, traceSVG: { color: "orange" }) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
