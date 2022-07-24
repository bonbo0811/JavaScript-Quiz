const quiz_Game =[
    {
        question : 'ゲーム史上最も売れたゲーム機は次の内どれ？',
        answers : [
            'スーパーファミコン',
            'プレイステーション２',
            'ファミリーコンピューター',
            'ニンテンドーDS'
        ],
        correct : 'ニンテンドーDS',
    },{
        question : 'ポケットモンスターを制作したゲーム会社は次の内どれ？',
        answers : [
            '任天堂',
            'エニックス',
            'ゲームフリーク',
            'カプコン'
        ],
        correct : 'ゲームフリーク',
    },{
        question : 'ドラゴンクエスト５の隠しボスは次の内どれ？',
        answers : [
            'ゾーマ',
            'デスタムーア',
            'ダークドレアム',
            'エスターク'
        ],
        correct : 'エスターク',
    },
];

const quiz_car =[
    {
        question : 'ゲーム史上最も売れたゲーム機は次の内どれ？',
        answers : [
            'スーパーファミコン',
            'プレイステーション２',
            'ファミリーコンピューター',
            'ニンテンドーDS'
        ],
        correct : 'ニンテンドーDS',
    },{
        question : 'ポケットモンスターを制作したゲーム会社は次の内どれ？',
        answers : [
            '任天堂',
            'エニックス',
            'ゲームフリーク',
            'カプコン'
        ],
        correct : 'ゲームフリーク',
    },{
        question : 'ドラゴンクエスト５の隠しボスは次の内どれ？',
        answers : [
            'ゾーマ',
            'デスタムーア',
            'ダークドレアム',
            'エスターク'
        ],
        correct : 'エスターク',
    },
];

let quizIndex = 0;
const quizLength_game = quiz_Game.length;
const quizLength_car = quiz_car.length;
let score = 0;

let buttonlength = document.getElementsByTagName('button').length;

// クイズの問題文、選択肢を定義
const setQuiz = () => {
    document.getElementById('js-question-game').textContent = quiz_Game[quizIndex].question;
    let buttonIndex = 0;

    while(buttonIndex < buttonlength){
        // ココに命令文
        document.getElementsByTagName('button')[buttonIndex].textContent = quiz_Game[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setQuiz();

const clickHandler = (e) => {
    if(quiz_Game[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        document.getElementsByTagName('img')[score].src = './images/good.png';
        score++;
    } else {
        window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength_game){
        // 次の問題へ移行
        setQuiz();
    }else{
        // クイズ終了
        window.alert('クイズ終了。　あなたの正解数は' + score + '/' + quizLength_game + 'です！');
    }
};

// ボタンがクリックされたら正誤判定
let handleIndex = 0;

while (handleIndex < buttonlength) {
        document.getElementsByTagName('button')[handleIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handleIndex++;
}
