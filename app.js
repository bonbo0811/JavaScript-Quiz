const question = 'ゲーム史上最も売れたゲーム機は次の内どれ？';
const answers = [
        'スーパーファミコン',
        'プレイステーション２',
        'ファミリーコンピューター',
        'ニンテンドーDS'
    ];
const correct = 'ニンテンドーDS';

let buttonlength = document.getElementsByTagName('button').length;

// クイズの問題文、選択肢を定義
const setQuiz = () => {
    document.getElementById('js-question-1').textContent = question;
    let buttonIndex = 0;

    while(buttonIndex < buttonlength){
        // ココに命令文
        document.getElementsByTagName('button')[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
}

setQuiz();

const clickHandler = (e) => {
    if(correct === e.target.textContent) {
        window.alert('正解！');
    } else {
        window.alert('不正解');
    }
}

// ボタンがクリックされたら正誤判定
let handleIndex = 0;

while (handleIndex < buttonlength) {
        document.getElementsByTagName('button')[handleIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handleIndex++;
}
