import React, { useEffect, useState } from "react"
import "./card.css"
import { Link } from "gatsby"

const Card = () => {
    //질문 답변 세트
    const data = [
        {
            text: '중요한 면접이 있는 날 긴장 바짝하고 허둥지둥 집을 나선 당신, 누군가 길에서 고양이를 때리는 장면을 보았다면?',
            answer1: '이런 #$@%#! 면접이고 뭐고 고양이부터 구한다',
            answer2: '고양아 미안,, 그래도 면접은 보러가야지 (눈물을 훔치며)'
        },
        {
            text: '최근에 서핑을 시작한 당신, 다른 사람들이 탈 때는 쉬워보였는데 막상 해보니 일어서지도 못하고 있습니다ㅠㅠ 이 때 당신의 선택은?',
            answer1: '이왕 시작한거 한 번 시원하게 타봐야지. 파도가 이기나 내가 이기나 몸이 부서져라 연습한다',
            answer2: '아 뭐 안되면 말고~ 저기서 비치발리볼이나 해볼까?',
        },
        {
            text: '친구가 모르는 문제를 물어봤을 때, 당신의 반응은?',
            answer1: '이걸 왜 이해를 못하지...? 더이상의 설명을 포기한다',
            answer2: '아 나도 그거 이해안갔는데! 하며 처음부터 차근차근 설명해준다',
        },
        {
            text: '아이패드를 사기로 결심하게 된 당신, 사게 된 결정적인 이유는 무엇일까?',
            answer1: '여러 자료들도 담아서 편하게 볼 수 있고, 이것저것 사느니, 아이패드 하나 사는게 이득이야!',
            answer2: '아이패드로 다이어리도 이쁘게 꾸미고, 그림도 그리고 아이패드가 너무 사고싶어서!',
        },
    ]

    //사용자 답변 모음 state
    const [answer, setAnswer] = useState('');
    const [cardIndex, setCardIndex] = useState(0);

    useEffect(() => {
        if (cardIndex === 3)
            console.log("last index");
    }, [cardIndex]);

    function add(value) {
        setAnswer(answer + value);
        if (cardIndex < 4) {
            setCardIndex(cardIndex + 1);
        }
    };

    return (
        <div>
            {cardIndex === 4 ? <Link to='/result/' state={{ props: answer }} className="toResult">결과보기</Link> : <div><h2 className="question">{data[cardIndex].text}</h2>
                <button onClick={() => add('a')}>{data[cardIndex].answer1}</button><br/>
                <button onClick={() => add('b')}>{data[cardIndex].answer2}</button></div>
            }
        </div>
    );
}

export default Card
