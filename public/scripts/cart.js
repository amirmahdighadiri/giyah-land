import {Header} from "../components/header/header.js";
import {Footer} from "../components/footer/footer.js";

window.customElements.define('header-site', Header)
window.customElements.define('footer-site', Footer)

let $ = document
const main = $.querySelector('main')
const basketProductWrapper = $.querySelector('#basket-product-wrapper')
const itemBasketCount = $.querySelector('#item-basket-count')
const basketTotalPrice = $.querySelector('#basket-total-price')

//////////////////////////////////////// --- fun to add and update count and total price --- ////////////////////////////////////////////////////////
const getAndCreateItem = async (userId) => {
    let getUserInformation = await fetch(`https://giyahland-json.onrender.com/carts/${userId}`).then(res => res.json()).catch(err => console.log(err))
    let getProductOfDb = await fetch(`https://giyahland-json.onrender.com/products`).then(res => res.json()).catch(err => console.log(err))

    if (getUserInformation.items.length <= 0) {
        main.classList.remove('basket-not-empty')
    }else {
        let [sum, counter] = Array(2).fill(0)

        basketProductWrapper.innerHTML = ''
        await getUserInformation.items.forEach(item => {
            basketProductWrapper.insertAdjacentHTML('beforeend', `<div class="flex items-center gap-x-6">
                            <!--        product image      -->
                            <img src="../images/products/${getProductOfDb[item.productId-1].src}.png" alt=""
                                 class="w-[146px] h-[174px] sm:w-[160px] sm:h-[234px] object-cover">
                            <div class="flex flex-col gap-y-4">
                                <!--      product title       -->
                                <h3 class="font-MorabbaMedium text-base sm:text-xl">${getProductOfDb[item.productId-1].title}</h3>
                                <span class="font-YekanBakh-Medium text-base sm:text-xl">فلاور گاردن</span>
                                <!--        product price          -->
                                <div class="flex items-center gap-x-2 sm:gap-x-6 font-YekanBakh-Medium">
                                    <span class="text-spanish-gray-400 text-sx sm:text-base">قیمت:</span>
                                    <span class="text-sm sm:text-xl">${getProductOfDb[item.productId-1].price}</span>
                                </div>
                                <!--        product count box          -->
                                <div class="w-[140px] sm:w-[153px] flex justify-center items-start gap-x-6 border border-light-gray-700 rounded-lg py-1.5">
                                    <!--         plus btn           -->
                                    <div onclick="increaseCount(${item.productId} , ${userId})" class="">
                                        <svg class="w-6 h-6 sm:w-7 sm:h-7">
                                            <use href="#plus"></use>
                                        </svg>
                                    </div>
                                    <!--          count product           -->
                                    <div class="child:block text-center text-xs sm:text-sm">
                                        <span class="">${item.count}</span>
                                        <span class="">تعداد</span>
                                    </div>
                                    <!--         delete btn           -->
                                    <div onclick="removerItem(${item.productId} , ${userId})" class="">
                                        <svg class="w-6 h-6 sm:w-7 sm:h-7">
                                            <use href="#delete"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>`)

            counter = +item.count + counter
            sum = (getProductOfDb[item.productId-1].numberPrice * item.count) + sum
        })

        itemBasketCount.textContent = counter
        basketTotalPrice.textContent = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "   تومان"
    }
}

///////////////////////////////////////////////// --- increase product item btn func --- ////////////////////////////////////////////////////////
const increaseCount = async (productId, userId) => {
    let userInformation = await fetch(`https://giyahland-json.onrender.com/carts/${userId}`).then(res => res.json()).catch(err => console.log(err))

    let findProduct = userInformation.items.find(item => {
       return +item.productId === productId
    })

    findProduct.count++

    await fetch(`https://giyahland-json.onrender.com/carts/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(userInformation)
    }).then(res => {
        if (res.status == 200) {
            getAndCreateItem(userId)
        }
    }).catch(err => console.log(err))

}
window.increaseCount = increaseCount

/////////////////////////////////////////// --- remove product of basket --- ///////////////////////////////////////////////////
const removerItem = async (productId, userId) => {
    let userInformation = await fetch(`https://giyahland-json.onrender.com/carts/${userId}`).then(res => res.json()).catch(err => console.log(err))
    let findProduct = userInformation.items.findIndex(item => item.productId == productId)

    userInformation.items.splice(findProduct, 1)

    await fetch(`https://giyahland-json.onrender.com/carts/${userId}`, {
        method: "PUT",
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(userInformation)
    }).then(res => {
        if (res.status == 200) {
            getAndCreateItem(userId)
        }
    }).catch(err => console.log(err))

}
window.removerItem = removerItem

/////////////////////////////////////////// --- create user basket when load page func --- ///////////////////////////////////////////////////
const createUserCart = async () => {
    let userId = document.cookie.substring(document.cookie.indexOf('=') + 1)
    if (userId) {
        let getUserInformation = await fetch(`https://giyahland-json.onrender.com/carts/${userId}`).then(res => res.json()).catch(err => console.log(err))
        // console.log(getUserInformation.items.length)
        if (getUserInformation.items.length !== 0) {
            main.classList.add('basket-not-empty')
            $.querySelector('.page-loader').parentElement.classList.add('hidden')
            $.querySelector('.page-loader').parentElement.classList.remove('flex-center')
            getAndCreateItem(userId)
        } else {
            main.classList.remove('basket-not-empty')
            $.querySelector('.page-loader').parentElement.classList.add('hidden')
            $.querySelector('.page-loader').parentElement.classList.remove('flex-center')
        }

    } else {
        location.href = "sign-in.html"
    }
}

////////////////////////// ---listeners--- ////////////////////////////////
window.onload = createUserCart()