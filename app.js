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
        question : 'ドラゴンクエスト（DQ）の主人公の役割が【勇者】ではない作品は次の内どれ？',
        answers : [
            'DQ 1',
            'DQ 6',
            'DQ 5',
            'DQ 3'
        ],
        correct : 'DQ 5',
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

const quiz_comic =[
    {
        question : 'ハンディキャップを背負う誰よりも優しい主人公が、人生で初めて友達を得て、王さまになるべく世界を冒険する物語は？',
        answers : [
            'チェンソーマン',
            'HUNTER × HUNTER',
            '大様ランキング',
            'キン肉マン'
        ],
        correct : '大様ランキング',
    },{
        question : '中高一貫校を舞台に、少し不思議な高校生たちのかわいい日常を描き、いくつもの賞を受賞したのは？',
        answers : [
            '呪術廻戦',
            '波よ聞いてくれ',
            'ブルーピリオド',
            '夢中さ、君に。'
        ],
        correct : '夢中さ、君に。',
    },{
        question : '『鋼の錬金術師』、『銀の匙』で有名な作者は誰？',
        answers : [
            '荒川弘',
            '諌山創創',
            '堀越耕平',
            '福本伸行'
        ],
        correct : '荒川弘',
    },
];

const quiz_food =[
    {
        question : '和牛には4種類あるが、そのうち黒毛和牛は何％程度？',
        answers : [
            '98パーセント',
            '68パーセント',
            '36パーセント',
            '8パーセント'
        ],
        correct : '98パーセント',
    },{
        question : '日本で初めてラーメンが作られたのはいつ頃でしょうか？',
        answers : [
            '昭和時代',
            '室町時代',
            '江戸時代',
            '大正時代'
        ],
        correct : '室町時代',
    },{
        question : '次のうち日本生まれのパスタ料理はどれでしょうか？',
        answers : [
            'ナポリタン',
            'イカスミパスタ',
            'カルボナーラ',
            'アラビアータ'
        ],
        correct : 'ナポリタン',
    },
];

const getQuiz = {
    'js-question-game':  quiz_game,
    'js-question-fashion': quiz_fashion,
    'js-question-movie': quiz_movie,
    'js-question-comic': quiz_comic,
    'js-question-food': quiz_food,
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