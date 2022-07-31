(()=>{

    const $tab = document.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ActiveClass = 'is-active';

    // 初期化
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    // クリックされたら起こるイベント   
    const handleClick = (e) =>{
        e.preventDefault();

        // クリックされたnavとそのnavのdataを取得
        const $this = e.target;
        const targetval = $this.dataset.nav;

        // 対象外のnavコンテンツを一旦リセットする。
        let index = 0;
        while(index < $nav.length){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ActiveClass);
            index++;
        }

        // 対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetval + '" ]')[0].style.display = 'block';
        $nav[targetval].classList.add(ActiveClass);

    };

    // 全nav要素に対して関数を適応
    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }

})();