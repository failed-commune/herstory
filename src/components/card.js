import React, { useEffect, useState } from "react"
import "./card.css"
import { Link } from "gatsby"

const Card = () => {
    //질문 답변 세트
    const data = [
        {
            text: '오랜만에 약속 없는 주말, 하루를 어떻게 보낼까요?',
            answer1: '드라마 정주행하기',
            answer2: '친구를 불러내 요즘 힙하다는 카페 가기'
        },
        {
            text: '길을 가다 고양이를 만난 당신, 어떻게 하나요?',
            answer1: '음 귀엽네 하고 갈 길을 간다',
            answer2: '근처에서 고양이 간식을 사서 준다',
        },
        {
            text: '큰 맘 먹고 등산을 하러왔습니다. 정상은 멀기만 하고 내가 왜 그랬을까 후회되는 순간, 당신의 선택은?',
            answer1: '일단 먹고 생각하자! 도시락부터 까먹는다',
            answer2: '이왕 온 김에 정상은 보고 가야지, 힘내서 올라가본다',
        },
        {
            text: '사람들이 가득한 회의실에서 나도 모르게 방구가 나왔습니다. 모른 척 하려는데 이게 웬걸 거름 냄새가 나기 시작합니다. 이 때 당신의 대처방법은?',
            answer1: '제가 시원하게 한번 뀌었습니다~ 환기 한 번 할까요? - 들키기 전에 자진납세',
            answer2: '윽 냄새.. 누구야? 필살의 포커페이스로 맞선다',
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
