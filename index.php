<?php
    include_once('./Parts/link.php');
?>

<body>
    <!-- As a link -->
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="fw-bold navbar-brand ms-3" href="index.php">JavaScript-Quiz</a>
        </div>
    </nav>

    <div class="col-md-7 text-center mt-5 m-auto">
        <h6>いろいろなジャンルのクイズを集めてみました。<br>挑戦してみましょう！！</h6>
    </div>

    <div class="list-group col-md-7 mt-4 m-auto">
        <span class="list-group-item list-group-item-action active list-img" aria-current="true">
            クイズ一覧
        </span>
        <a href="quiz-games.php" class="list-group-item list-group-item-action ">ゲーム</a>
        <a href="quiz-fashions.php" class="list-group-item list-group-item-action">ファッション</a>
        <a href="quiz-movies.php" class="list-group-item list-group-item-action">映画</a>
        <a href="#" class="list-group-item list-group-item-action">漫画</a>
        <a href="quiz-cars.php" class="list-group-item list-group-item-action">車</a>
    </div>
</body>
</html>