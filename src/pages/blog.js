import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from "../components/Home/Info"
import Footer from "../components/Globals/Footer"

const BlogPage = ({ data }) => (
  <Layout className="custom-nice">
    <SEO title="Home" />
    <BackgroundSection 
      img={ data.img.childImageSharp.fluid }
      title="Blog"
      styleClass="another-background"
    />
    <Info />
    <Footer name="Zaime Ali" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: {eq: "bg2.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 7000, maxHeight: 4000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default BlogPage
