const $question = document.getElementsByClassName('question')[0].id;

const quiz_game =[
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

const quiz_fashion =[
    {
        question : 'カーディガンやジャケットなどの上着類のことをなんと言う？',
        answers : [
            'インナー',
            'アウター',
            'ボトムス',
            'トラウザー'
        ],
        correct : 'アウター',
    },{
        question : '肩紐や持ち手が付いておらず、手で抱えるカバンのことをなんと言う？',
        answers : [
            'トートバッグ',
            'メッセンジャーバッグ',
            'クラッチバッグ',
            'ボストンバッグ'
        ],
        correct : 'クラッチバッグ',
    },{
        question : '堅苦しくない気軽な服装のことをなんと言う？',
        answers : [
            'アヴァンギャルド',
            'トラッド',
            'フォーマル',
            'カジュアル'
        ],
        correct : 'カジュアル',
    },
];

const quiz_movie =[
    {
        question : '豪華客船を舞台にした大ヒット作『タイタニック』で タイタニック号が沈没した原因は何？',
        answers : [
            '氷山にぶつかった',
            '台風に巻き込まれた',
            '定員オーバーしていた',
            '船の老朽化が進んでいた'
        ],
        correct : '氷山にぶつかった',
    },{
        question : 'インドのスラム街の少年がクイズ番組に挑戦する『スラムドッグ$ミリオネア』。彼は最終問題までたどり着きますが、なぜここまで勝ち進めた？',
        answers : [
            'ズルをした',
            'ラッキーだった',
            '天才だった',
            '運命だった'
        ],
        correct : '運命だった',
    },{
        question : '映画『ボヘミアン・ラプソディ』でラミ・マレックが演じたのは何という音楽グループのボーカル？',
        answers : [
            'レッド・ツェッペリン',
            'ローリング・ストーンズ',
            'クイーン',
            'ビートルズ'
        ],
        correct : 'クイーン',
    },
];

const getQuiz = {
    'js-question-game':  quiz_game,
    'js-question-fashion': quiz_fashion,
    'js-question-movie': quiz_movie,
};

let quizIndex = 0;
const quizLength_game = getQuiz[$question].length;
let score = 0;

let buttonlength = document.getElementsByTagName('button').length;


// クイズの問題文、選択肢を定義
const setQuiz = () => {
    document.getElementById($question).textContent = getQuiz[$question][quizIndex].question;
    let buttonIndex = 0;

    while(buttonIndex < buttonlength){
        // ココに命令文
        document.getElementsByTagName('button')[buttonIndex].textContent = getQuiz[$question][quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setQuiz();

const clickHandler = (e) => {
    if(getQuiz[$question][quizIndex].correct === e.target.textContent) {
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