<?php

    $servername = 'localhost';
    $username = 'u2000966_default';
    $password = '8jA4U1XjteVhxwG1';
    $db_name = 'u2000966_default';
    
    
    // if($mysqli->connect_errno) {
    //     echo 'Ошибка соединения с сервером';tireo
    // }
    
    return [
        '/' => function() {
            
        },
        '/analize/tireotrop/' => function() {
            $mysqli = new mysqli('localhost', 'u2000966_default', '8jA4U1XjteVhxwG1', 'u2000966_default');
            mysqli_set_charset($mysqli, 'utf8');
            $query = "SELECT * FROM product";
            $result = mysqli_query($mysqli, $query) or die (mysqli_error($mysqli));
            for($data =[]; $row = mysqli_fetch_assoc($result); $data[] = $row);
            $result = '';
            foreach($data as $elem) {
                $result .= '<div class="product-item com" id="' . $elem['id'] . '">';

                $result .= '<div class="product-item__l">';
                    
                $result .= '<div class="product-item__cart first">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__price">';
                $result .= '<div class="product-item__full" price="' . $elem['price'] . '">' . $elem['price'] . ' ₽</div>';
                $result .= '<div class="product-item__blood" price-blood="' . $elem['bloodPrice'] . '">+' . $elem['bloodPrice'] . '₽ взятие крови</div>';
                $result .= '</div>';
                $result .= '<div class="product-item__cart">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__more">';
                $result .= '<button class="product-item__link" aria-label="about analize">Подробнее</button>';
                $result .= '<div class="product-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '</div>';

                $result .= '<div class="product-item__r">';

                $result .= '<div class="product-head">';
                $result .= '<p class="product-title">' . $elem['title'] . '</p>';
                $result .= '<div class="product-compare add-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-stats">';
                $result .= '<img src="' . $elem['labs'] . '" alt="lab-quest" loading="lazy" class="product-stats__img">';
                $result .= '<div class="star-rating" rating="' . $elem['rating'] . '">';
                $result .= '<span style="width:' . $elem['rating'] . '%"></span>';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-text">';
                $result .= '<p class="product-text__biomaterial">Исследуемый биоматериал:  ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__materials">Метод исследования: ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__term" term="' . $elem['timer'] . '">Cрок исполнения с момента поступления биоматериала в лабораторию: ' . $elem['timer'] . '</p>';
                $result .= '</div>';

                $result .= '</div>';
                $result .= '</div>';

                // $result .= '<div class="product-mark price">' . $elem['markPrice'] . '</div>';
            }
            echo $result;
        },
        '/analize/tiroksin/' => function() {
            $mysqli = new mysqli('localhost', 'u2000966_default', '8jA4U1XjteVhxwG1', 'u2000966_default');
            mysqli_set_charset($mysqli, 'utf8');
            $query = "SELECT * FROM tiroksin";
            $result = mysqli_query($mysqli, $query) or die (mysqli_error($mysqli));
            for($data =[]; $row = mysqli_fetch_assoc($result); $data[] = $row);
            $result = '';
            foreach($data as $elem) {
                $result .= '<div class="product-item com" id="' . $elem['id'] . '">';

                $result .= '<div class="product-item__l">';
                    
                $result .= '<div class="product-item__cart first">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__price">';
                $result .= '<div class="product-item__full" price="' . $elem['price'] . '">' . $elem['price'] . ' ₽</div>';
                $result .= '<div class="product-item__blood" price-blood="' . $elem['bloodPrice'] . '">+' . $elem['bloodPrice'] . '₽ взятие крови</div>';
                $result .= '</div>';
                $result .= '<div class="product-item__cart">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__more">';
                $result .= '<button class="product-item__link" aria-label="about analize">Подробнее</button>';
                $result .= '<div class="product-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '</div>';

                $result .= '<div class="product-item__r">';

                $result .= '<div class="product-head">';
                $result .= '<p class="product-title">' . $elem['title'] . '</p>';
                $result .= '<div class="product-compare add-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-stats">';
                $result .= '<img src="' . $elem['labs'] . '" alt="lab-quest" loading="lazy" class="product-stats__img">';
                $result .= '<div class="star-rating" rating="' . $elem['rating'] . '">';
                $result .= '<span style="width:' . $elem['rating'] . '%"></span>';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-text">';
                $result .= '<p class="product-text__biomaterial">Исследуемый биоматериал:  ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__materials">Метод исследования: ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__term" term="' . $elem['timer'] . '">Cрок исполнения с момента поступления биоматериала в лабораторию: ' . $elem['timer'] . '</p>';
                $result .= '</div>';

                $result .= '</div>';
                $result .= '</div>';

                // $result .= '<div class="product-mark price">' . $elem['markPrice'] . '</div>';
            }
            echo $result;
        },
        '/analize/triyod/' => function() {
            $mysqli = new mysqli('localhost', 'u2000966_default', '8jA4U1XjteVhxwG1', 'u2000966_default');
            mysqli_set_charset($mysqli, 'utf8');
            $query = "SELECT * FROM triyod";
            $result = mysqli_query($mysqli, $query) or die (mysqli_error($mysqli));
            for($data =[]; $row = mysqli_fetch_assoc($result); $data[] = $row);
            $result = '';
            foreach($data as $elem) {
                $result .= '<div class="product-item com" id="' . $elem['id'] . '">';

                $result .= '<div class="product-item__l">';
                    
                $result .= '<div class="product-item__cart first">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__price">';
                $result .= '<div class="product-item__full" price="' . $elem['price'] . '">' . $elem['price'] . ' ₽</div>';
                $result .= '<div class="product-item__blood" price-blood="' . $elem['bloodPrice'] . '">+' . $elem['bloodPrice'] . '₽ взятие крови</div>';
                $result .= '</div>';
                $result .= '<div class="product-item__cart">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__more">';
                $result .= '<button class="product-item__link" aria-label="about analize">Подробнее</button>';
                $result .= '<div class="product-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '</div>';

                $result .= '<div class="product-item__r">';

                $result .= '<div class="product-head">';
                $result .= '<p class="product-title">' . $elem['title'] . '</p>';
                $result .= '<div class="product-compare add-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-stats">';
                $result .= '<img src="' . $elem['labs'] . '" alt="lab-quest" loading="lazy" class="product-stats__img">';
                $result .= '<div class="star-rating" rating="' . $elem['rating'] . '">';
                $result .= '<span style="width:' . $elem['rating'] . '%"></span>';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-text">';
                $result .= '<p class="product-text__biomaterial">Исследуемый биоматериал:  ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__materials">Метод исследования: ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__term" term="' . $elem['timer'] . '">Cрок исполнения с момента поступления биоматериала в лабораторию: ' . $elem['timer'] . '</p>';
                $result .= '</div>';

                $result .= '</div>';
                $result .= '</div>';

                // $result .= '<div class="product-mark price">' . $elem['markPrice'] . '</div>';
            }
            echo $result;
        },
        '/analize/tireo/' => function() {
            $mysqli = new mysqli('localhost', 'u2000966_default', '8jA4U1XjteVhxwG1', 'u2000966_default');
            mysqli_set_charset($mysqli, 'utf8');
            $query = "SELECT * FROM tireo";
            $result = mysqli_query($mysqli, $query) or die (mysqli_error($mysqli));
            for($data =[]; $row = mysqli_fetch_assoc($result); $data[] = $row);
            $result = '';
            foreach($data as $elem) {
                $result .= '<div class="product-item com" id="' . $elem['id'] . '">';

                $result .= '<div class="product-item__l">';
                    
                $result .= '<div class="product-item__cart first">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__price">';
                $result .= '<div class="product-item__full" price="' . $elem['price'] . '">' . $elem['price'] . ' ₽</div>';
                $result .= '<div class="product-item__blood" price-blood="' . $elem['bloodPrice'] . '">+' . $elem['bloodPrice'] . '₽ взятие крови</div>';
                $result .= '</div>';
                $result .= '<div class="product-item__cart">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__more">';
                $result .= '<button class="product-item__link" aria-label="about analize">Подробнее</button>';
                $result .= '<div class="product-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '</div>';

                $result .= '<div class="product-item__r">';

                $result .= '<div class="product-head">';
                $result .= '<p class="product-title">' . $elem['title'] . '</p>';
                $result .= '<div class="product-compare add-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-stats">';
                $result .= '<img src="' . $elem['labs'] . '" alt="lab-quest" loading="lazy" class="product-stats__img">';
                $result .= '<div class="star-rating" rating="' . $elem['rating'] . '">';
                $result .= '<span style="width:' . $elem['rating'] . '%"></span>';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-text">';
                $result .= '<p class="product-text__biomaterial">Исследуемый биоматериал:  ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__materials">Метод исследования: ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__term" term="' . $elem['timer'] . '">Cрок исполнения с момента поступления биоматериала в лабораторию: ' . $elem['timer'] . '</p>';
                $result .= '</div>';

                $result .= '</div>';
                $result .= '</div>';

                // $result .= '<div class="product-mark price">' . $elem['markPrice'] . '</div>';
            }
            echo $result;
        },
        '/analize/antitpo/' => function() {
            $mysqli = new mysqli('localhost', 'u2000966_default', '8jA4U1XjteVhxwG1', 'u2000966_default');
            mysqli_set_charset($mysqli, 'utf8');
            $query = "SELECT * FROM antitpo";
            $result = mysqli_query($mysqli, $query) or die (mysqli_error($mysqli));
            for($data =[]; $row = mysqli_fetch_assoc($result); $data[] = $row);
            $result = '';
            foreach($data as $elem) {
                $result .= '<div class="product-item com" id="' . $elem['id'] . '">';

                $result .= '<div class="product-item__l">';
                    
                $result .= '<div class="product-item__cart first">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__price">';
                $result .= '<div class="product-item__full" price="' . $elem['price'] . '">' . $elem['price'] . ' ₽</div>';
                $result .= '<div class="product-item__blood" price-blood="' . $elem['bloodPrice'] . '">+' . $elem['bloodPrice'] . '₽ взятие крови</div>';
                $result .= '</div>';
                $result .= '<div class="product-item__cart">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__more">';
                $result .= '<button class="product-item__link" aria-label="about analize">Подробнее</button>';
                $result .= '<div class="product-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '</div>';

                $result .= '<div class="product-item__r">';

                $result .= '<div class="product-head">';
                $result .= '<p class="product-title">' . $elem['title'] . '</p>';
                $result .= '<div class="product-compare add-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-stats">';
                $result .= '<img src="' . $elem['labs'] . '" alt="lab-quest" loading="lazy" class="product-stats__img">';
                $result .= '<div class="star-rating" rating="' . $elem['rating'] . '">';
                $result .= '<span style="width:' . $elem['rating'] . '%"></span>';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-text">';
                $result .= '<p class="product-text__biomaterial">Исследуемый биоматериал:  ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__materials">Метод исследования: ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__term" term="' . $elem['timer'] . '">Cрок исполнения с момента поступления биоматериала в лабораторию: ' . $elem['timer'] . '</p>';
                $result .= '</div>';

                $result .= '</div>';
                $result .= '</div>';

                // $result .= '<div class="product-mark price">' . $elem['markPrice'] . '</div>';
            }
            echo $result;
        },
        '/analize/attg/' => function() {
            $mysqli = new mysqli('localhost', 'u2000966_default', '8jA4U1XjteVhxwG1', 'u2000966_default');
            mysqli_set_charset($mysqli, 'utf8');
            $query = "SELECT * FROM attg";
            $result = mysqli_query($mysqli, $query) or die (mysqli_error($mysqli));
            for($data =[]; $row = mysqli_fetch_assoc($result); $data[] = $row);
            $result = '';
            foreach($data as $elem) {
                $result .= '<div class="product-item com" id="' . $elem['id'] . '">';

                $result .= '<div class="product-item__l">';
                    
                $result .= '<div class="product-item__cart first">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__price">';
                $result .= '<div class="product-item__full" price="' . $elem['price'] . '">' . $elem['price'] . ' ₽</div>';
                $result .= '<div class="product-item__blood" price-blood="' . $elem['bloodPrice'] . '">+' . $elem['bloodPrice'] . '₽ взятие крови</div>';
                $result .= '</div>';
                $result .= '<div class="product-item__cart">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__more">';
                $result .= '<button class="product-item__link" aria-label="about analize">Подробнее</button>';
                $result .= '<div class="product-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '</div>';

                $result .= '<div class="product-item__r">';

                $result .= '<div class="product-head">';
                $result .= '<p class="product-title">' . $elem['title'] . '</p>';
                $result .= '<div class="product-compare add-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-stats">';
                $result .= '<img src="' . $elem['labs'] . '" alt="lab-quest" loading="lazy" class="product-stats__img">';
                $result .= '<div class="star-rating" rating="' . $elem['rating'] . '">';
                $result .= '<span style="width:' . $elem['rating'] . '%"></span>';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-text">';
                $result .= '<p class="product-text__biomaterial">Исследуемый биоматериал:  ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__materials">Метод исследования: ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__term" term="' . $elem['timer'] . '">Cрок исполнения с момента поступления биоматериала в лабораторию: ' . $elem['timer'] . '</p>';
                $result .= '</div>';

                $result .= '</div>';
                $result .= '</div>';

                // $result .= '<div class="product-mark price">' . $elem['markPrice'] . '</div>';
            }
            echo $result;
        },
        '/analize/calcitonin/' => function() {
            $mysqli = new mysqli('localhost', 'u2000966_default', '8jA4U1XjteVhxwG1', 'u2000966_default');
            mysqli_set_charset($mysqli, 'utf8');
            $query = "SELECT * FROM calcitonin";
            $result = mysqli_query($mysqli, $query) or die (mysqli_error($mysqli));
            for($data =[]; $row = mysqli_fetch_assoc($result); $data[] = $row);
            $result = '';
            foreach($data as $elem) {
                $result .= '<div class="product-item com" id="' . $elem['id'] . '">';

                $result .= '<div class="product-item__l">';
                    
                $result .= '<div class="product-item__cart first">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__price">';
                $result .= '<div class="product-item__full" price="' . $elem['price'] . '">' . $elem['price'] . ' ₽</div>';
                $result .= '<div class="product-item__blood" price-blood="' . $elem['bloodPrice'] . '">+' . $elem['bloodPrice'] . '₽ взятие крови</div>';
                $result .= '</div>';
                $result .= '<div class="product-item__cart">';
                $result .= '<button class="add-cart" aria-label="add cart">В корзину</button>';
                $result .= '</div>';
                $result .= '<div class="product-item__more">';
                $result .= '<button class="product-item__link" aria-label="about analize">Подробнее</button>';
                $result .= '<div class="product-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '</div>';

                $result .= '<div class="product-item__r">';

                $result .= '<div class="product-head">';
                $result .= '<p class="product-title">' . $elem['title'] . '</p>';
                $result .= '<div class="product-compare add-compare">';
                $result .= '<p class="product-compare__text">сравнить</p>';
                $result .= '<img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-stats">';
                $result .= '<img src="' . $elem['labs'] . '" alt="lab-quest" loading="lazy" class="product-stats__img">';
                $result .= '<div class="star-rating" rating="' . $elem['rating'] . '">';
                $result .= '<span style="width:' . $elem['rating'] . '%"></span>';
                $result .= '</div>';
                $result .= '</div>';

                $result .= '<div class="product-text">';
                $result .= '<p class="product-text__biomaterial">Исследуемый биоматериал:  ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__materials">Метод исследования: ' . $elem['bio'] . '</p>';
                $result .= '<p class="product-text__term" term="' . $elem['timer'] . '">Cрок исполнения с момента поступления биоматериала в лабораторию: ' . $elem['timer'] . '</p>';
                $result .= '</div>';

                $result .= '</div>';
                $result .= '</div>';

                // $result .= '<div class="product-mark price">' . $elem['markPrice'] . '</div>';
            }
            echo $result;
        }
    ]
    
?>