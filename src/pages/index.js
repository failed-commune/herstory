import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>나와 닮은 위인 찾기</h1>
    <h3>여러분에게는 롤모델이 있나요?
    나의 성향과 닮은 세계의 위인을 만나보세요.</h3>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/page-1/">
      <button style={{padding: '5px', background: '#18A0FB', borderradius: '10px', border: 'none'}}>시작하기</button></Link> <br />
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
