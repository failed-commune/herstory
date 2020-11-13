import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

class Page extends React.Component{


  render() {
    return (
      <div>
          <Layout>
            <SEO title="Page one" />
            <Card/>
          </Layout>
        </div>
    )
  }

};


export default Page;
