import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import na_hyesuk from "../images/na_hyesuk.jpg"
import maria_sklodowska_curie from "../images/maria_sklodowska_curie.jpg"
import kim_maria from "../images/kim_maria.jpg"
import sinsaimdang from "../images/sinsaimdang.jpg"
import zaha_hadid from "../images/zaha_hadid.jpg"
import ada_lovelace from "../images/ada_lovelace.jpg"
import edmonia_lewis from "../images/edmonia_lewis.jpg"
import florence_nightingale from "../images/first_frame.png"
import park_esther from "../images/first_frame.png"
import nam_jahyeon from "../images/first_frame.png"
import hedy_lamarr from "../images/first_frame.png"
import queen_seondeok from "../images/first_frame.png"
import helen_keller from "../images/first_frame.png"
import emmy_noether from "../images/first_frame.png"
import kim_myungsoon from "../images/first_frame.png"
import mileva_maric from "../images/first_frame.png"

const Result = ({ location }) => {
  if (!location.state) return <div />

  //사용자 대답
  const answer = location.state.props;
  //대답에 따른 인덱싱
  var answerNo = 0;
  switch (answer) {
    case 'aaaa':
      answerNo = 0; break;
    case 'aaab':
      answerNo = 1; break;
    case 'aaba':
      answerNo = 2; break;
    case 'aabb':
      answerNo = 3; break;
    case 'abaa':
      answerNo = 4; break;
    case 'abab':
      answerNo = 5; break;
    case 'abba':
      answerNo = 6; break;
    case 'abbb':
      answerNo = 7; break;
    case 'baaa':
      answerNo = 8; break;
    case 'baab':
      answerNo = 9; break;
    case 'baba':
      answerNo = 10; break;
    case 'babb':
      answerNo = 11; break;
    case 'bbaa':
      answerNo = 12; break;
    case 'bbab':
      answerNo = 13; break;
    case 'bbba':
      answerNo = 14; break;
    case 'bbbb':
      answerNo = 15; break;
    default:
      answerNo = 0;
  }
  //인물 데이터
  const data = [
    {
      name: '김마리아',
      image: kim_maria,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '플로렌스 나이팅게일',
      image: florence_nightingale,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '박에스더',
      image: park_esther,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '남자현',
      image: nam_jahyeon,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '자하 하디드',
      image: zaha_hadid,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '헤디 라미르',
      image: hedy_lamarr,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '선덕여왕',
      image: queen_seondeok,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '헬렌 켈러',
      image: helen_keller,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '에이다 러브레이스',
      image: ada_lovelace,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '에미 네터',
      image: emmy_noether,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '마리 퀴리',
      image: maria_sklodowska_curie,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '김명순',
      image: kim_myungsoon,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '미레바 마릭',
      image: mileva_maric,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '신사임당',
      image: sinsaimdang,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '나혜석',
      image: na_hyesuk,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '에드모니아 루이스',
      image: edmonia_lewis,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
  ]

  return (
    <Layout>
      <SEO title="Result page" />
      <h1>당신과 닮은 위인은</h1>
      <p>{data[answerNo].name}</p>
      {/* <div>{location.state.props}</div> */}
      <img src={data[answerNo].image} alt={data[answerNo].name}/>
      <h3>{data[answerNo].comment}</h3>
      <p>{data[answerNo].discription}</p>

      <button to='' className="startButton">위인들 더 알아보기</button>
      <button className="startButton">내 결과 공유하기</button>
      <br></br>
      <Link to="/" className="againButton">다시 검사하기</Link>

    </Layout>
  )
}


export default Result
