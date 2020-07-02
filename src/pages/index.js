import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from "../components/Home/Info"
import Footer from "../components/Globals/Footer"

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

const IndexPage = ({ data }) => (
  <Layout className="custom-nice">
    <SEO title="Home" />
    {/*<h1>Hi People</h1>*/}
    <BackgroundSection 
      img={ data.img.childImageSharp.fluid }
      title="Gaming 2.0"
      styleClass="default-background"
    />
    <Info />
    <Footer name="Zaime Ali" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: {eq: "bg1.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 7000, maxHeight: 4000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage
