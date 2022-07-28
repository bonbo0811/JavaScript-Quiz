<?php
    include_once('./Parts/link.php');
?>

<body>
    <?php
        include_once('./Parts/nav.php');
    ?>

    <div class="col-md-7 text-center mt-5 m-auto">
        <h6>いろいろなジャンルのクイズを集めてみました。<br>挑戦してみましょう！！</h6>
    </div>

    <div class="quiz-list list-group col-md-7 mt-4 m-auto px-3">
        <span class="list-group-item list-group-item-action active list-img bg-primary" aria-current="true">
            クイズ一覧
        </span>
        <a href="quiz-fashions.php" class="list-group-item list-group-item-action">
            <img src="images/fashion_image.jpeg" alt="アイコン" width="25" height="25" class="d-inline-block align-text-top ms-2">
            ファッション
        </a>
        <a href="quiz-games.php" class="list-group-item list-group-item-action ">
            <img src="images/game_image.jpeg" alt="アイコン" width="25" height="25" class="d-inline-block align-text-top ms-2">
            ゲーム
        </a>
        <a href="quiz-movies.php" class="list-group-item list-group-item-action">
            <img src="images/movie_image.jpeg" alt="アイコン" width="25" height="25" class="d-inline-block align-text-top ms-2">
            映画
        </a>
        <a href="quiz-comics.php" class="list-group-item list-group-item-action">
            <img src="images/comic_image.jpeg" alt="アイコン" width="25" height="25" class="d-inline-block align-text-top ms-2">
            マンガ
        </a>
        <a href="quiz-foods.php" class="list-group-item list-group-item-action">
            <img src="images/food_image.jpeg" alt="アイコン" width="25" height="25" class="d-inline-block align-text-top ms-2">
            食べ物
        </a>
    </div>
</body>
</html>