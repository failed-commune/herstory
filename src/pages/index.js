import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import first_frame from '../images/first_frame.png'


const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <img src={first_frame} alt="나와 닮은 여성 위인 찾기"/>
    <h3>여러분에게는 롤모델이 있나요? <br/>나의 성향과 닮은 세계의 위인을 만나보세요.</h3>
    <Link to="/page-1/">
      <button className='startButton'>시작하기</button></Link> <br />
  </Layout>
)

export default IndexPage
