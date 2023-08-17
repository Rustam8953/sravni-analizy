let smartLoc = navigator.userAgent
let pickclick = (smartLoc.match(/iPad/i) || smartLoc.match(/iPhone/)) ? "touchstart" : "click";


const header = document.querySelector('.header');
const headerHTML = `
<div class="header-box">
            
    <div class="header-content">

        <div class="version-box"><a href="https://sravni-analizy.ru/" class="header-logo" alt="logo"><img alt="logo" loading="lazy"></a><div class="version">pre-beta-версия</div></div>

        <div class="header-loc">
            <div class="header-loc__visible"><p>Москва</p></div>
            <div class="header-loc__head"></div>
        </div>

        <nav class="header-nav">
            <ul class="header-list">
                <li><a href="#" class="header-link analys active" aria-label="analys">Анализы</a></li>
                <li><a href="#" class="header-link advertisement" aria-label="advertisement">Акции</a></li>
                <li><a href="#" class="header-link about" aria-label="about">О нас</a></li>
                <li><a href="#" class="header-link blog" aria-label="blog">Блог</a></li>
                <li><a href="#" class="header-link form" aria-label="form">Связаться с нами</a></li>
            </ul>
        </nav>

        <div class="header-func">

            <a href="#" class="header-person" aria-label="personal"><img src="./img/icon/person.svg" alt="person" loading="lazy"><p>Личный кабинет</p></a>

            <div class="header-cart"><img src="./img/icon/cart.svg" alt="cart" loading="lazy"><p>Корзина</p><div class="cart-length">0</div></div>

            <div class="header-burger">
                <div class="header-line">
                    <div class="header-line__item"></div>
                    <div class="header-line__line"></div>
                </div>
            </div>

        </div>

    </div>

</div>`;
header.insertAdjacentHTML('beforeend', headerHTML);


const footer = document.querySelector('.footer');
const footerHTML = `
<div class="footer-box box">

    <div class="footer-content">

        <div class="footer-top">

            <div class="footer-info">

                <div class="footer-logo">
                    <img src="./img/logo/logo-light.svg" alt="logo" loading="lazy">
                </div>

                <ul class="footer-soc">

                    <li><a href="#" class="footer-soc__link" aria-label="telegram"><img src="./img/icon/telegram.svg" alt="telegram" loading="lazy"></a></li>
                    <li><a href="#" class="footer-soc__link" aria-label="vk"><img src="./img/icon/vk (1).svg" alt="vk" loading="lazy"></a></li>
                    <li><a href="#" class="footer-soc__link" aria-label="ok"><img src="./img/icon/ok.svg" alt="ok" loading="lazy"></a></li>
                    <li><a href="#" class="footer-soc__link" aria-label="youtube"><img src="./img/icon/you-tube.svg" alt="youtube" loading="lazy"></a></li>

                </ul>

            </div>

            <div class="footer-menu">
                <nav class="footer-nav">

                    <div class="footer-wrapper">

                        <ul class="footer-list" slide-name="Клиентам">
                            <h4 class="footer-title">Клиентам</h4>
                            <li><a href="#" class="footer-link" aria-label="analys">Анализы</a></li>
                            <li><a href="#" class="footer-link" aria-label="sale">Акции</a></li>
                            <li><a href="#" class="footer-link" aria-label="blog">Блог</a></li>
                            <li><a href="#" class="footer-link" aria-label="form">Обратная связь</a></li>
                        </ul>

                        <ul class="footer-list" slide-name="Компания">
                            <h4 class="footer-title">Компания</h4>
                            <li><a href="#" class="footer-link" aria-label="about">О нас</a></li>
                            <li><a href="#" class="footer-link" aria-label="information">Правовая информация</a></li>
                            <li><a href="#" class="footer-link" aria-label="privacy politic">Политика конфиденциальности</a></li>
                            <li><a href="#" class="footer-link" aria-label="contact">Контакты</a></li>
                        </ul>

                        <ul class="footer-list" slide-name="Бизнесу">
                            <h4 class="footer-title">Бизнесу</h4>
                            <li><a href="#" class="footer-link" aria-label="partner">Стать партнером</a></li>
                            <li><a href="#" class="footer-link" aria-label="advertisement">Реклама</a></li>
                        </ul>

                    </div>

                    <div class="swiper-pagination"></div>

                </nav>
            </div>

        </div>

        <div class="footer-bottom">
            <p class="footer-text">© 2023 ООО Сравни Анализы</p>
        </div>

    </div>

</div>`;
footer.insertAdjacentHTML('beforeend', footerHTML);


const menuBox = document.querySelector('.menu');
const menuHTML = `
<div class="menu-content">
    <div class="header-loc">
        <div class="header-loc__visible"><p>Москва</p></div>
        <div class="header-loc__hide"></div>
    </div>

    <nav class="header-nav">
        <ul class="header-list">
            <li><a href="#" class="header-link analys" aria-label="analys">Анализы</a></li>
            <li><a href="#" class="header-link advertisement" aria-label="advertisement">Акции</a></li>
            <li><a href="#" class="header-link about" aria-label="about">О нас</a></li>
            <li><a href="#" class="header-link blog" aria-label="blog">Блог</a></li>
            <li><a href="#" class="header-link form" aria-label="form">Связаться с нами</a></li>
        </ul>
    </nav>

    <div class="header-func">

        <a href="#" class="header-person" aria-label="personal"><img src="./img/icon/person.svg" alt="person" loading="lazy"><p>Личный кабинет</p></a>

        <div class="header-cart"><img src="./img/icon/cart.svg" alt="cart" loading="lazy"><p>Корзина</p></div>

    </div>

    <div class="menu-close">
        <div class="menu-line"></div>
    </div>
</div>`;
menuBox.insertAdjacentHTML('beforeend', menuHTML);



const filterDrop = document.querySelectorAll('.filter-drop');
const filterArr = document.querySelectorAll('.filter-hide');


// filterDrop.forEach((n, i, a) => {
//     n.addEventListener('click', () => a.forEach(m => m.querySelector('.filter-hide').classList.toggle('active', m === n)));
// });
let cartItem = [];
if(localStorage.getItem('cart-item')) {
    cartItem = JSON.parse(localStorage.getItem('cart-item'));
}

let compareArr = [];
let activeBtn = [];
// if(localStorage.getItem('compare')) {
//     compareArr = JSON.parse(localStorage.getItem('compare'));
// }



// const localProd = localStorage.setItem('product-item-analize');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close')
const compare = document.querySelector('.compare');
const productCompare = document.querySelector('.product-compare');
const compareItems = document.querySelector('.compare-items');
const productItem = document.querySelectorAll('.product-item');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const modalContent = document.querySelector('.modal-content');

const img = document.querySelector('.header-logo img');
const personImg = document.querySelector('.header-person img');
const cartImg = document.querySelector('.header-cart img');

const footerNav = document.querySelector('.footer-nav');
const footerWrap = document.querySelector('.footer-wrapper');
const footerList = document.querySelectorAll('.footer-list');



if(compare) {
    compareItem()
}


window.addEventListener('click', (e) => {

    const compareArrow = e.target.closest('.compare-arrow');

    const targetE = e.target.closest('.product-item__link');
    if(targetE) {
        const node = targetE.closest('.product-item')
        console.log(node)
        const obj = {
            title: node.querySelector('.product-title').innerText,
            labImg: node.querySelector('.product-stats__img').getAttribute('src'),
            bloodPrice: node.querySelector('.product-item__blood').getAttribute('price-blood'),
            price: node.querySelector('.product-item__full').getAttribute('price'),
            btn: node.querySelector('.add-cart').getAttribute('class'),
            rating: node.querySelector('.star-rating').getAttribute('rating')
        }

        localStorage.setItem('more', JSON.stringify(obj))

        const localMore = JSON.parse(localStorage.getItem('more')); 
        const analizeMore = JSON.parse(localStorage.getItem('analize-more'));

        const html = ` 
        <div class="modal-more">
            <p class="modal-title">${localMore.title}</p>

            <div class="modal-lab">
                <img src="${localMore.labImg}" alt="lab-logo" class="modal-img" loading="lazy">
                <div class="star-rating">
                    <span style="width:${localMore.rating}%"></span>
                </div>
            </div>

            <div class="modal-func">
                <div class="modal-price">
                    <div class="modal-price__lab">${localMore.price} ₽</div>
                    <div class="modal-price__bio">+${localMore.bloodPrice}₽ взятие крови</div>
                </div>

                <div class="modal-add">
                    <button class="add-cart">В корзину</button>
                </div>
            </div>

            <nav class="modal-nav">
                <ul class="modal-list">
                    <li onclick="document.querySelector('.description').scrollIntoView({behavior: 'smooth', block: 'start'})">Описание</li>
                    <li onclick="document.querySelector('.preparation').scrollIntoView({behavior: 'smooth', block: 'start'})">Подготовка</li>
                    <li onclick="document.querySelector('.term').scrollIntoView({behavior: 'smooth', block: 'start'})">Срок</li>
                    <li onclick="document.querySelector('.researches').scrollIntoView({behavior: 'smooth', block: 'start'})">Метод исследования</li>
                </ul>
            </nav>

            <div class="modal-about">

                <h4 class="modal-subtitle">Описание</h4>
                <p class="modal-text description">
                    ${analizeMore.description}
                </p>

                <h4 class="modal-subtitle">Подготовка</h4>
                <h6 class="modal-title__sec">Заранее</h6>
                <p class="modal-text preparation">
                    ${analizeMore.preparation1}
                </p>
                <h6 class="modal-title__sec">Накануне</h6>
                <p class="modal-text">
                    За 24 часа до взятия крови: Ограничьте жирную и жареную пищу, не принимайте алкоголь. От 8 до 14 часов до сдачи крови не принимайте пищу, пейте только чистую негазированную воду.
                </p>
                <h6 class="modal-title__sec">В день сдачи</h6>
                <p class="modal-text">
                    Перед забором крови
                    <ul class="modal-text__list">
                        <li>60 минут не курить,</li>
                        <li>15-30 минут находиться в спокойном состоянии.</li>
                    </ul>
                </p>

                <h4 class="modal-subtitle">Срок</h4>
                <p class="modal-text term">
                    ${analizeMore.timer}
                </p>

                <h4 class="modal-subtitle">Метод исследования</h4>
                <p class="modal-text researches">${analizeMore.search}</p>

            </div>
        </div>`;

        modalContent.innerHTML = '';
        modalContent.innerHTML = html;

        modal.classList.add('active');
    }

    const productBtn = e.target.closest('.add-cart');
    if(productBtn) {
        productBtn.classList.toggle('active')
    }

    if(compareArrow) {
        compare.classList.toggle('active');
    }
    
    const compareRemove = e.target.closest('.compare-remove');
    if(compareRemove) {

        const id = e.target.closest('.product-item').getAttribute('id')
        
        console.log(compareArr)
        
        const newArr = compareArr.filter(x => {
            return Number(x.id) !== Number(id);
        })
        
        // compareArr.forEach(i => {
        //     if(Number(i.id) == id) {
        //         let index = compareArr.indexOf(i);
        //         console.log(index)
        //         compareArr.splice(index, 1)
        //         console.log(compareArr)
        //         compareItems.innerHTML = '';
        //         compareItem()
        //     }
        // })
        
        // console.log(newArr)
        
        // compareArr.forEach(i => {
        //     if(i.id == id) {
                
        //         var indexArr = compareArr.filter(x => {
        //             return Number(x.id) !== Number(id);
        //         })

        //         compareArr = indexArr
                
        //         
                
        //         compareItem()

                
        //     }
        // })
        
        console.log(newArr)
        
        compareArr = newArr
        compareItems.innerHTML = '';
        compareItem()
        
        console.log(compareArr)

    }

    if(e.target.closest('.add-compare')) {
        const node = e.target.closest('.product-item')
        const obj = {
            id: node.getAttribute('id'),
            title: node.querySelector('.product-title').innerText,
            labImg: node.querySelector('.product-stats__img').getAttribute('src'),
            price: node.querySelector('.product-item__full').innerText,
        }

        compareArr.push(obj)

        let uniqueArray = compareArr.filter((value, index) => {
            const _value = JSON.stringify(value);
            return index === compareArr.findIndex(obj => {
              return JSON.stringify(obj) === _value;
            });
        });

        compareArr = uniqueArray

        compareItem()

        compareButton()
    }

    if(e.target.closest('.modal-close')) {
        modal.classList.remove('active');
    }

    if(e.target.closest('.header-burger')) {
        menu.classList.toggle('active');
        body.classList.toggle('stuck');
        
    }

    if(e.target.closest('.menu-close')) {
        menu.classList.toggle('active');
        body.classList.toggle('stuck');
    }

    const addCart = e.target.closest('.add-cart');
    if(addCart) {
        const node = addCart.closest('.product-item');
        const cartObj = {
            id: node.getAttribute('id'),
            title: node.querySelector('.product-title').innerText,
            price: node.querySelector('.product-item__full').innerText,
            priceBlood: node.querySelector('.product-item__blood').getAttribute('price-blood') + ' ₽',
            imgLab: node.querySelector('.product-stats__img').getAttribute('src'),
            term: node.querySelector('.product-text__term').getAttribute('term')
        }

        cartItem.push(cartObj);

        localStorage.setItem('cart-item', JSON.stringify(cartItem));

        cartLength()
    }

    if(e.target.closest('.header-cart')) {
        const cartHTML = `
        <div class="modal-cart">
            <p class="cart-title">Корзина</p>
            <div class="cart-content">
                <div class="cart-head">
                    <div class="cart-l">
                        <p class="cart-text">Пока что это только пребета-версия сайта, поэтому оформить заказ у нас Вы не сможете. </br></br> Приносим свои извинения!</p>
                    </div>
                    <div class="cart-r">
                        <img src="./img/error/image 13.png" alt="cart-img" loading="lazy">
                    </div>
                </div>
                <div class="cart-wrapper">
                    <p class="cart-subtitle">Ваши анализы:</p>
                    <div class="cart-items">
                        
                    </div>
                    <div class="cart-total">
                        <p class="cart-total__title">Итого:</p>
                        <p class="cart-total__price">445</p>
                    </div>
                </div>
            </div>
        </div>`;

        modalContent.innerHTML = '';

        modalContent.innerHTML = cartHTML;

        renderCart()

        const bioPrice = document.querySelectorAll('.bio-price')


        const cartItemPrice = document.querySelector('.cart-item__price');

        cartPrice()

        nullCart()

        modal.classList.add('active')

        productItem.forEach(i => {
            cartItem.forEach(n => {
                if(i.id == n.id) {

                    const newCart = cartItem.filter(m => {
                        return m.id == i.id
                    })

                }
            })
        })
        
    }

    const cartDelete = e.target.closest('.cart-item__delete');
    if(cartDelete) {
        const node = cartDelete.closest('.cart-item__box');

        cartItem.forEach(i => {
            if(i.id == node.getAttribute('id')) {

                const id = Number(node.getAttribute('id'));
                
                var index = cartItem.filter(x => {
                    return x.id != id;
                })

                cartItem = index

                cartLocal();
                removeCart();
                renderCart();
                cartPrice();
                cartLength();
                nullCart();
            }
        })
    }

})

window.addEventListener('resize', () => {
    logo();

    const swiperBlock = document.querySelector('.swiper')
    if(!swiperBlock) {
        swiper();
    } else if(screen.width > 770) {
        swiper() 
    }

})

window.addEventListener('DOMContentLoaded', () => {
    logo();
    swiper();
    cartLength();
})


function logo() {
    if(screen.width < 800) {
        img.setAttribute('src', './img/logo/logo-mobile.svg');
        personImg.setAttribute('src', './img/icon/profile-light.svg');
        cartImg.setAttribute('src', './img/icon/cart-light.svg')
    } else if(screen.width > 800) {
        img.setAttribute('src', "./img/logo/logo-dark.svg");
        personImg.setAttribute('src', './img/icon/person.svg');
        cartImg.setAttribute('src', './img/icon/cart.svg');
    }
}

function swiper() {
    if(screen.width < 770) {
        footerNav.classList.add('swiper');
        footerWrap.classList.add('swiper-wrapper');
        footerList.forEach(i => {
            i.classList.add('swiper-slide');
        })
        const swiper = new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function(el, className) {

                    const arrName = [];

                    document.querySelectorAll('.footer-list').forEach(i => {
                        arrName.push(i.getAttribute('slide-name'))
                    })

                    return "<span class="+className+">" + arrName[el] + "</span>";
                }
            }
        })
    } else if (screen.width > 770) {
        footerList.forEach(i => {
            i.classList.remove('swiper-slide');
            i.style.width = "auto";
        })
        footerWrap.classList.remove('swiper-wrapper');
        footerNav.classList.remove('swiper');
    }
}

function loacalStorageSave(arr) {
    localStorage.setItem('compare', JSON.stringify(arr))
}

function cartLocal() {
    localStorage.setItem('cart-item', JSON.stringify(cartItem))
}

function cartLength() {
    const cartlen = document.querySelector('.cart-length');
    const cartLocal = JSON.parse(localStorage.getItem('cart-item'));
    cartlen.innerText = cartItem.length;

    if(cartItem.length <= 0) {
        cartlen.classList.toggle('none')
    }
}

function compareItem() {
    
    let bool;
    
    if(compareArr.length > 0) {
        compareItems.innerHTML = '';
    };

    compareArr.forEach(i => {
        const compareHtml = `
        <div class="compare-item com" id=${i.id}>
            <div class="compare-l">
                <img src="./img/product/compare-min.svg" alt="compare-minus" class="compare-img compare-remove">
                <img src="${i.labImg}" alt="logo-lab" class="compare-logo">
                <p class="compare-item__title">${i.title}</p>
            </div>
            <div class="compare-r">
                <p class="compare-price">${i.price}</p>
            </div>
        </div>`;
        compareItems.insertAdjacentHTML('beforeend', compareHtml)
    })
    productItem.forEach(el => {
        // const n2 = compareArr[i];
        // console.log(compareArr)
        // console.log(n)
        // console.log(n2)
        
        // console.log(n.getAttribute('id') == n2.id)
        // console.log(new Date())
        
        // if(n.getAttribute('id') == n2.id) {
        //     n.querySelectorAll('.product-compare__img').forEach(z => {
        //       z.setAttribute('src', './img/product/compare-min.svg');
        //     })
        //     n.querySelectorAll('.product-compare').forEach(z => {
        //         z.classList.add('compare-remove')
        //     })
        //     n.querySelectorAll('.product-compare').forEach(z => {
        //         z.classList.remove('add-compare')
        //     })
        // } if(n.getAttribute('id') !== n2.id) {
        //     n.querySelectorAll('.product-compare__img').forEach(z => {
        //       z.setAttribute('src', './img/product/compare.png');
        //     })
        //     n.querySelectorAll('.product-compare').forEach(z => {
        //         z.classList.remove('compare-remove')
        //     })
        //     n.querySelectorAll('.product-compare').forEach(z => {
        //         z.classList.add('add-compare')
        //     })
        // }
    })
    convertToBools(productItem, compareArr)
    
    function convertToBools(firstArr, secondArr) {
      const result = []
    //   const numbersSet = new Set(secondArr)
      
      console.log(firstArr)
      
      if(secondArr.length > 0) {
          
        for (let i = 0; i < firstArr.length; i++) {
            const currentNum = firstArr[i]
            const newArr = secondArr[i]
            // const bool = numbersSet.has(currentNum)
        
            result.push(bool)
            
            console.log(secondArr)
            
            console.log(currentNum.id)
            
            if(currentNum.getAttribute('id') == secondArr[i].id) {
                currentNum.querySelectorAll('.product-compare__img').forEach(z => {
                  z.setAttribute('src', './img/product/compare-min.svg');
                })
                currentNum.querySelectorAll('.product-compare').forEach(z => {
                    z.classList.add('compare-remove')
                })
                currentNum.querySelectorAll('.product-compare').forEach(z => {
                    z.classList.remove('add-compare')
                })
            } if(currentNum.getAttribute('id') !== secondArr[i].id) {
                currentNum.querySelectorAll('.product-compare__img').forEach(z => {
                  z.setAttribute('src', './img/product/compare.png');
                })
                currentNum.querySelectorAll('.product-compare').forEach(z => {
                    z.classList.remove('compare-remove')
                })
                currentNum.querySelectorAll('.product-compare').forEach(z => {
                    z.classList.add('add-compare')
            })
        }
        
      }   
      }
    
      return result
    }
}

function renderCart() {
    const cartModalItem = document.querySelector('.cart-items')

    cartItem.forEach(i => {
        const cartItemHTML = `
        <div class="cart-item__box" id=${i.id}>
            <div class="cart-item">
                <div class="cart-item__info">
                    <div class="cart-item__head">
                        <p class="cart-item__title">${i.title}</p>
                        <img src="${i.imgLab}" alt="labs-logo" class="cart-item__img">
                    </div>
                    <div class="cart-item__term">
                        <p>Вен. кровь</p><span class="cart-item__term-value">${i.term}</span>
                    </div>
                </div>
                <div class="cart-item__price">
                    <p class="cart-item__price-value">${i.price}</p>
                    <div class="cart-item__delete">
                        <div class="cart-item__line"></div>
                    </div>
                </div>
            </div>
            <div class="bio">
                <div class="bio-info">
                    <p class="title">Взятие биоматериала</p>
                    <img src='${i.imgLab}' alt="labs-logo">
                </div>
                <p class="bio-price">${i.priceBlood}</p>
            </div>
        </div>`;
        cartModalItem.insertAdjacentHTML('beforeend', cartItemHTML);

    })
}

function cartPrice() {
    let totalCart = 0;
    cartItem.forEach(i => {
        totalCart = parseInt(totalCart) + (parseInt(i.price.replace(/\D/g, '')) + parseInt(i.priceBlood));
    })
    document.querySelector('.cart-total__price').innerText = totalCart + ' ₽'
}

function removeCart() {
    const cartItems = document.querySelector('.cart-items')
    cartItems.innerHTML = '';
}

function nullCart() {
    if(cartItem.length == 0)  {
        const cartWrapper = document.querySelector('.cart-wrapper');
        console.log(cartWrapper)
        cartWrapper.innerHTML = ''
        cartWrapper.innerHTML = '<div class="cart-null">В корзине пусто</div>'
    }
}

function compareButton() {
    if(compareArr.length > 0) {
        document.querySelector('.compare-btn').classList.add('active');
    } else if(compareArr.length <= 0) {
        document.querySelector('.compare-btn').classList.remove('active');
    }
}