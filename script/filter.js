const filter = document.querySelector('.filter');
const filterHTML = `
<div class="filter-box box">

    <div class="filter-search">

        <div class="filter-input">

            <input type="text" placeholder="Найти анализ">

            <button type="submit" aria-label="Search submit"><img src="./img/icon/search (1).svg" alt="search" loading="lazy"></button>

        </div>

        <div class="filter-metro"><p>Выберите ближайшее метро</p><img src="./img/icon/arrow.svg" class="filter-arrow" alt="arrow" loading="lazy"></div>

    </div>

    <div class="filter-items">

        <div class="filter-items__box">
            <div class="filter-item gender">
                <div class="filter-block left">Жен</div>
                <div class="filter-block right">Муж</div>
            </div>

            <div class="filter-item">
                <div class="filter-block ch">Дети</div>
                <div class="filter-block center">Взрослые</div>
                <div class="filter-block b">Беременные</div>
            </div>
        </div>

        <div class="filter-items__box">
            <div class="filter-item filter-drop">
                <div class="filter-block problem"><p>Щитовидная железа</p><img src="./img/icon/arrow.svg" class="filter-arrow" alt="arrow" loading="lazy"></div>
                <div class="filter-hide">

                    <div class="filter-hide__func">
                        <div class="filter-hide__back">
                            <img src="./img/icon/back.svg" alt="back-img" loading="lazy">
                        </div>
                        <div class="filter-hide__clear">очистить фильтры</div>
                    </div>

                    <div class="filter-hide__box system"></div>

                </div>
            </div>

            <div class="filter-item filter-drop">
                <div class="filter-block"><p>Заболевания</p><img src="./img/icon/arrow.svg" class="filter-arrow" alt="arrow" loading="lazy"></div>
                <div class="filter-hide">

                    <div class="filter-hide__func">
                        <div class="filter-hide__back">
                            <img src="./img/icon/back.svg" alt="back-img" loading="lazy">
                        </div>
                        <div class="filter-hide__clear">очистить фильтры</div>
                    </div>

                    <div class="filter-hide__box disease">

                        

                    </div>

                </div>
            </div>
        </div>

    </div>

</div>`;
filter.insertAdjacentHTML('beforeend', filterHTML);


const disease = [
    'Covid',
    'TORCH-инфекции',
    'Аллергия',
    'Анемия',
    'Антифосфолипидный синдром (АФС)',
    'Артериальная гипертензия',
    'Артрит',
    'Атеросклероз',
    'Аутоиммунные заболевания',
    'Беременность',
    'Беременность (пренатальный скрининг)',
    'Бесплодие',
    'Вирусные гепатиты',
    'ВИЧ-инфекция',
    'Воспалительные заболевания кишечника',
    'ВПЧ-инфекция',
    'Вредные привычки',
    'Гемобластозы',
    'Герпетические инфекции (герпес-вирусы)',
    'Гипертоническая болезнь',
    'Грибковая инфекция',
    'Грипп',
    'Демиелинизирующие заболевания',
    'Демодекоз',
    'Диарея',
    'Дисбаланс витаминов',
    'Дисбаланс витаминов и микроэлементов',
    'Дисбаланс микроэлементов',
    'Дифтерия',
    'Длительный кашель',
    'Заболевания желудочно-кишечного тракта',
    'Заболевания печени',
    'Заболевания почек',
    'Заболевания предстательной железы',
    'Заболевания щитовидной железы',
    'Инфекции',
    'ИППП',
    'Кандидоз',
    'Коклюш',
    'Коронавирусная инфекция',
    'Краснуха',
    'Лимфопролиферативные заболевания',
    'Листериоз',
    'Миеломная болезнь',
    'Нарушения биоценоза влагалища',
    'Нарушения иммунного статуса',
    'Нарушения свертывания крови',
    'Обследование перед госпитализацией',
    'Онкологические заболевания и онкомаркеры',
    'ОРВИ',
    'Остеопороз',
    'Паразитарные инвазии (гельминты)',
    'Парвовирусная инфекция',
    'Пищевая непереносимость',
    'Подготовка к беременности',
    'Рак шейки матки',
    'Ревматоидный артрит',
    'Сахарный диабет',
    'Сердечно -сосудистые заболевания',
    'Сердечно-сосудистые заболевания',
    'Сифилис',
    'Столбняк',
    'Токсоплазмоз',
    'Туберкулез',
    'Урогенитальные инфекции',
    'Целиакия',
    'Эпидемический паротит (свинка)'
]

const system = [
    'Желудочно-кишечный тракт',
    'Иммунная система',
    'Костная система',
    'Костно-мышечная система',
    'Кроветворение',
    'Надпочечники',
    'Нервная система',
    'Обследование (чекап)',
    'Паращитовидная железа',
    'Печень',
    'Поджелудочная железа',
    'Почки',
    'Предстательная железа',
    'Репродуктивная система (половые гормоны)',
    'Суставы',
    'Щитовидная железа',
]


window.addEventListener('click', (e) => {

    const filterDrop = e.target.closest('.filter-drop');

    if(!filterDrop) {
        const filterDropArr = document.querySelectorAll('.filter-hide.active')
        filterDropArr.forEach(i => {
            i.classList.remove('active');
        })
    }

    if(filterDrop) {
        const allHide = document.querySelectorAll('.filter-hide.active')
        
        allHide.forEach(i => {
            i.classList.toggle('active')
        })
        
        filterDrop.querySelector('.filter-hide').classList.toggle('active')
    }

    const filterBlock = e.target.closest('.filter-block')

    if(filterBlock) {
        filterBlock.classList.toggle('active')
    }

    const hideBack = e.target.closest('.filter-hide__back');
    if(hideBack) {
        hideBack.closest('.filter-hide').classList.remove('active')
    }

    const filterHide = e.target.closest('.filter-hide__clear');
    if(filterHide) {
        const el = filterHide.closest('.filter-hide').querySelectorAll('input[type="checkbox"]')
        el.forEach(i => {
            i.checked = false
        })
    }

    const filterCheck = e.target.closest('.filter-check');
    const filterText = document.querySelector('.filter-block p');
    if(filterCheck) {
        const node = filterCheck.closest('.filter-hide__item');;
        const inputText = node.querySelector('p');
        const el = filterCheck.closest('.filter-item');
        const elDrop = el.querySelector('.filter-block p')

        console.log(el);
        elDrop.innerText = inputText.innerText;

        console.log(elDrop.innerText)
        if(el.querySelector('.problem p').innerText != 'Щитовидная железа') {
            const modalNone = `
            <div class="beta-box">
                <p class="beta-text">
                    Пока что это только пребета-версия сайта, поэтому доступно сравнение анализов только по фильтру “Щитовидная железа”. 
                    <br>
                    Приносим свои извинения!
                </p>
                <div class="beta-img">
                    <img src="./img/error/image 13.png" alt="banner" class="beta-pic">
                </div>
            </div>`;
            modalContent.innerHTML = '';
            modalContent.insertAdjacentHTML('beforeend', modalNone);
            modal.classList.add('active');
        }
    }

})

const diseaseBox = document.querySelector('.disease')
const systemBox = document.querySelector('.system')

window.addEventListener('DOMContentLoaded', () => {
    disease.forEach(i => {
        const html = `
        <label class="filter-hide__item">
            <input class="filter-check" type="radio" name="disease" for="">
            <span class="filter-check__fake"></span>
            <p>${i}</p>
        </label>`;
        diseaseBox.insertAdjacentHTML('beforeend', html);
    })
    system.forEach(i => {
        const html = `
        <label class="filter-hide__item">
            <input class="filter-check" type="radio" name="system">
            <span class="filter-check__fake"></span>
            <p>${i}</p>
        </label>`;
        systemBox.insertAdjacentHTML('beforeend', html);
    })
})