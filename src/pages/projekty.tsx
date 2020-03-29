import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Index from "../components/Layout"
import SEO from "../components/seo"
import ProjectList from "../components/ProjectList"


export const query = graphql`
  query {
    allRestApiWpJsonWpV2Posts {
      totalCount
      edges {
        node {
          title {
            rendered
            }
          slug
          acf {
            description
            authors
            year
            client
            location
            image_1 {
              url
              sizes
            }
          }
        }
      }
    }
  }
`


const ProjektyPage = ({ data }) => {
  console.log(data.allRestApiWpJsonWpV2Posts.edges.map(el => ({ title: el.node.title.rendered, image: el.node.acf.image_1 })))
  return (
    <Index>
      <SEO title="Home" />
      <ProjectList projects={data.allRestApiWpJsonWpV2Posts.edges.map(el => ({ title: el.node.title.rendered, image: el.node.acf.image_1 }))} />
    </Index>
  )
}

export default ProjektyPage
