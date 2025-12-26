import {Header} from "../components/header/header.js";
import {Footer} from "../components/footer/footer.js";

window.customElements.define('header-site', Header)
window.customElements.define('footer-site', Footer)

let $ = document
const body = $.body
const countOfResult = $.querySelector('#count-result')
const ResultOfSearch = $.querySelector('#result-of-search')
const disableFilter = $.querySelector('#disable-filter')
const productWrapper = $.querySelector('#product-wrapper')
const filterSearchBox = $.querySelector('#filter-search-box')
const typeFilters = $.querySelectorAll('.type-filter')
const desktopCategoryBox = $.querySelector('#desktop-category-box')
const categoryFilterDesktop = $.querySelector('#category-filter-desktop')
const filterBtn = $.querySelector('#filter-btn')
const mobileFilterBox = $.querySelector('#mobile-filter-box')
const closeMobileFilterBoxBtn = $.querySelector('#close-mobile-filter-box-btn')
const disableMobileFilterBtn = $.querySelector('#disable-mobile-filter-btn')
const mobileTypeFilters = $.querySelectorAll('.type-filter-mobile')
const filterSubmitBtn = $.querySelector('#submit-filter-btn')
const categoryFilterMobileBtn = $.querySelector('#category-filter-mobile-btn')
const sortButtons = $.querySelectorAll('.sort-button')
const mobileSortBtn = $.querySelectorAll('.mobile-sort-btn')
const sortBtn = $.querySelector('#sort-btn')
const mobileSortBox = $.querySelector('#mobile-sort-box')
const blurFilterOverlay = $.querySelector('.blur-filter-overlay')
const closeFilterBoxBtn = $.querySelector('#close-filter-box-btn')
const resultSearchBoxBtn = $.querySelector('#result-search-box-btn')
let isOpenCategoryDesktop = false


const removeLoader = () => {
    $.querySelector('.page-loader').parentElement.classList.add('hidden')
    $.querySelector('.page-loader').parentElement.classList.remove('flex-center')
    $.body.classList.remove('overflow-hidden')
}
////////////////////////////////// --- update product page --- ///////////////////////////////////////////////
const completeToContentPage = async () => {
    let getProduct = null
    let getUrlSearchParam = new URLSearchParams(location.search).get('s')

    let filter = new URLSearchParams(location.search).get('f')
    let sort = new URLSearchParams(location.search).get('sort')

    if (sort || sort === null) {
        getProduct = await fetch(`https://giyahland-json.onrender.com/products`).then(res => {
            removeLoader()
            return res.json()
        }).catch(err => console.log(err))
    }

    if (sort === 'expensive') {
        getProduct = await fetch(`https://giyahland-json.onrender.com/products?_sort=numberPrice`).then(res => {
            removeLoader()
            return res.json()
        }).catch(err => console.log(err))
    }

    if (sort === 'cheapest') {
        //////////////////////////////////////// --- revers to product --- //////////////////////////////////////////////
        let getItems = await fetch(`https://giyahland-json.onrender.com/products?_sort=numberPrice`).then(res => {
            removeLoader()
            return res.json()
        }).catch(err => console.log(err))
        getProduct = [...getItems].reverse()
    }


    let productFilter = getProduct.filter(item => {
        if (item.title.includes(getUrlSearchParam)){
            return item.title
        }
    })

    if (filter) {
        productFilter = productFilter.filter(item => {
            return item.type === filter
        })
    }
    $.title = 'گیاه لند | نتایج برای - ' + getUrlSearchParam
    ResultOfSearch.textContent = 'جستجو برای : ' + getUrlSearchParam
    filterSearchBox.value = getUrlSearchParam
    countOfResult.textContent = productFilter.length + ' گیاه'

    if (productFilter.length > 0) {
        productWrapper.innerHTML = ''
        productFilter.forEach(item => {
            productWrapper.insertAdjacentHTML('beforeend', `<div class="w-full border border-light-gray-500 rounded-xl p-4">
                        <img src="../images/products/${item.src}.png" alt="plant" class="w-full">
                        <!--       plant info         -->
                        <div class="font-MorabbaMedium mt-4 sm:mt-6">
                            <h3 class="text-base sm:text-xl" id="product-title">${item.title}</h3>
                            <!--       plant price         -->
                            <div class="flex items-center justify-between mt-2 sm:mt-4 mb-4 sm:mb-6">
                                <span class="inline-block font-MorabbaLight text-sm">قیمت:</span>
                                <span class="inline-block font-MorabbaMedium text-base sm:text-xl" id="product-price">${item.price}</span>
                            </div>
                            <a href="product.html?id=${item.id}" class="w-full h-10 flex-center text-white bg-forest-green-100 rounded-lg text-sm"
                               id="product-link">مشاهده بیشتر</a>
                        </div>
                    </div>`)
        })
    } else {
        productWrapper.className = ''
        productWrapper.innerHTML = `<div class="flex flex-col items-center -mt-2">
                <img src="../images/error.png" alt="box" class="w-[166px] h-[160px] sm:w-auto sm:h-auto object-cover">
                <span class="font-MorabbaMedium text-base sm:text-xl mb-2">هیچ محصولی با این نام وجود ندارد !</span>
                <p class="font-YekanBakh-Medium text-sm sm:text-xl text-center mb-6">می توانید برای مشاهده بیشتر محصولات
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
//////////////////////////////////// --- set filter in url --- ////////////////////////////////////////
typeFilters.forEach((item) => {
    item.addEventListener('change', (event) => {
        let filter = new URLSearchParams(location.search).get('f')
        /////////////////////////////// --- replace type filter when change radio box --- /////////////////////////////////////
        filter ? window.history.pushState({}, "", `${location.href.replace(`&f=${filter}`, "")}`) : null
        window.history.pushState({}, "", `${location.href}&f=${event.target.dataset.filterName}`)
        completeToContentPage()
    })
})
/////////////////////////////////////////// --- disable filter func --- //////////////////////////////////////////
const disableFilterHandler = (filters) => {
    filters.forEach(item => {
        item.checked = false
    })
    ////////////////////////////// --- sort box  to back default style --- ///////////////////////////
    removeSortItemActive()
    mobileSortBtn[0].insertAdjacentHTML('beforeend', '<svg class="w-6 h-6"><use href="#check-circle"></use></svg>')
    mobileSortBtn[0].classList.add('sort-button--active')
    sortBtn.innerHTML = `<svg class="w-6 h-6"><use href="#arrow-up-down"></use></svg><span>${mobileSortBtn[0].textContent}</span>`

    window.history.pushState({}, "", `${location.href.substring(0, location.href.indexOf('&'))}`)
    completeToContentPage()
}
///////////////////////////////////// --- open and close category box func --- //////////////////////////////////////
const openCategorySection = (event) => {
    event.preventDefault()
    if (!isOpenCategoryDesktop) {
        event.target.parentElement.parentElement.parentElement.style.height = '415px'
        event.target.style.transform = 'rotate(180deg)'
        isOpenCategoryDesktop = true
    } else {
        event.target.parentElement.parentElement.parentElement.style.height = '68px'
        event.target.style.transform = 'rotate(0)'
        isOpenCategoryDesktop = false
    }
}
//////////////////////////////////// --- open filter box in mobile func --- ///////////////////////////////////////////
const openFilterBoxInMobile = () => {
    mobileFilterBox.classList.remove('translate-y-full')
    body.classList.add('overflow-hidden')
}
//////////////////////////////////// --- close filter box in mobile func --- ///////////////////////////////////////////
const closeFilterBoxInMobile = () => {
    mobileFilterBox.classList.add('translate-y-full')
    body.classList.remove('overflow-hidden')
}
//////////////////////////////////////// --- apply filter btn in mobile --- /////////////////////////////////////////
const applyToFilter = () => {
    let findFilterActive = null
    mobileTypeFilters.forEach(item => {
        if (item.checked) {
            findFilterActive = item
        }
    })

    findFilterActive ? window.history.pushState({}, "", `${location.href}&f=${findFilterActive.dataset.filterName}`) : window.history.pushState({}, "", "")

    completeToContentPage()
    closeFilterBoxInMobile()
}
/////////////////////////////////////////// --- active sort btn and update url --- //////////////////////////////////////////////////
sortButtons.forEach(btn => btn.onclick = event => {
    event.preventDefault()
    sortButtons.forEach(item => {
        item.classList.remove('sort-button--active')
    })
    event.target.classList.add('sort-button--active')

    updateUrlWhenChangeSort(event.target)
    completeToContentPage()

})
//////////////////////////////////// --- open sort box func  --- /////////////////////////////////////////
const openSortBox = () => {
    mobileSortBox.classList.remove('translate-y-full')
    mobileSortBox.classList.add('translate-y-[0]')
    body.classList.add('overflow-hidden')
    blurFilterOverlay.classList.remove('hidden')
}
//////////////////////////////////// --- close sort box func  --- /////////////////////////////////////////
const closeSortBox = () => {
    mobileSortBox.classList.add('translate-y-full')
    mobileSortBox.classList.remove('translate-y-[0]')
    body.classList.remove('overflow-hidden')
    blurFilterOverlay.classList.add('hidden')
}
//////////////////////////////////// --- active sort item when click --- /////////////////////////////////////////
mobileSortBtn.forEach(btn => btn.onclick = event => {
    event.preventDefault()

    removeSortItemActive()
    event.target.insertAdjacentHTML('beforeend', '<svg class="w-6 h-6"><use href="#check-circle"></use></svg>')
    event.target.classList.add('sort-button--active')
    sortBtn.innerHTML = `<svg class="w-6 h-6"><use href="#arrow-up-down"></use></svg><span>${event.target.firstElementChild.textContent}</span>`

    updateUrlWhenChangeSort(event.target)
    completeToContentPage()
    closeSortBox()
})
//////////////////////////////////// --- update URL when change sort item --- /////////////////////////////////////////
const updateUrlWhenChangeSort = (event) => {
    let sort = new URLSearchParams(location.search).get('sort')
    sort ? window.history.pushState({}, "", `${location.href.replace(`&sort=${sort}`, "")}`) : null
    window.history.pushState({}, "", `${location.href}&sort=${event.dataset.id}`)
}
const removeSortItemActive = () => {
    mobileSortBtn.forEach(item => {
        if (item.lastElementChild.tagName === 'svg') {
            item.lastElementChild.remove()
            item.classList.remove('sort-button--active')
        }
    })
}

const userSearchHandler = ()=>{
    location.href = `products-page.html?s=${filterSearchBox.value}`
}
////////////////////////////////////// --- listeners --- //////////////////////////////////////
disableFilter.addEventListener('click', () => {
    disableFilterHandler(typeFilters)
})
categoryFilterDesktop.addEventListener('click', openCategorySection)
filterBtn.addEventListener('click', openFilterBoxInMobile)
closeMobileFilterBoxBtn.addEventListener('click', closeFilterBoxInMobile)
disableMobileFilterBtn.addEventListener('click', () => {
    disableFilterHandler(mobileTypeFilters)
    closeFilterBoxInMobile()
})
filterSubmitBtn.addEventListener('click', applyToFilter)
categoryFilterMobileBtn.addEventListener('click', openCategorySection)
sortBtn.addEventListener('click', openSortBox)
blurFilterOverlay.addEventListener('click', closeSortBox)
closeFilterBoxBtn.addEventListener('click', closeSortBox)
resultSearchBoxBtn.addEventListener('click' , userSearchHandler)
window.addEventListener('load', () => {
    window.history.pushState({}, "", `${location.href.substring(0, location.href.indexOf('&'))}`)
    completeToContentPage()
})