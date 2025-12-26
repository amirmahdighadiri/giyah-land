import {Header} from "../components/header/header.js";
import {Footer} from "../components/footer/footer.js";
import {Modal} from "../components/modal/modal.js";

window.customElements.define('modal-box', Modal)
window.customElements.define('header-site', Header)
window.customElements.define('footer-site', Footer)

let $ = document
const productImage = $.querySelector('#product-image')
const productName = $.querySelector('#product-name')
const productNameAddress = $.querySelector('#product-name-address')
const mobileImageProduct = $.querySelector('#mobile-image-product')
const productImageWrapper = $.querySelector('#product-image-wrapper')
const firstImageProduct = $.querySelector('#first-image-product')
const mobileFirstImageProduct = $.querySelector('#mobile-first-image-product')
const productPrice = $.querySelector('#product-price')
const btnWrapper = $.querySelector('#btn-wrapper')
const deleteProduct = $.querySelector('#delete-product')
const increaseCountBtn = $.querySelector('#increase-count')
const detailsBox = $.querySelectorAll('.details-box')
const similarPlantsProductWrapper = $.querySelector('#similar-plants-product-wrapper')
const addCommentBtn = $.querySelector('#add-comment-btn')
const textButtonBox = $.querySelector('#text-button-box')
const commentBtn = $.querySelector('#comment-btn')
const successBox = $.querySelector('#success-box')
const closeCommentBoxBtn = $.querySelector('#close-comment-box-btn')
const commentBox = $.querySelector('#comment-box')
const commentWrapper = $.querySelector('#comment-wrapper')
const textBoxUserName = $.querySelector('#text-box-user-name')
const commentBoxImage = $.querySelector('#comment-box-image')
const commentBoxProductName = $.querySelector('#comment-box-product-name')
const productImageMiniBox = $.querySelectorAll('.product-image-mini-box')
const commentOverlay = $.querySelector('.comment-overlay')
const overlay = $.querySelector('.overlay')


let userId = document.cookie.substring(document.cookie.indexOf('=') + 1)

let getProductId = new URLSearchParams(location.search).get('id')
const setDetailsPageOfDB = async () => {

    let getProduct = await fetch(`https://giyahland-json.onrender.com/products/${getProductId}`).then(res => res.json()).catch(err => console.log(err))
    let getTypePlant = getProduct.type

    //////////////////////////////// --- set name of product --- /////////////////////////////
    $.title = 'گیاه لند | قیمت و خرید ' + getProduct.title
    productName.innerHTML = getProduct.title
    productNameAddress.innerHTML = getProduct.title
    commentBoxProductName.innerHTML = getProduct.title
    ////////////////////////////////// --- update header --- ///////////////////////////////////////
    $.querySelector('header').firstElementChild.remove()
    $.querySelector('header').insertAdjacentHTML('afterbegin', '<header-site></header-site>')
    ///////////////////////////////////// --- set image in box --- /////////////////////////////////////////////
    productImage.setAttribute('src', `../images/products/${getProduct.src}.png`)
    firstImageProduct.setAttribute('src', `../images/products/${getProduct.src}.png`)
    mobileFirstImageProduct.setAttribute('src', `../images/products/${getProduct.src}.png`)
    commentBoxImage.setAttribute('src', `../images/products/${getProduct.src}.png`)
    ///////////////////////////////////// --- fill to details box --- /////////////////////////////////////////////
    detailsBox.forEach(box => {
        box.lastElementChild.innerHTML = getProduct.details[box.lastElementChild.id]
    })
    ////////////////////////// --- set product price --- /////////////////////////////
    productPrice.innerHTML = getProduct.price
    if(userId){
        let getCart = await fetch(`https://giyahland-json.onrender.com/carts/${userId}`).then(res => res.json()).catch(err => console.log(err))
        let findProduct = getCart.items.find(item => item.productId === getProductId)

        if (findProduct) {
            //////////////////////////////// --- change btn style --- /////////////////////////////////
            btnWrapper.firstElementChild.classList.add('hidden')
            btnWrapper.firstElementChild.classList.remove('flex-center')
            btnWrapper.lastElementChild.classList.remove('hidden')
            btnWrapper.lastElementChild.classList.add('flex')
            /////////////////////////////////// --- set product count --- ////////////////////////////////////
            btnWrapper.lastElementChild.children[1].firstElementChild.innerHTML = findProduct.count
        } else {
            //////////////////////////////// --- change btn style --- /////////////////////////////////
            btnWrapper.firstElementChild.classList.remove('hidden')
            btnWrapper.firstElementChild.classList.add('flex-center')
            btnWrapper.lastElementChild.classList.add('hidden')
            btnWrapper.lastElementChild.classList.remove('flex')
        }
    }

    //////////////////////////////////// --- generate similar product --- ///////////////////////////////////////
    let getTypeProduct = await fetch(`https://giyahland-json.onrender.com/products?type=${getTypePlant}`).then(res => {
        $.querySelector('.page-loader').parentElement.classList.add('hidden')
        $.querySelector('.page-loader').parentElement.classList.remove('flex-center')
        $.body.classList.remove('overflow-hidden')
        return  res.json()
    }).catch(err => console.log(err))
    getTypeProduct.forEach(item => {
        similarPlantsProductWrapper.insertAdjacentHTML('beforeend', `<div class="swiper-slide box-width">
                            <div class="w-[225px] border border-light-gray-500 rounded-xl px-4 p-4">
                                <img src="../images/products/${item.src}.png" alt="plant" class="w-full">
                                <!--       plant info         -->
                                <div class="font-MorabbaMedium mt-4 sm:mt-6">
                                    <h3 class="text-lg line-clamp-1">${item.title}</h3>
                                    <!--       plant price         -->
                                    <div class="flex items-center justify-between mt-2 sm:mt-4 mb-4 sm:mb-6">
                                        <span class="inline-block font-MorabbaLight text-sm">قیمت:</span>
                                        <span class="inline-block font-MorabbaMedium text-base">${item.price}</span>
                                    </div>
                                    <a href="product.html?id=${item.id}"
                                       class="w-full h-10 flex-center text-white bg-forest-green-100 rounded-lg text-sm">مشاهده
                                        بیشتر</a>
                                </div>
                            </div>
                        </div>`)
    })
}
///////////////////////////////// --- select image func --- ////////////////////////////////////
const selectImage = (event) => {
    productImageMiniBox.forEach(item =>{
        item.classList.remove('opacity-100')
        item.classList.add('opacity-60')
    })
    event.target.parentElement.classList.remove('opacity-60')
    event.target.parentElement.classList.add('opacity-100')
    if (event.target.tagName === 'IMG') {
        let getImgSrc = event.target.getAttribute('src')
        productImage.setAttribute('src', getImgSrc)
    }
}
//////////////////////////////////////// --- delete product btn --- ///////////////////////////////////////
const deleteProductHandler = async () => {
    let getCart = await fetch(`https://giyahland-json.onrender.com/carts/${userId}`).then(res => res.json()).catch(err => console.log(err))
    let findProduct = getCart.items.findIndex(item => item.productId === getProductId)

    getCart.items.splice(findProduct, 1)

    await fetch(`https://giyahland-json.onrender.com/carts/${userId}`, {
        method: "PUT",
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(getCart)
    }).then(res => setDetailsPageOfDB()).catch(err => console.log(err))

}
//////////////////////////////////////// --- change add product btn style when add or delete product to basket ---////////////////////////////////////////////
const changBtnStyle = async () => {
    if(userId){
        let getCart = await fetch(`https://giyahland-json.onrender.com/carts/${userId}`).then(res => res.json()).catch(err => console.log(err))

        let newProduct = {
            productId: getProductId,
            count: 1
        }
        getCart.items.push(newProduct)

        await fetch(`https://giyahland-json.onrender.com/carts/${userId}`, {
            method: "PUT",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(getCart)
        }).then(res => {
            if (res.status === 200) {
                setDetailsPageOfDB()
            }
        }).catch(err => console.log(err))
    }else {
        location.href="./sign-in.html"
    }
}
/////////////////////////////// --- increase product btn func --- ////////////////////////////////
const increaseCountHandler = async () => {
    let getCart = await fetch(`https://giyahland-json.onrender.com/carts/${userId}`).then(res => res.json()).catch(err => console.log(err))
    let findProduct = getCart.items.find(item => item.productId === getProductId)

    findProduct.count++

    await fetch(`https://giyahland-json.onrender.com/carts/${userId}`, {
        method: "PUT",
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(getCart)
    }).then(res => {
        if (res.status === 200) {
            setDetailsPageOfDB()
        }
    }).catch(err => console.log(err))
}

///////////////////////////// --- active comment btn to send comment --- /////////////////////////////
const activeCommentBtn = (event) => {
    if (event.target.value.length <= 2) {
        commentBtn.style.background = '#D9D9D9'
        commentBtn.onclick = null
    } else {
        commentBtn.style.background = '#417F56'
        commentBtn.onclick = sendComment
    }
}

///////////////////////////// --- open and close new comment box --- ////////////////////////////////////
const openCommentBox = () => {
    if (userId){
        commentBox.classList.remove('hidden')
        setTimeout(() => {
            commentBox.classList.remove('opacity-0')
            commentBox.classList.remove('invisible')
            commentBox.classList.add('opacity-100')
            commentBox.classList.add('visible')
            commentOverlay.classList.remove('hidden')
        }, 10)
    }else {
        location.href = 'sign-in.html'
    }

}
const closeCommentBox = () => {
    commentBox.classList.remove('opacity-100')
    commentBox.classList.remove('visible')
    commentBox.classList.add('opacity-0')
    commentBox.classList.add('invisible')
    commentOverlay.classList.add('hidden')
    setTimeout(() => {
        commentBox.classList.add('hidden')
    }, 10)
}

///////////////////////////////// --- send comment to db --- /////////////////////////////////////
const sendComment = async () => {
    let now = new Date()
    let getComment = await fetch(`https://giyahland-json.onrender.com/comments`).then(res => res.json()).catch(err => console.log(err))
    let newComment = {
        id: JSON.stringify(getComment.length + 1),
        text: textButtonBox.value,
        productId: getProductId,
        userId: userId,
        userLike: [],
        date : Math.floor(now.getTime()/1000)
    }

    await fetch(`https://giyahland-json.onrender.com/comments`, {
        method: "POST",
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(newComment)
    }).then(res => {
        if (res.status === 201) {
            closeCommentBox()
            textButtonBox.value = ''
            successBox.innerHTML = `<modal-box icon-src="#check" modal-title ="موفق" modal-text="دیدگاه شما با موفقیت ثبت شد:)" modal-color="green"></modal-box>`
            generateCommentBox()
        }
    }).catch(err => console.log(err))
}
////////////////////////////////////////// --- create comment box and time comment handle --- //////////////////////////////////////
const generateCommentBox = async () => {
    let getComment = await fetch(`https://giyahland-json.onrender.com/comments?productId=${getProductId}`).then(res => res.json()).catch(err => console.log(err))

    let getUserInformation = await fetch(`https://giyahland-json.onrender.com/users`).then(res => res.json()).catch(err => console.log(err))

    userId ? textBoxUserName.innerHTML = `${getUserInformation[userId-1].firstname} ${getUserInformation[userId-1].lastname}` : null


    let now = new Date()

    if (getComment.length > 0) {
        commentWrapper.innerHTML = ''
        getComment.forEach(item => {
            commentWrapper.insertAdjacentHTML('beforeend', `<div class="mr-[100px] border-b pb-6">
                    <!--      comment user info        -->
                    <div class="flex items-center justify-between">
                        <!--         image and name           -->
                        <div class="relative w-full flex items-center gap-x-3 lg:gap-x-3 border-b pb-10 pt-8">
                            <img src="../images/profile-img/profile-${getUserInformation[item.userId - 1].avatar}.png" alt="" class="absolute -right-16 w-14 h-14">
                            <span class="block w-full font-YekanBakh-Heavy text-xs lg:text-lg">${getUserInformation[item.userId - 1].firstname} ${getUserInformation[item.userId - 1].lastname}</span>
                        </div>
                        <!--         like and time and shear btn         -->
                        <div class="flex flex-col-reverse md:flex-row items-center md:items-center gap-3 sm:gap-4 shrink-0">
                            <!--       time         -->
                            <span class="inline-block shrink-0">${(()=>{
                                if (Math.floor((Math.floor(now.getTime()/1000) - item.date)/60) <= 1){
                                    return 'لحظاتی پیش'
                                }else if (Math.floor((Math.floor(now.getTime()/1000) - item.date)/60) <= 59){
                                    return `${Math.floor((Math.floor(now.getTime()/1000) - item.date)/60)} دقیقه پیش`
                                }else if(Math.floor((Math.floor(now.getTime()/1000) - item.date)/60/60) <= 24){
                                    return `${Math.floor((Math.floor(now.getTime()/1000) - item.date)/60/60)} ساعت پیش`
                                }else if(Math.floor((Math.floor(now.getTime()/1000) - item.date)/60/60/24) <= 30){
                                    return `${Math.floor((Math.floor(now.getTime()/1000) - item.date)/60/60/24)} روز پیش`
                                } else if(Math.floor((Math.floor(now.getTime()/1000) - item.date)/60/60/24/30) <= 30){
                                    return `${Math.floor((Math.floor(now.getTime()/1000) - item.date)/60/60/24/30)} ماه پیش`
                                }else if(Math.floor((Math.floor(now.getTime()/1000) - item.date)/60/60/24/30/12) <= 12){
                                    return `${Math.floor((Math.floor(now.getTime()/1000) - item.date)/60/60/24/30/12)} سال پیش`
                                }
                            })()}</span>
                            <!--    comment btn     -->
                            <div class="flex items-center gap-x-2">
                                <!--      like btn      -->
                                <div onclick="likeBtnHandler(this , ${item.id})" class="xl:cursor-pointer fill-white ${item.userLike.find(item => item === userId) ? 'like-active' :null}">
                                    <svg class="w-5 h-5">
                                        <use href="#heart"></use>
                                    </svg>
                                </div>
                                <!--      share btn      -->
                                <div onclick="copyProductLink()" class="xl:cursor-pointer">
                                    <svg class="w-5 h-5">
                                        <use href="#share"></use>
                                    </svg>
                                </div>
                                <!--       show more btn     -->
                                <div class="xl:cursor-pointer">
                                    <svg class="w-5 h-5">
                                        <use href="#show-more"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="flex-center gap-x-1 w-[45px] h-[29px] bg-light-gray-200 rounded-md fill-yellow-300 text-yellow-300">
                            <svg class="w-5 h-5">
                                <use href="#star"></use>
                            </svg>
                            <span class="text-spanish-gray-300">5</span>
                        </div>
                        <span class="inline-block mt-2 lg:mt-4 text-xs lg:text-sm">${item.text}</span>
                    </div>
                </div>`)
        })
    } else {
        commentWrapper.innerHTML = '<span class="block font-YekanBakh-Bold text-center text-spanish-gray-200">هیچ دیدگاهی برای این محصول وحود ندارد !</span>'
    }
}

///////////////////////////// --- like handel --- /////////////////////////////
const likeBtnHandler = async (el , commentId)=>{
    if (userId){
        let getComment = await fetch(`https://giyahland-json.onrender.com/comments/${commentId}`).then(res => res.json()).catch(err => console.log(err))

        if (!el.className.includes('like-active')){
            el.classList.add('like-active')

            getComment.userLike.push(userId)
        }else {
            el.classList.remove('like-active')

            let findIndex = getComment.userLike.findIndex(item =>{
                return item === commentId
            })
            getComment.userLike.splice(findIndex , 1)
        }

        await fetch(`https://giyahland-json.onrender.com/comments/${commentId}`, {
            method: "PUT",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(getComment)
        }).then(res => {}).catch(err => console.log(err))
    }else {
        location.href='./sign-in.html'
    }
}
/////////////////////////////////// --- set link of product in user clipboard --- ////////////////////////////////////
const copyProductLink = ()=>{
    window.navigator.clipboard.writeText(location.href)
    successBox.innerHTML = `<modal-box icon-src="#check" modal-title ="موفق" modal-text="لینک محصول با موفقیت کپی شد :)" modal-color="green"></modal-box>`

    setTimeout(()=>{
        successBox.innerHTML = ''
    } , 2002)

    let date = new Date()
    console.log(Math.floor(date.getTime()/1000))
}
//////////////////// --- add func to window object --- //////////////////////
window.likeBtnHandler = likeBtnHandler
window.copyProductLink = copyProductLink
///////////////////////////// --- listeners --- ////////////////////////////
productImageWrapper.addEventListener('click', selectImage)
deleteProduct.addEventListener('click', deleteProductHandler)
increaseCountBtn.addEventListener('click', increaseCountHandler)
btnWrapper.firstElementChild.addEventListener('click', changBtnStyle)
addCommentBtn.addEventListener('click', openCommentBox)
textButtonBox.addEventListener('input', activeCommentBtn)
closeCommentBoxBtn.addEventListener('click', closeCommentBox)
commentOverlay.addEventListener('click', closeCommentBox)
window.addEventListener('load', () => {
    setDetailsPageOfDB()
    generateCommentBox()
})


