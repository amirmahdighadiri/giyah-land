import {Header} from "../components/header/header.js";
import {Footer} from "../components/footer/footer.js";
import {SecondArticleBox} from "../components/second-article-box/second-article-box.js";

window.customElements.define('header-site', Header)
window.customElements.define('footer-site', Footer)
window.customElements.define('second-article-box', SecondArticleBox)

let $ = document
const body = $.body
const articleWrapper = $.querySelector('#article-box-wrapper')
const numberOfArticle = $.querySelector('#number-of-article')
const sortMobileBtn = $.querySelector('#sort-mobile-btn')
const mobileSortBox = $.querySelector('#mobile-sort-box')
const closeSortBoxBtn = $.querySelector('#close-sort-box-btn')
const filterSearchBox = $.querySelector('#filter-search-box')
const searchBoxBtn = $.querySelector('#search-box-btn')
const sortButtons = $.querySelectorAll('.sort-button')
const mobileSortBtn = $.querySelectorAll('.mobile-sort-btn')
const blurSortOverlay = $.querySelector('.blur-sort-overlay')
let findUserSearch = null

const removeLoader = () => {
    $.querySelector('.page-loader').parentElement.classList.add('hidden')
    $.querySelector('.page-loader').parentElement.classList.remove('flex-center')
    $.body.classList.remove('overflow-hidden')
}
const createAndGenerateArticleBox = async () => {
    let getArticle = await fetch(`https://giyahland-json.onrender.com/herbalMedicine`).then(res => {
        $.querySelector('.page-loader').parentElement.classList.add('hidden')
        $.querySelector('.page-loader').parentElement.classList.remove('flex-center')
        $.body.classList.remove('overflow-hidden')
        return  res.json()
    }).catch(err => console.log(err))
    /////////////////////////// --- get sort and search value --- ///////////////////////////
    let sort = new URLSearchParams(location.search).get('sort')
    let search = new URLSearchParams(location.search).get('s')
    /////////////////////////// --- filter for article --- //////////////////////////
    if (search !== 'normal') {
        findUserSearch = getArticle.filter(article => {
            return article.title.includes(search)
        })
    } else {
        findUserSearch = getArticle
    }
    //////////////////////////// --- number of article --- /////////////////////////////
    numberOfArticle.innerHTML = `${findUserSearch.length} مقاله `
    ///////////////////////////////// --- condition for empty or not empty findUserSearch --- ////////////////////////////////////
    if (findUserSearch.length > 0) {
        ///////////////////////////////////// --- check active sort btn --- ////////////////////////////////////////////
        if (sort === 'new') {
            /////////////////////////// --- date sort --- /////////////////////////////
            findUserSearch.sort((a, b) => {
                const dateA = a.date.split('/').join('')
                const dateB = b.date.split('/').join('')
                return dateB - dateA
            })
        } else if (sort === 'old') {
            /////////////////////////// --- date sort --- /////////////////////////////
            findUserSearch.sort((a, b) => {
                const dateA = a.date.split('/').join('')
                const dateB = b.date.split('/').join('')
                return dateA - dateB
            })
        }
        //////////////////////////// --- empty to wrapper --- /////////////////////////////
        articleWrapper.innerHTML = ''
        //////////////////////////// --- add box to DOM --- /////////////////////////////
        findUserSearch.forEach(item => {
            articleWrapper.insertAdjacentHTML('beforeend', `<second-article-box article-title = "${item.title}" article-img = "${item.src}" article-date = "${item.date}" article-author="${item.author}" article-description="${item.description}"></second-article-box>`)
        })
    } else {
        articleWrapper.className = ''
        articleWrapper.innerHTML = `<div class="flex flex-col items-center -mt-2">
                <img src="../images/error.png" alt="box" class="w-[166px] h-[160px] sm:w-auto sm:h-auto object-cover">
                <span class="font-MorabbaMedium text-base sm:text-xl mb-2">هیچ مقاله ای با این نام وجود ندارد !</span>
                <p class="font-YekanBakh-Medium text-sm sm:text-xl text-center mb-6">می توانید برای مشاهده بیشتر مقالات
                    به صفحه اصلی بروید</p>
                <a href="../../index.html" class="h-10 flex items-center gap-x-2 text-forest-green-100 border border-forest-green-100 rounded-xl px-4">
                    بازگشت به صفحه اصلی
                    <svg class="hidden sm:block w-6 h-6">
                        <use href="#arrow-left"></use>
                    </svg>
                </a>
            </div>`
    }
}
//////////////////////////// --- active sort btn func --- ////////////////////////////////
const activeSortBtn = (array, activeClassName, sortMobile) => {
    array.forEach(btn => btn.onclick = event => {
        event.preventDefault()
        /////////////////////////////////// --- remove active style for all sort item --- ///////////////////////////////////////
        array.forEach(item => {
            item.classList.remove(activeClassName)
        })
        /////////////////////////////////// --- add active style for selected item --- ///////////////////////////////////////
        btn.classList.add(activeClassName)
        updateUrl(event.target)
        /////////////////////////////////// --- The condition is executed when 'sortMobile === true' --- ///////////////////////////////////////
        if (sortMobile) {
            /////////////////////////////////// --- remove check circle icon for all sort item --- ///////////////////////////////////////
            array.forEach(item => {
                if (item.lastElementChild.tagName === 'svg') {
                    item.lastElementChild.remove()
                }
            })
            //////////////////////////////// --- add check circle icon for selected item --- //////////////////////////////
            btn.insertAdjacentHTML('beforeend', `<svg class="w-6 h-6"><use href="#check-circle"></use></svg>`)
            //////////////////////////// --- sortMobileBtn update text content ---  ///////////////////////////////
            sortMobileBtn.innerHTML = `<svg class="w-6 h-6"><use href="#arrow-up-down"></use></svg><span>${btn.firstElementChild.textContent}</span>`
            ///////////////////////////// --- close popup box --- /////////////////////////////////
            closeSortMobileBox()
        }
    })
}
//////////////////////////////////// --- update URL func --- ////////////////////////////////////////
const updateUrl = (el) => {
    /////////////////////// --- get sort item from URL --- //////////////////////////////
    let sort = new URLSearchParams(location.search).get('sort')
    /////////////////////// --- if sort item available delete it otherwise no change URL --- //////////////////////////////
    sort ? window.history.pushState({}, "", `${location.search.replace(`&sort=${sort}`, "")}`) : null
    /////////////////////// --- set sort item selected from user --- //////////////////////////////
    window.history.pushState({}, "", `${location.search}&sort=${el.dataset.id}`)
    /////////////////////// --- update DOM --- //////////////////////////////
    createAndGenerateArticleBox()
}
///////////////////////////////// --- open sort popup func --- ////////////////////////////////
const openSortMobileBox = () => {
    body.classList.add('overflow-hidden')
    mobileSortBox.classList.remove('translate-y-full')
    blurSortOverlay.classList.remove('hidden')
}
///////////////////////////////// --- close sort popup func --- ////////////////////////////////
const closeSortMobileBox = () => {
    body.classList.remove('overflow-hidden')
    mobileSortBox.classList.add('translate-y-full')
    blurSortOverlay.classList.add('hidden')
}

const searchHandler = () => {
    let getInputValue = filterSearchBox.value
    location.href = `../pages/article-page.html?s=${getInputValue}`
}
//////////////////////////// --- event handler --- //////////////////////////////
sortMobileBtn.addEventListener('click', openSortMobileBox)
closeSortBoxBtn.addEventListener('click', closeSortMobileBox)
blurSortOverlay.addEventListener('click', closeSortMobileBox)
searchBoxBtn.addEventListener('click', searchHandler)
window.addEventListener('load', () => {
    window.history.pushState({}, "", `${location.href.substring(0, location.href.indexOf('&'))}`)
    createAndGenerateArticleBox()
    activeSortBtn(sortButtons, 'sort-button--active', false)
    activeSortBtn(mobileSortBtn, 'sort-button--active', true)
})

