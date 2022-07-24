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

    <div class="list-group col-md-7 mt-4 m-auto">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            クイズ一覧
        </a>
        <a href="game-quiz.php" class="list-group-item list-group-item-action ">ゲーム関係</a>
        <a href="car-quiz.php" class="list-group-item list-group-item-action">車関係</a>
        <a href="#" class="list-group-item list-group-item-action">comming soon...</a>
        <a href="#" class="list-group-item list-group-item-action">comming soon...</a>
    </div>
</body>
</html>