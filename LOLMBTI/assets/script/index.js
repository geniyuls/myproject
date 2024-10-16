// 문제 1번
const MBTI= document.createElement('span');
const MBTIText1= document.createElement('span');
const MBTIText2= document.createElement('span');
MBTI.id = 'MBTI'; // ID 설정
MBTIText1.id = 'MBTI-text1'; // ID 설정
MBTIText2.id = 'MBTI-text2'; // ID 설정
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;
let i7 = 0;
let i8 = 0;
let i9 = 0;
let i10 = 0;
let i11 = 0;
let i12 = 0;
let i = 0
let e = 0
let s = 0
let n = 0
let t = 0
let f = 0
let j = 0
let p = 0
document.getElementById('box-text').addEventListener('click', function () {


    const boxText = document.getElementById('box-text');
    boxText.remove();
    const gameBox = document.getElementById('game-box');
    gameBox.style.backgroundImage = 'none';
    gameBox.style.position = 'relative';
    gameBox.style.alignItems = 'flex-ent';
    gameBox.style.flexDirection = 'column';
    gameBox.style.justifyContent = 'flex-start';

    const table = document.createElement('table');
    table.id = 'table'; // ID 설정
    const tableTr = document.createElement('tr');
    tableTr.id = 'tableTr'; // ID 설정
    const bar1 = document.createElement('td');
    bar1.id = 'bar1'; // ID 설정
    const bar2 = document.createElement('td');
    bar2.id = 'bar2'; // ID 설정
    const bar3 = document.createElement('td');
    bar3.id = 'bar3'; // ID 설정
    const bar4 = document.createElement('td');
    bar4.id = 'bar4'; // ID 설정
    const bar5 = document.createElement('td');
    bar5.id = 'bar5'; // ID 설정
    const bar6 = document.createElement('td');
    bar6.id = 'bar6'; // ID 설정
    const bar7 = document.createElement('td');
    bar7.id = 'bar7'; // ID 설정
    const bar8 = document.createElement('td');
    bar8.id = 'bar8'; // ID 설정
    const bar9 = document.createElement('td');
    bar9.id = 'bar9'; // ID 설정
    const bar10 = document.createElement('td');
    bar10.id = 'bar10'; // ID 설정
    const bar11 = document.createElement('td');
    bar11.id = 'bar11'; // ID 설정
    const bar12 = document.createElement('td');
    bar12.id = 'bar12'; // ID 설정
    const barText = document.createElement('td');
    barText.id = 'bar-text'; // ID 설정


    barText.innerText = "1/12"; // 내용 설정
    const question = document.createElement('span');
    question.id = 'question'; // ID 설정\
    const questionContainer = document.querySelector('main > .game-container > .box > #game-box');
    questionContainer.appendChild(question); // q1을 box에 추가

    const barTable1 = document.querySelector('main > .game-container > .box > #game-box > #question');
    barTable1.appendChild(table);
    table.appendChild(tableTr)
    tableTr.appendChild(bar1);
    tableTr.appendChild(bar2);
    tableTr.appendChild(bar3);
    tableTr.appendChild(bar4);
    tableTr.appendChild(bar5);
    tableTr.appendChild(bar6);
    tableTr.appendChild(bar7);
    tableTr.appendChild(bar8);
    tableTr.appendChild(bar9);
    tableTr.appendChild(bar10);
    tableTr.appendChild(bar11);
    tableTr.appendChild(bar12);
    tableTr.appendChild(barText);

    const question1 = document.createElement('span');
    question1.id = 'question1'; // ID 설정
    question1.innerText = "Q1."; // 내용 설정

    const question2 = document.createElement('span');
    question2.id = 'question2'; // ID 설정
    question2.style.backgroundImage = "url(assets/images/q1.jpg)";

    const question1_1 = document.createElement('span');
    question1_1.id = 'question1_1'; // ID 설정
    question1_1.innerText = "롤을 처음 접하는 나는"; // 내용 설정

    const button1_1 = document.createElement('button');
    button1_1.id = 'button1_1'; // ID 설정
    button1_1.innerText = "친구에게 배우는게 편하다."; // 내용 설정

    const button1_2 = document.createElement('button');
    button1_2.id = 'button1_2'; // ID 설정
    button1_2.innerText = "혼자서 독학하는게 편하다."; // 내용 설정


    // q1을 main > .game-container > .box 위치에 추가
    const container = document.querySelector('main > .game-container > .box > #game-box > #question');
    container.appendChild(question1); // q1을 box에 추가
    container.appendChild(question2);
    container.appendChild(question1_1);
    container.appendChild(button1_1);
    container.appendChild(button1_2);


    button1_1.addEventListener('click', function () {
        i1 = 1;
        e = e+1;
        updateQuestion();
    });

    button1_2.addEventListener('click', function () {
        i1 = 2;
        i = i+1;
        updateQuestion();
    });

    function updateQuestion() {
        if (i1 === 1 || i1 === 2) {
            question1.innerText = "Q2."; // 내용 설정
            question2.style.backgroundImage = "url(assets/images/q2.jpg)";
            question1_1.innerText = "내가 실수해서 죽었을때"; // 내용 설정
            button1_1.innerText = '팀원들에게 사과를 하고 자책한다.' // 내용 설정
            button1_2.innerText = '아무말 하지 않고 상대방 스펠 체크'; // 내용 설정
            bar2.style.backgroundColor = "#2ecc71";
            barText.innerText = "2/12";

            document.getElementById('button1_1').addEventListener('click', function () {
                i2 = 1;
                f = f+1;
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i2 = 2;
                t = t+1;

            });

        }
        if (i2 === 1 || i2 === 2) {
            question1.innerText = "Q3."; // 내용 설정
            question2.style.backgroundImage = "url(assets/images/q3.jpg)";
            question1_1.innerText = "챔피언을 고를때 나는"; // 내용 설정
            button1_1.innerText = '내가 좋아하는 챔피언 고른다.' // 내용 설정
            button1_2.innerText = '우리팀의 조합을 보고 고른다.'; // 내용 설정
            barText.innerText = "3/12";
            bar3.style.backgroundColor = "#2ecc71";
            document.getElementById('button1_1').addEventListener('click', function () {
                i3 = 1;
                p = p+1
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i3 = 2;
                j = j+1
            });
        }
        if (i3 === 1 || i3 === 2) {
            question1.innerText = "Q4."; // 내용 설정
            question1_1.innerText = "게임이 끝나고 나는"; // 내용 설정
            question2.style.backgroundImage = "url(assets/images/q4.jpg)";
            button1_1.innerText = '대화창에서 팀원들 또는 적팀들과 토론을 펼치는 편이다.' // 내용 설정
            button1_2.innerText = '대화창을 열지 않고 바로 나가는 편이다.'; // 내용 설정
            barText.innerText = "4/12";
            bar4.style.backgroundColor = "#2ecc71";
            document.getElementById('button1_1').addEventListener('click', function () {
                i4 = 1;
                n = n+1;
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i4 = 2;
                s = s+1;
            });
        }
        if (i4 === 1 || i4 === 2) {
            question1.innerText = "Q5."; // 내용 설정
            question2.style.backgroundImage = "url(assets/images/q5.jpg)";
            question1_1.innerText = "롤드컵에서 우리나라 팀이 우승을 했다면"; // 내용 설정
            button1_1.innerText = '딱히 관심 없다.' // 내용 설정
            button1_2.innerText = '나루토팀 사스케팀 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에...'; // 내용 설정
            barText.innerText = "5/12";
            button1_2.style.fontSize = "1rem";
            bar5.style.backgroundColor = "#2ecc71";
            document.getElementById('button1_1').addEventListener('click', function () {
                i5 = 1;
                s = s+1;
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i5 = 2;
                n = n+1;
            });
        }
        if (i5 === 1 || i5 === 2) {
            question1.innerText = "Q6."; // 내용 설정
            question1_1.innerText = "용 싸움에서 강타싸움에서 져서 기 죽은 듀오에게"; // 내용 설정
            question2.style.backgroundImage = "url(assets/images/q6.jpg)";
            button1_1.innerText = '"니 잘못 아니야 괜찮아" 라고 말한다.' // 내용 설정
            button1_2.innerText = '"강타는 장식이냐" 라고 한다.'; // 내용 설정
            barText.innerText = "6/12";
            button1_2.style.fontSize = "1.5rem";
            bar6.style.backgroundColor = "#2ecc71";
            document.getElementById('button1_1').addEventListener('click', function () {
                i6 = 1;
                f = f + 1;
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i6 = 2;
                t = t + 1;
            });
        }
        if (i6 === 1 || i6 === 2) {
            question1.innerText = "Q7."; // 내용 설정
            question1_1.innerText = "직장에서 사람에 지친 나는"; // 내용 설정
            question2.style.backgroundImage = "url(assets/images/q7.jpg)";
            button1_1.innerText = '말 하기도 귀찮다. 솔랭 돌린다.' // 내용 설정
            button1_2.innerText = '친구랑 같이 해야 더 재밌다. 친구랑 듀오를 한다.'; // 내용 설정
            barText.innerText = "7/12";
            bar7.style.backgroundColor = "#2ecc71";
            document.getElementById('button1_1').addEventListener('click', function () {
                i7 = 1;
                i = i + 1;
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i7 = 2;
                e = e + 1;
            });
        }
        if (i7 === 1 || i7 === 2) {
            question1.innerText = "Q8."; // 내용 설정
            question1_1.innerText = "롤에서 나는"; // 내용 설정
            question2.style.backgroundImage = "url(assets/images/q8.png)";
            button1_1.innerText = '오더를 하는 편이다.' // 내용 설정
            button1_2.innerText = '오더를 받는 편이다.'; // 내용 설정
            barText.innerText = "8/12";
            bar8.style.backgroundColor = "#2ecc71";
            document.getElementById('button1_1').addEventListener('click', function () {
                i8 = 1;
                j = j + 1;
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i8 = 2;
                p = p + 1;

            });
        }
        if (i8 === 1 || i8 === 2) {
            question1.innerText = "Q9."; // 내용 설정
            question2.style.backgroundImage = "url(assets/images/q9.png)";
            question1_1.innerText = "게임을 하다가 욕을 먹으면"; // 내용 설정
            button1_1.innerText = '똑같이 맞 욕을 한다.' // 내용 설정
            button1_2.innerText = '차단하고 게임한다.'; // 내용 설정
            barText.innerText = "9/12";
            bar9.style.backgroundColor = "#2ecc71";
            document.getElementById('button1_1').addEventListener('click', function () {
                i9 = 1;
                s = n + 1;
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i9 = 2;
                n = s + 1;
            });
        }
        if (i9 === 1 || i9 === 2) {
            question1.innerText = "Q10."; // 내용 설정
            question1_1.innerText = "롤을 시작하기 전에"; // 내용 설정
            question2.style.backgroundImage = "url(assets/images/q10.jpg)";
            button1_1.innerText = '승패와 상관없이 몇판 할건지 정해놓고 한다.' // 내용 설정
            button1_2.innerText = '이길때 까지 한다.'; // 내용 설정
            barText.innerText = "10/12";
            bar10.style.backgroundColor = "#2ecc71";
            document.getElementById('button1_1').addEventListener('click', function () {
                i10 = 1;
                j = j + 1;
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i10 = 2;
                p = p + 1;
            });
        }
        if (i10 === 1 || i10 === 2) {
            question1.innerText = "Q11."; // 내용 설정
            question1_1.innerText = "우리팀이 짤렸을 때"; // 내용 설정
            button1_1.innerText = '사과 보다는 이유를 듣고 싶다.' // 내용 설정
            button1_2.innerText = '이유는 상관없다. 짤린게 중요하다.'; // 내용 설정
            barText.innerText = "11/12";
            bar11.style.backgroundColor = "#2ecc71";
            document.getElementById('button1_1').addEventListener('click', function () {
                i11 = 1;
                f = f + 1;
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i11 = 2;
                t = t + 1;
            });
        }
        if (i11 === 1 || i11 === 2) {
            question1.innerText = "Q12."; // 내용 설정
            question1_1.innerText = "솔랭이 끝나고 나랑 캐미가 잘 맞는 팀원이 친추를 건다면"; // 내용 설정
            button1_1.innerText = '1판의 인연일뿐 받지 않는다.' // 내용 설정
            button1_2.innerText = '친추를 받는다.'; // 내용 설정
            barText.innerText = "12/12";
            bar12.style.backgroundColor = "#2ecc71";
            document.getElementById('button1_1').addEventListener('click', function () {
                i12 = 1;
                i = i + 1;
            });
            document.getElementById('button1_2').addEventListener('click', function () {
                i12 = 2;
                e = e + 1;
            });
        }
        if (i12 === 1 || i12 === 2) {
            gameBox.remove();
            const MBTIContainer = document.querySelector('main > .game-container > .box');
            MBTIContainer.appendChild(MBTI);
            MBTIContainer.appendChild(MBTIText1);
            MBTIContainer.appendChild(MBTIText2);
        }

        if (i > e && n > s && f > t && p > j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/INFP.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 타릭 (INFP) 입니다.';
            MBTIText2.innerHTML = " ·몽상하는 시간을 즐긴다.<br><br> ·사람들의 본질을 이해하려 하고, 이들의 가능성을 성취할 수 있도록 돕는다.<br><br> ·지나치게 전체주의적, 혹은 가식적으로 보일 수 있다.<br><br> ·호기심이 많고, 어떠한 일의 결과보다 ‘가능성’을 보는 경향이 있다."
        }
        if (i > e && n > s && f > t && p < j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/INFJ.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 케이틀린 (INFJ) 입니다.';
            MBTIText2.innerHTML = "·이상주의적, 완벽주의적 성향을 추구한다.<br><br>·겉으로는 공감할 수 있지만, 속으로는 비판적으로 생각하는 경향이 있다.<br><br>·과거와 현재의 공통점을 찾아 미래를 예측하는 것을 좋아한다.<br><br>·사회적 불의를 못 참으며 높은 도덕 관념을 지니고 있다."
        }
        if (i > e && n > s && f < t && p > j && (i8 === 1 || i8 ===2)){
            gameBox.remove();
            MBTI.style.backgroundImage = "url(assets/images/INTP.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 리신 (INTP) 입니다.';
            MBTIText2.innerHTML = "·사교적이지 않다.<br><br>·멍 때리는 거 좋아한다.<br><br>·스스로에 대해 가장 엄격하다.<br><br>·대중적인 관심사에 관심이 없다.<br><br>·책, 논문 등을 인생에 적극적으로 활용한다."
        }
        if (i > e && n > s && f < t && p < j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/INTJ.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 올라프 (INTJ) 입니다.';
            MBTIText2.innerHTML = "·자존감이 높고 열등감을 느껴본 적이 없다.<br><br>·자신의 능력을 과대평가한다.<br><br>·독립적이다.<br><br>·모든 것을 혼자 하려는 의지가 강하다."
        }
        if (i > e && n < s && f > t && p > j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ISFP.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 트위스티드 페이트 (ISFP) 입니다.';
            MBTIText2.innerHTML = "·유연한 사고 방식과 관용적이고 개방적인 태도를 지니고 있다.<br><br>·체계적이고 결단력있게 살고자 노력한다.<br><br>·횡재나 운등 일확천금을 바람.<br><br>·개인 프라이버시를 존중 받기를 바란다."
        }
        if (i > e && n < s && f > t && p < j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ISFJ.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 가렌 (ISFJ) 입니다.';
            MBTIText2.innerHTML = "·전통과 규칙에 엄격한 관리자의 성격을 지닌다.<br><br>·보수적인 성향이 강하며 위계질서를 중요시하고, 선입견과 사회 통념을 많이 갖고 있다.<br><br>·동정심이 많으며, 다른 사람들을 보살피며 위험으로부터 보호하려고 한다.<br><br>·확립된 제도에 적응하고, 안정적인 사회 구조를 유지하기 위한 일을 중요시 여긴다."
        }
        if (i > e && n < s && f > t && p > j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ISTP.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 오로라 (ISTP) 입니다.';
            MBTIText2.innerHTML = "·빈말을 잘 못한다.<br><br>·틀에 박히고 통념적인 생활을 싫어한다.<br><br>일반적으로 조용한데 일과 관련돼서는 수다쟁이다.<br><br>·어떤 것을 보면 원리에 대한 궁금증이 생긴다."
        }
        if (i > e && n < s && f < t && p < j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ISTJ.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 에코 (ISTJ) 입니다.';
            MBTIText2.innerHTML = "·계획을 꼭 지켜야 한다.<br><br>·누군가 시키기 전에는 굳이 나서지 않는다.<br><br>·극도의 효율을 추구한다.<br><br>·답이 명확하게 떨어지지 않는 것을 싫어한다."
        }
        if (i < e && n > s && f > t && p > j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ENFP.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 세트 (ENFP) 입니다.';
            MBTIText2.innerHTML = "·사람들에게 관심이 많다.<br><br>·인생을 즐겁게 살고자 한다.<br><br>·촉이 좋아서 사람들을 잘 파악한다.<br><br>·기본 베이스가 베푸는 성격이다.";
        }
        if (i < e && n > s && f > t && p < j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ENFJ.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 니코 (ENFJ) 입니다.';
            MBTIText2.innerHTML = "·사람을 굉장히 좋아한다.<br><br>·긍정적인 방향으로 가고 싶어 한다..<br><br>·상대방의 감정과 대중의 분위기를 읽는 능력이 뛰어나다.<br><br>·감정이입이 뛰어나다.";
        }
        if (i < e && n > s && f < t && p > j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ENTP.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 이즈리얼 (ENTP) 입니다.';
            MBTIText2.innerHTML = "·관종인데 조용히 살고 싶어 함.<br><br>·시비 거는 걸 좋아함.<br><br>·오지랖이 넓어 여기저기 참견함.<br><br>·말발과 재치에 자신 있음.";
        }
        if (i < e && n > s && f < t && p < j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ENTJ.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 질리언 (ENTJ) 입니다.';
            MBTIText2.innerHTML = "·도전정신이 있다.<br><br>·생산적이고 유능한 사람을 좋아한다.<br><br>·야망이 넘친다.<br><br>·피드백 해 줄 사람을 오히려 찾는다.";
        }
        if (i < e && n < s && f > t && p > j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ESFP.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 나미 (ESFP) 입니다.';
            MBTIText2.innerHTML = "·충동적이다.<br><br>·이상주의적이다.<br><br>·하루하루 즐겁게 살고자 한다.\n<br><br>·분위기 메이커다.";
        }
        if (i < e && n < s && f > t && p < j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ESFJ.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 시비르 (ESFJ) 입니다.';
            MBTIText2.innerHTML = "·참을성이 많고 남을 잘 돕는다.<br><br>·기브&테이크를 중요시한다.<br><br>·타인에게 인정받고 싶어 한다.<br><br>·돈을 모으는 것을 즐긴다.";
        }
        if (i < e && n < s && f > t && p > j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ESTP.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 사일러스 (ESTP) 입니다.';
            MBTIText2.innerHTML = "·자기주장이 강하다.<br><br>·사람 파악을 잘 한다.<br><br>·설득하는 것을 좋아한다.<br><br>·낙천적이다.";
        }
        if (i < e && n < s && f < t && p < j && (i8 === 1 || i8 ===2)){
            MBTI.style.backgroundImage = "url(assets/images/ESTJ.webp)";
            MBTIText1.innerText = '당신의 MBTI 성향은 야스오 (ESTJ) 입니다.';
            MBTIText2.innerHTML = "·외향형 치고는 상당히 독립적이다.<br><br>·충동적인 사람을 싫어한다.<br><br>·외로움을 별로 안 탄다.<br><br>·사소한 것으로 잘 싸우지 않는다.";
        }

    }
});

