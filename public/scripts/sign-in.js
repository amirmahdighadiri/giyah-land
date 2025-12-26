import {Modal} from "../components/modal/modal.js";


window.customElements.define('modal-box', Modal)

let $ = document
const form = $.querySelector('form')
const inputs = $.querySelectorAll('input')
const numberInput = $.querySelector('#number-input')
const passwordInput = $.querySelector('#password-input')
const formBtn = $.querySelector('#form-btn')
const successBox = $.querySelector('#success-box')
const passwordStatus = $.querySelector('.password-status')
//////////////////////////////////////// ---focus and handler--- /////////////////////////////////////////////
inputs.forEach((item) => {
    item.addEventListener('focus', (event) => {
        event.target.parentElement.classList.remove('input-color')
        event.target.parentElement.classList.add('input-focus-color')
        event.target.nextElementSibling.style.top = '-16px'
        event.target.nextElementSibling.style.right = '20px'
        event.target.nextElementSibling.style.fontSize = '12px'
    })
    item.addEventListener('blur', (event) => {
        if (!item.value) {
            event.target.parentElement.classList.add('input-color')
            event.target.parentElement.classList.remove('input-focus-color')
            event.target.nextElementSibling.style.top = '12px'
            event.target.nextElementSibling.style.right = '40px'
            event.target.nextElementSibling.style.fontSize = '16px'
        }
    })
})
form.addEventListener('submit', event => {
    event.preventDefault()
})
//////////////////////////////////////// ---request to db and sin-in to account--- /////////////////////////////////////////////
formBtn.addEventListener('click', async () => {
    formBtn.classList.remove('form-btn')
    formBtn.classList.add('form-btn-active')
    formBtn.innerHTML = '<span class="loader"></span>'
    let sendRequestToDb = await fetch('https://giyahland-json.onrender.com/users')
    let getUsers = await sendRequestToDb.json()
    let findUser = null
    for (let user of getUsers) {
       if (numberInput.value === user.phoneNumber){
           findUser = user
       }
    }
    if (findUser.password === passwordInput.value){
        successBox.innerHTML = `<modal-box icon-src="#check" modal-title ="موفق" modal-text="به حساب کاربری خود خوش آمدید:)" modal-color="green"></modal-box>`
        /////////////////////////////////---set cookie for browser of user---//////////////////////////////////////
        let now = new Date()
        now.setTime(now.getTime() + 2 * 365 * 24 * 60 * 60 * 1000)
        $.cookie = `UID = ${findUser.id}; path = /;expires = ${now.toUTCString()}`
        setTimeout(()=>{
            location.href = '../../index.html'
        },2000)
    }else {
        successBox.innerHTML = `<modal-box icon-src="#error" modal-title ="ناموفق" modal-text="رمز یا نام کاربری را به اشتباه وارد کردید!" modal-color="red"></modal-box>`
        ///////////////////////////// ---to empty of inputs---//////////////////////////////////
        emptyInputsHandler()
        setTimeout(()=>{
            formBtn.classList.add('form-btn')
            formBtn.classList.remove('form-btn-active')
            formBtn.innerHTML = 'ورود'
        },2000)
    }
})
///////////////////////////////////////////---show and hidden password input---//////////////////////////////////////////
function passwordStatusHandler(){
    passwordStatus.classList.toggle('password')
    if (passwordInput.getAttribute('type') === 'password'){
        passwordInput.setAttribute('type' , 'text')
    }else {
        passwordInput.setAttribute('type' , 'password')
    }
}

////////////////////////////// --- to empty inputs--- //////////////////////////////////////
function emptyInputsHandler(){
    inputs.forEach(input =>{
        input.value = ''
    })
}

/////////////////////////////////// --- Limitation password input --- /////////////////////////////////
function inputPasteHandler(event){
    event.preventDefault()
}
////////////////////////// ---listeners--- ////////////////////////////////
passwordStatus.addEventListener('click' , passwordStatusHandler)
passwordInput.addEventListener('paste' , inputPasteHandler)

