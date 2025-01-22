import React from "react"
import { graphql } from "gatsby"

const HelloPage = ({ data }) => {
  const title = data.allMicrocmsShops.edges[0].node.title

  return (
    <main>
      <h1>Hello Page</h1>
      <p>{title}</p>
    </main>
  )
}

export const query = graphql`
  query {
    allMicrocmsShops {
      edges {
        node {
          title
        }
      }
    }
  }
`

export default HelloPage
