import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Result = () => (
  <Layout>
    <SEO title="Result page" />
    <h1>Hi from the Result page</h1>
    <p>Welcome to result page</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/result/">Go back to the homepage</Link>

  </Layout>
)

export default Result
