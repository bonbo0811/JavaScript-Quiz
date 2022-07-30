<?php
    include_once('./Parts/link.php')
?>

<body>

    <?php
        include_once('./Parts/nav.php');
    ?>
    
    <div class="container">
        <div class="col-md-7 mt-5 m-auto text-center">
            <h5>
                <img src="./images/game_image.jpeg" width="25" height="25" class="me-1" alt="イメージアイコン">
                Quiz : : ゲーム
            </h5>
        </div>

        <div id="js-question-game" class="mt-4 alert alert-primary question" role="alert">
            A simple primary alert—check it out!
        </div>
        
        <div class="d-flex justify-content-center">
            <div class="m-2">
                <button type="button" id="js-btn-1" class="btn btn-primary">Primary</button>
            </div>
            <div class="m-2">
                <button type="button" id="js-btn-2" class="btn btn-primary">Primary</button>
            </div>
            <div class="m-2">
                <button type="button" id="js-btn-3" class="btn btn-primary">Primary</button>
            </div>
            <div class="m-2">
                <button type="button" id="js-btn-4" class="btn btn-primary">Primary</button>
            </div>
        </div>

        <div id="quiz-sters" class="d-flex justify-content-center">
            <div id="success" class="ms-2 me-2 mt-4 star">
                <img src="./images/bad.jpeg" alt="不正解の星">
            </div>
            <div id="success" class="ms-2 me-2 mt-4 star">
                <img src="./images/bad.jpeg" alt="不正解の星">
            </div>
            <div id="success" class="ms-2 me-2 mt-4 star">
                <img src="./images/bad.jpeg" alt="不正解の星">
            </div>
        </div>
        <div class="col-md-7 m-auto mt-4 text-center">
            <a href="index.php">クイズ一覧へ戻る</a>
        </div> 
    </div>

<script src="./JavaScript/quiz.js"></script>
<script src="./JavaScript/app.js"></script>
</body>
</html>