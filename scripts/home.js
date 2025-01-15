import {Header} from "../components/header/header.js";
import {CountUp} from "../scripts/countUp.min.js";
import {ProductBox} from "../components/products-box/products-box.js";
import {ArticleBox} from "../components/article-box/article-box.js";
import {Footer} from "../components/footer/footer.js";

///////////////////////////////// create custom element ///////////////////////////////////
window.customElements.define('header-site', Header)
window.customElements.define('product-box', ProductBox)
window.customElements.define('article-box', ArticleBox)
window.customElements.define('footer-site', Footer)
let $ = document
const apartmentPlanetWrapper = $.querySelector('#apartment-planet-wrapper')
const apartmentPlanetArticleWrapper = $.querySelector('#apartment-planet-article-wrapper')
const decorativePlanetArticleWrapper = $.querySelector('#decorative-planet-article-wrapper')
const decorativePlanetWrapper = $.querySelector('#decorative-planet-wrapper')
const giftPlanetWrapper = $.querySelector('#gift-planet-wrapper')
///////////////////////////////// animateCounter handler ///////////////////////////////////
function animateCounter(el , count){
    const countUp = new CountUp(el, count, {
        duration: 4,
        suffix: "+"
    });
    if (!countUp.error) {
        countUp.start();
    } else {
        console.error(countUp.error);
    }
}

async function getPlanetItem(){
    addProductToDOM(apartmentPlanetWrapper , "apartment")
    addProductToDOM(decorativePlanetWrapper , "decorative")
    addProductToDOM(giftPlanetWrapper , "gift")
}
async function getApartmentPlanetArticle(){
    addArticleBoxToDOM(apartmentPlanetArticleWrapper,"apartment")
    addArticleBoxToDOM(decorativePlanetArticleWrapper,"decorative")
}

async function addProductToDOM(el , dbName){
    let getProductOfDb = await fetch(`https://giyahland-json.onrender.com/products?type=${dbName}-planet`).then(res =>{
        $.querySelector('.page-loader').parentElement.classList.add('hidden')
        $.querySelector('.page-loader').parentElement.classList.remove('flex-center')
        $.body.classList.remove('overflow-hidden')
       return  res.json()
    } ).catch(err => console.log(err))
    getProductOfDb.forEach(item =>{
        el.insertAdjacentHTML('beforeend' , `   <div class="swiper-slide box-width"><product-box product-id="${item.id}" product-title="${item.title}" product-img="${(()=>{
            if (location.href.includes('index.html')){
                return `./images/products/${item.src}.png`
            }else {
                return `../images/products/${item.src}.png`
            }
        })()}" product-price="${item.price}"></product-box></div>`)
    })
}

async function addArticleBoxToDOM(el , dbName){
    let getArticleItemOfDB = await fetch(`https://giyahland-json.onrender.com/article?type=${dbName}-article`).then(res => res.json()).catch(err => console.log(err))
    getArticleItemOfDB.forEach(item =>{
        el.insertAdjacentHTML('beforeend' , `<div class="swiper-slide box-width"><article-box article-id="${item.id}" article-img="${(()=>{
            if (location.href.includes('index.html')){
                return `./images/article-img/article-${item.src}.png`
            }else {
                return `../images/article-img/article-${item.src}.png`
            }
        })()}" article-title="${item.title}"></article-box></div>`)
    })
}

window.addEventListener('load',()=>{
    window.history.pushState("", "", `index.html`);
    animateCounter('home-plants' , 943)
    animateCounter('office-plants' , 243)
    animateCounter('gift-plants' , 128)
    getPlanetItem()
    getApartmentPlanetArticle()
})








