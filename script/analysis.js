const filterInput = document.querySelector('.filter-input input');
const localParse = JSON.parse(localStorage.getItem('input'))

const productItems = document.querySelector('.product-items');

filterInput.setAttribute('value', localParse.title)

window.addEventListener('click', (e) => {
    const visible = e.target.closest('.product-bottom__visible')
    if(visible) {
        console.log(visible.closest('.product-bottom__hide'))
        visible.closest('.product-bottom').querySelector('.product-bottom__hide').classList.toggle('active')
    }
})

window.addEventListener('DOMContentLoaded', (e) => {

    compareButton()

    // const localProductArr = JSON.parse(localStorage.getItem('analize-item'))

    // localProductArr.forEach(i => {
    //     console.log(i.markPrice)
    //     if(i.markPrice) {
    //         const productHTML = `
    //         <div class="product-item com" id="${i.id}">

    //             <div class="product-item__l">
                    
    //                 <div class="product-item__cart first">
    //                     <button class="add-cart" aria-label="add cart">В корзину</button>
    //                 </div>
    //                 <div class="product-item__price">
    //                     <div class="product-item__full" price="${i.price}">${i.price} ₽</div>
    //                     <div class="product-item__blood" price-blood="${i.bloodPrice}">+${i.bloodPrice}₽ взятие крови</div>
    //                 </div>
    //                 <div class="product-item__cart">
    //                     <button class="add-cart" aria-label="add cart">В корзину</button>
    //                 </div>
    //                 <div class="product-item__more">
    //                     <button class="product-item__link" aria-label="about analize">Подробнее</button>
    //                     <div class="product-compare">
    //                         <p class="product-compare__text">сравнить</p>
    //                         <img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">
    //                     </div>
    //                 </div>

    //             </div>

    //             <div class="product-item__r">

    //                 <div class="product-head">
    //                     <p class="product-title">${i.title}</p>
    //                     <div class="product-compare add-compare">
    //                         <p class="product-compare__text">сравнить</p>
    //                         <img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">
    //                     </div>
    //                 </div>

    //                 <div class="product-stats">
    //                     <img src="${i.labs}" alt="lab-quest" loading="lazy" class="product-stats__img">
    //                     <div class="star-rating" rating="${i.rating}">
    //                         <span style="width:${i.rating}%"></span>
    //                     </div>
    //                 </div>

    //                 <div class="product-text">
    //                     <p class="product-text__biomaterial">Исследуемый биоматериал:  ${i.bio}</p>
    //                     <p class="product-text__materials">Метод исследования: ${i.bio}</p>
    //                     <p class="product-text__term" term="${i.timer}">Cрок исполнения с момента поступления биоматериала в лабораторию: ${i.timer}</p>
    //                 </div>

    //             </div>

    //             <div class="product-mark price">${i.markPrice}</div>

    //         </div>`;
    //         productItems.insertAdjacentHTML('beforeend', productHTML);
    //     } else {
    //         const productHTML = `
    //         <div class="product-item com" id="${i.id}">

    //             <div class="product-item__l">
                    
    //                 <div class="product-item__cart first">
    //                     <button class="add-cart" aria-label="add cart">В корзину</button>
    //                 </div>
    //                 <div class="product-item__price">
    //                     <div class="product-item__full" price="${i.price}">${i.price} ₽</div>
    //                     <div class="product-item__blood" price-blood="${i.bloodPrice}">+${i.bloodPrice}₽ взятие крови</div>
    //                 </div>
    //                 <div class="product-item__cart">
    //                     <button class="add-cart" aria-label="add cart">В корзину</button>
    //                 </div>
    //                 <div class="product-item__more">
    //                     <button class="product-item__link" aria-label="about analize">Подробнее</button>
    //                     <div class="product-compare">
    //                         <p class="product-compare__text">сравнить</p>
    //                         <img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">
    //                     </div>
    //                 </div>

    //             </div>

    //             <div class="product-item__r">

    //                 <div class="product-head">
    //                     <p class="product-title">${i.title}</p>
    //                     <div class="product-compare add-compare">
    //                         <p class="product-compare__text">сравнить</p>
    //                         <img src="./img/product/compare.png" loading="lazy" alt="compare" class="product-compare__img">
    //                     </div>
    //                 </div>

    //                 <div class="product-stats">
    //                     <img src="${i.labs}" alt="lab-quest" loading="lazy" class="product-stats__img">
    //                     <div class="star-rating" rating="${i.rating}">
    //                         <span style="width:${i.rating}%"></span>
    //                     </div>
    //                 </div>

    //                 <div class="product-text">
    //                     <p class="product-text__biomaterial">Исследуемый биоматериал:  ${i.bio}</p>
    //                     <p class="product-text__materials">Метод исследования: ${i.bio}</p>
    //                     <p class="product-text__term" term="${i.timer}">Cрок исполнения с момента поступления биоматериала в лабораторию: ${i.timer}</p>
    //                 </div>

    //             </div>

    //         </div>`;
    //         productItems.insertAdjacentHTML('beforeend', productHTML);
    //     }
        
        
    // });

    const productI = document.querySelectorAll('.product-item__full');    

})