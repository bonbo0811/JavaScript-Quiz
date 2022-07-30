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
        document.getElementById('quiz-sters').getElementsByTagName('img')[score].src = './images/good.png';
        score++;
    } else {
        window.alert('不正解...\n正解は 『 ' + getQuiz[$question][quizIndex].correct + ' 』 です!');
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