import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi People</h1>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: {eq: "default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage
