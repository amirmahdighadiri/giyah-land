import {PanelComponent} from "../components/panel-component/panel-component.js";
import {Modal} from "../components/modal/modal.js";

window.customElements.define('modal-box', Modal)
window.customElements.define('panel-site', PanelComponent)

let $ = document
const messageWrapper = $.querySelector('#message-wrapper')
const main = $.querySelector('main')


let userId = document.cookie.substring(document.cookie.indexOf('=') + 1)
/////////////////////////////////// --- handle to open and close messagebox & read or not reade message handle --- ///////////////////////////////////////
const readMessage = async (el, status) => {
    if (!status) {
        const getUserMessage = await fetch(`https://giyahland-json.onrender.com/question/${userId}`).then(res => res.json()).catch(err => console.log(err))
        getUserMessage.questionStatus = !getUserMessage.questionStatus
        await fetch(`https://giyahland-json.onrender.com/question/${userId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(getUserMessage)
        }).then(() => {
            el.firstElementChild.firstElementChild.lastElementChild.lastElementChild.innerHTML = 'پیام خوانده شده است'
        }).catch(err => console.log(err))
    }
    el.classList.toggle('h-[84px]')
    el.classList.toggle('md:h-[110px]')
    el.firstElementChild.lastElementChild.children[0].classList.toggle('rotate-90')
}

window.readMessage = readMessage
/////////////////////////////////// --- create messagebox --- ///////////////////////////////////////
const createBox = (getUserMessage) => {
    messageWrapper.insertAdjacentHTML('beforeend', `<div class="h-[84px] md:h-[110px] flex flex-col  border border-light-gray-300 rounded-2xl p-3 md:p-6 overflow-hidden transition-all" onclick="readMessage(this , ${getUserMessage.questionStatus})">
                <!--       wrapper        -->
                <div class="flex items-center justify-between">
                    <!--        doctor image and status        -->
                    <div class="flex items-center gap-x-2.5">
                        <img id="doctor-img" src="../images/profile-img/${getUserMessage.doctorImage}.png" alt="doctor 1" class="w-12 h-12 md:w-[60px] md:h-[60px]">
                        <div class="flex flex-col gap-y-2.5">
                            <span id="doctor-name" class="font-MorabbaMedium">${getUserMessage.doctorName}</span>
                            <span id="message-status" class="font-YekanBakh-Medium text-spanish-gray-200">${getUserMessage.questionStatus ? 'پیام خوانده شده است' : '۱ پیام خوانده نشده'}</span>
                        </div>
                    </div>
                    <div class="">
                        <svg class="w-6 h-6 rotate-90 text-spanish-gray-100 transition-all">
                            <use href="#arrow-down"></use>
                        </svg>
                    </div>
                </div>
                <p class="font-YekanBakh-Medium leading-9 text-spanish-gray-200 mt-4 text-justify">${getUserMessage.answer}</p>
            </div>`)
}
/////////////////////////////////// --- error func to empty box --- ///////////////////////////////////////
const errorHandle = ()=>{
    main.innerHTML = `<div class="flex flex-col items-center -mt-2">
                <img src="../images/error.png" alt="box" class="w-[166px] h-[160px] sm:w-auto sm:h-auto object-cover">
                <span class="font-MorabbaMedium text-base sm:text-xl mb-2">هیچ پیامی وجود ندارد!</span>
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
/////////////////////////////////// --- func to create box and review to empty or not empty messagebox --- ///////////////////////////////////////
const addMessage = async () => {
    let isMessageBoxStatus = false
    /////////////////////////////////// --- when not empty --- ///////////////////////////////////////
    const getUserMessage = await fetch(`https://giyahland-json.onrender.com/question?userId=${userId}`).then(res => res.json()).catch(err => console.log(err))
    if (getUserMessage.length !== 0) {
        await getUserMessage.forEach(item => {
            if (item.answer !== '') {
                createBox(item)
                isMessageBoxStatus = true
            }
        })
    }
    /////////////////////////////////// --- when not message and empty --- ///////////////////////////////////////
    else {
        errorHandle()
    }
    /////////////////////////////////// --- when not answer from doctor --- ///////////////////////////////////////
    if (!isMessageBoxStatus){
        errorHandle()
    }
}

/////////////////////////////////// --- listeners --- ///////////////////////////////////////
window.addEventListener('load', addMessage)