<?php
    include_once('./Parts/link.php')
?>

<body>

    <!-- As a link -->
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="fw-bold navbar-brand ms-3" href="index.php">JavaScript-Quiz</a>
        </div>
    </nav>
    
    <div class="container">
        <div id="js-question-game" class="mt-4 alert alert-primary" role="alert">
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
    </div>

<script src="app.js"></script>
</body>
</html>