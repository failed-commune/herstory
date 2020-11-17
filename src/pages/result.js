import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import nahyesuk from "../images/nahyesuk.jpg"

const Result = ({ location }) => {
  if (!location.state) return <div />

  //사용자 대답
  const answer = location.state.props;
  const answerNo = (answer === 'aaaa' ? 0 : 0)

  const data = [
    {
      name: '나혜석',
      image: nahyesuk,
      discription: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다." 내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
  ]

  return (
    <Layout>
      <SEO title="Result page" />
      <h1>당신과 닮은 위인은</h1>
      {/* <p>{data[answerNo].name}</p> */}
      {/* <div>{location.state.props}</div> */}
      <img src={data[answerNo].image}/>
      <p>{data[answerNo].discription}</p>
      <Link to="/" className="againButton">다시 검사하기</Link>

    </Layout>
  )
}


export default Result
