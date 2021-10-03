const wills = [
    {
        will: "나는 매일 자기 전에 회고(3fs)를 한다.",
    },
    {
        will: "아침에 눈을 뜨고 나서 한 시간이 하루를 결정한다.",
    },
    {
        will: "나는 매일 오전에 20분, 저녁에 20분 명상을 한다.",
    },
    {
        will: "나는 이틀에 한 번 땀이 뻘뻘 나는 운동을 한다.",
    },
    {
        will: "판단이나 평가를 하지 않고 현재를 알아차린다.",
    },
    {
        will: "주어진 상황을 그저 바라본다. 내 현재 기이나 현재 상황에 따른 호불호에 의해 감정을 드러내면 좋은 판단을 하기 어렵다.",
    },
    {
        will: "세상의 모든 것은 인간의 마인드로 부터 시작되었다. 마인드와 신체, 감정과 생명 에너지의 방향이 일치하면 강한 함을 갖는다."
    },
    {
        will: "확언(affirmation)은 단순히 말을 하는 것이 아니다. 정확한 언어, 선명한 시각화, 그리고 감정이 함께해야 한다."
    }
];

const will = document.querySelector("#will span:first-child");

function randomRange(min, max) {
    return Math.floor(Math.random() * max) + min
}

const todaysQuote = wills[randomRange(0, wills.length)];

will.innerText = todaysQuote.will;
