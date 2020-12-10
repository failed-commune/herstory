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
      comment: '"쌍권총 김마리아"',
      discription: '\'답답하니 내가한다!\' 화끈하고 당당한 성격을 가진 당신! 독립운동가 \'김마리아\'와 닮으셨군요.',
      discription2: '당신은 쌍권총과 승마술로 일제에 대항했던 김마리아처럼 용감하고 능동적인 것이 가장 큰 장점입니다. 특히 당신의 용감함 도전정신은 다른 사람들에게도 용기를 불어넣을 정도입니다. 하지만 가끔은 행동이 너무 앞서거나, 말이 과격해질때도 있어요. 행동하기 전, 조금만 마음을 가라앉히고 생각해본 뒤 행동에 옮긴다면 더욱 좋은 결과를 낼 수 있을거예요!',
    },
    {
      name: '나이팅게일',
      image: florence_nightingale,
      comment: '"주어진 삶을 살아라. 삶은 멋진 선물이다. 거기에 사소한 것은 아무것도 없다."',
      discription: '당연하다고 여겨지는 것 속에서 불편함을 찾아내는 당신, 통계학의 창시자 \'나이팅게일\'과 닮으셨군요!',
      discription2: '혹시 스스로를 프로불편러라고 생각하나요? 불편함을 찾고, 당신만의 창의적인 방법으로 해결해 나가는 것은 당신의 큰 장점이에요. 가끔 한 문제에 몰두해 다른 것들을 보지 못할 때가 있습니다. 하지만, 그 꾸준함으로 누구도 보지 못한 빛나는 해결책을 찾아낼거에요!'
    },
    {
      name: '박에스더',
      image: park_esther,
      comment: '“하나님이 길을 열어주시는 데는 어느 곳이라도 가겠습니다. 비록 사람들이 나를 죽인다고 할지라도 하나님의 뜻을 전하는 일에 내 목숨을 내놓겠습니다.”',
      discription: '자신이 믿는 옳은 일이라면, 물불 가리지 않고 뛰어드는 당신, 조선 최초의 여성의사 \'박에스더\'와 닮으셨네요!',
      discription2: '당신에게는 온갖 편견과 불리함을 꿋꿋이 이겨내고 보란듯이 목표를 달성하는 의지가 있습니다. 가끔 고집이 세다는 말을 들을 때도 있어요. 하지만, 그런 고집이 당신을 빛내게 합니다. 당신이 옳다고 믿는다면, 고집을 꺾지 마세요! 당신의 선한 영향력은 많은 사람들에게 동기를 부여할거에요.'
    },
    {
      name: '남자현',
      image: nam_jahyeon,
      comment: '"사람이 죽고 사는 것이 먹는 데 있는 것이 아니고 정신에 있다. 독립은 정신으로 이루어진다."',
      discription: '가끔은 자기 자신의 이익보다, 옳다고 믿는 일을 우선시하는 정의감넘치는 당신, 독립운동가 \'남자현\'과 닮으셨네요!',
      discription2: '옳은 일이 무엇인지 아는 사람은 많지만, 실제로 행동하기는 어렵습니다. 당신은 누구보다도 실행력이 뛰어난 행동파! 실행에 멈추지 않고 해야 할 일을 지속적으로 하는 당신은 용기와 꾸준함을 모두 갖추고있습니다. 하지만 가끔은 무모할정도로 옳은 일만 쫓기도 합니다. 조금쯤은 스스로를 위하는 것도 필요합니다. 너무 지치지 않도록 주의하세요!'
    },
    {
      name: '자하 하디드',
      image: zaha_hadid,
      comment: '"나는 여자지만, 내가 훌륭한 건물을 만들 수 있을거라 믿어 의심치 않는다."',
      discription: '안 된다고 할 수록 더 오기가 생기는 당신! 위대한 건축가 \'자하 하디드\'와 닮으셨네요.',
      discription2: '모두가 안된다고 해도 당신은 스스로를 믿고 나아갑니다. 스스로에 대한 굳건한 믿음의 바탕에는, 당신의 뛰어난 재능과 더불어 꾸준한 노력이 있습니다. 스스로를 의심하지 않고 한 발 한 발 꾸준히 나아간다면, 당신의 재능과 노력은 당신을 배신하지 않을거에요!'
    },
    {
      name: '헤디 라미르',
      image: hedy_lamarr,
      comment: '“어떤 젊은 여성도 매혹적으로 보일 수 있다. 가만히 서서 바보처럼 보이기만 하면 된다"',
      discription: '냉소적이어 보이지만, 사실은 불꽃처럼 열정적인 당신! 발명가 \'헤디 라마르\'와 닮았네요.',
      discription2: '번뜩이는 아이디어와 즉흥적으로 실행하는 실행력은 당신의 가장 큰 재능입니다. 특히 실패를 두려워하지 않고 끊임없이 생각을 실체화해나가는 것이 당신에게는 어려운 일이 아니에요. 하지만 가끔은 여유를 가지고 차근차근 계획을 세우는 것도 필요해보입니다. 스스로에게 조금의 여유를 준다면 더 다양한 아이디어를 실행해나갈 원동력을 얻게될지도 몰라요!'
    },
    {
      name: '선덕여왕',
      image: queen_seondeok,
      comment: '"진심을 다하면 내가 변하고, 내가 변하면 모든 것이 변한다"',
      discription: '늘 미래를 좇으며 성장하는 당신! 신라의 왕, \'선덕대왕\'과 닮으셨네요.',
      discription2: '당신은 늘 당신만의 비전이 있습니다. 그 목표를 달성해나감과 동시에 늘 주변사람들도 세심하게 챙기는군요. 당신은 그 무엇도 포기하기가 쉽지 않군요. 당신에게는 특유의 따뜻함과 지혜로움이 있으니, 잘 헤쳐나갈 수 있습니다. 하지만 몸은 하나이니, 휴식도 취해가며 조금은 천천히 나아가는건 어떨까요?'
    },
    {
      name: '헬렌 켈러',
      image: helen_keller,
      comment: '"눈이 먼 것보다 더 안 좋은 게 있을까? 있다. 볼수는 있지만 비전이 없는 사람"',
      discription: '어떠한 역경도 당신을 막을 수는 없군요! 당신은 20세기 가장 큰 영향력을 가졌던 작가이자 사회운동가인 \'헬렌 켈러\'와 닮았습니다.', 
      discription2: '당신에게는 스스로의 문제를 돌파할 수 있는 강인함뿐만 아니라 다른 사람의 문제를 함께 고민하고 해결해나가는 따뜻한 마음이 있습니다. 특히 약자에 대한 공감능력과 섬세한 배려는 당신의 가장 큰 강점입니다. 지금처럼 선한 영향력을 끊임없이 만들어나간다면, 당신이 생각하는 옳은 일에 도달할 수 있을거에요!',
    },
    {
      name: '에이다 러브레이스',
      image: ada_lovelace,
      comment: '"컴퓨터는 우리가 명령하는 방법을 알고 있는 것은 무엇이든 계산해낼 수 있다."',
      discription: '이루기 어려운 목표일수록 더 불타는 당신! 최초의 프로그래머, \'에이다 러브레이스\'와 닮으셨군요.',
      discription2: '당신은 틀에 박힌 사고를 누구보다도 싫어하고, 기존에 있던 개념들도 당신만의 방법으로 정리하는 법을 잘 알고 있습니다. 가끔은 너무 몰두하거나, 친구들로부터 \'쉬운 길을 돌아간다\'는 말을 들을지도 모르겠네요. 하지만 그것이 창조의 첫 단계 아닐까요? 그 과정 속에서 다른 사람들이 보지 못한 법칙들을 발견할 수도 있어요!',
    },
    {
      name: '에미 뇌터',
      image: emmy_noether,
      comment: '"My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously."',
      discription: '어떤 상황에서도 포기하지 않고 늘 열정적인 당신! 천재 수학자이자 물리학자, \'에미뇌터\'와 닮으셨네요.',
      discription2: '다른사람들의 말에 절대 흔들리지 않는 당신! 가끔은 차갑다는 오해를 받을 정도로 이성적이어보이기도 하네요. 하지만 당신이 하나에 몰두하게 되면 누구도 못말릴정도로 열정적인 사람이라는 것을 당신의 가까운 친구라면 잘 알거에요. 당신의 열정과 노력은 주위 사람들마저 감염시킬정도! 당신은 이루고자 하는 법을 꼭 이루는 끈기도 갖추고 있으니, 너무 지치지 않게만 주의하세요!',
    },
    {
      name: '마리아 살로메아 스크워도프스카',
      image: maria_sklodowska_curie,
      comment: '"나는 노벨처럼 생각하는 사람이다. 인간은 새로운 발견을 통해 악보다는 선을 더 얻을 수 있다."',
      discription: 'Why not? 당신은 절대 스스로 한계를 두지 않고 늘 성장해나가는 \'마리퀴리\'와 닮으셨네요!',
      discription2: '당신에게는 모두가 안된다고 할 때에도 자신을 믿고 불도저처럼 밀고나가는 자신감과 실행력이 있습니다. 때떄로 \'근거없는 자신감\'이라는 소리를 들을 정도로 당당하고, 자신감이 넘치네요! 하지만 끊임없이 성장하기 위해 노력하는 당신의 모습을 안다면 누구도 그렇게 말할 수 없을거에요.',
    },
    {
      name: '김명순',
      image: kim_myungsoon,
      comment: '"나는 훌륭한 사람이 되기를 원치 않으며 자유로운 인간이 되길 원한다."',
      discription: '자유로운 존재로 살아가고싶은 당신, 한국 최초의 근대 여성작가인 \'김명순\'을 닮았네요!',
      discription2: '있는 그대로의 내 모습을 드러내는 당당함이 당신의 매력입니다. 누가 뭐라건 한 번 사는 인생, 하고싶은 대로 하고 살고픈 당신. 이런 당신을 주변 사람들은 이해하지 못할 수도 있습니다. 자유롭게 살며 존재감을 드러내는 당신을 못마땅한 눈으로 바라보는 사람들도 있을 수 있습니다. 하지만 당신은 주변의 편견과 시기에도 굴하지 않고 꿋꿋이 자신의 길을 갈 힘이 있는 사람입니다. 사회에서 정해놓은 기준에 맞추지 않더라도 자유롭다는 것 그 자체로 행복하다면 충분한 것이 아닐까요?',

    },
    {
      name: '캐서린 존슨',
      image: mileva_maric,
      comment: '"남자만 지구를 돌라는 규정도 없어요"',
      discription: '좋아하는 것에 빠지면 올인하는 당신! 미국의 천재 수학자, \'캐서린 존슨\'과 닮았네요.',
      discription2: '아무리 힘든 상황이어도, 좋아하는 일이라면 절대 포기하지 않으시군요! 간혹 그런 당신에게 \'일중독자\', 혹은 \'공부벌레\'라고 하는 사람들이 있겠지만 그건 당신을 잘 모르기 때문입니다. 당신은 할 땐 하고 놀 땐 노는, 만능 엔터테이너! 지금처럼 당신이 사랑하는 일에 열중하다보면, 모두 당신의 노력을 알게 될거에요.'
    },
    {
      name: '신사임당',
      image: sinsaimdang,
      comment: '"말은 망령되게 하지 말아야 한다. 기품을 지키되, 사치하지 말고, 자성을 갖추되, 자랑하지 말라."',
      discription: '남들과 같은 걸 봐도 늘 당신만의 감성으로 재해석하는 당신! 조선시대의 화가이자 시인, \'심사임당\'과 닮으셨군요.',
      discription2: '당신은 예리한 통찰력과 섬세한 감수성을 가지고 있습니다. 가끔 주변으로부터 \'오글거린다\'는 말을 들을 수도 있어요. 하지만 당신 특유의 감수성에 공감하는 사람이 더 많을테니 너무 걱정마세요! '
    },
    {
      name: '나혜석',
      image: na_hyesuk,
      comment: '"현모양처는 이상을 정할 것도, 반드시 가져야 할 바도 아니다. 여자를 노예로 만들기 위하여 부덕을 장려한 것이다."',
      discription: '내 사전에 \'할많하않\'은 없다! 할말은 꼭 해야하는 당신, 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요.',
      discription2: '조선 여성도 사람될 욕심을 가져야 한다고 주장한 조선시대의 화가이자 소설가, 나혜석과 꼭 닮았네요. 남들보다 한 발 빨리 불편함을 알아채고 새로운 방법을 발견하는 재능을 가지고 있어요! 누구보다도 섬세하고 예민한 감각을 가지고 있군요. 가끔은 과격한 발언에 놀라는 사람이 있을 수 있습니다. 하지만, 굳이 상냥할 필요가 있을까요? 당신은 그 자체로도 당신과 같은 문제를 겪는 사람들에게 힘이 됩니다. 주변 사람들이 처음에는 알아보지 못했어도 언젠가는 당신의 특별함과 재능을 깨닫게 될거에요.'
    },
    {
      name: '메리 에드모니아 루이스',
      image: edmonia_lewis,
      comment: '"자유로운 숲만큼 아름다운 것은 없다. 배가 고플 때 물고기를 잡아서 나뭇가지를 자르고 불을 피우고 구워서 야외에서 먹는 것이 가장 좋은 사치이다.”',
      discription: '어떤 고난과 역경이 닥쳐도 굴하지 않고 자기만의 길을 가는 당신, 역경을 딛고 아프리카계 미국인 최초의 조각가 메리 에드모니아 루이스를 닮았네요!',
      discription2: '"그럼에도 나는 내가 해야 할 일을 한다." 태풍에 큰 나무는 쓰러져도 연약한 풀이 살아남듯 은근하게 그리고 끊임 없이 목소리를 내는 사람입니다. 다른 사람의 눈치를 보지 않고 옳은 일에 목소리를 내는 당신은 우리 사회에 없어서는 안될 소중한 존재입니다. 담담하고 꿋꿋한 태도를 가진 당신은 운명의 개척자라 불릴만합니다.'
    },
  ]

  return (
    <Layout>
      <SEO title="Result page" />
      <h1>당신과 닮은 위인은</h1>
      {/* <p>{data[answerNo].name}</p> */}
      {/* <div>{location.state.props}</div> */}
      <img src={data[answerNo].image} alt={data[answerNo].name}/>
      <h2>{data[answerNo].comment}</h2>
      <p>{data[answerNo].discription}</p>
      <br></br>
      <p>{data[answerNo].discription2}</p>

      <button to='' className="startButton">위인들 더 알아보기</button>
      <button className="startButton">내 결과 공유하기</button>
      <br></br>
      <Link to="/" className="againButton">다시 검사하기</Link>

    </Layout>
  )
}


export default Result
