import {Modal} from "../components/modal/modal.js";

window.customElements.define('modal-box', Modal)
let $ = document
const nameInput = $.querySelector('#name-input')
const lastnameInput = $.querySelector('#lastname-input')
const passwordInputs = $.querySelectorAll('.password-status')
const passwordInput = $.querySelector('#password-input')
const numberInput = $.querySelector('#number-input')
const emailInput = $.querySelector('#email-input')
const repeatPasswordInput = $.querySelector('#repeat-password-input')
const formBtn = $.querySelector('#form-btn')
const form = $.querySelector('form')
const inputs = $.querySelectorAll('input')
const successBox = $.querySelector('#success-box')
const successAni = $.querySelector('#success-animate')
//////////////////////////////////////// ---focus and handler--- /////////////////////////////////////////////
inputs.forEach(item => {
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
/////////////////////////////////////// ----- input password handler -----///////////////////////////////////
passwordInputs.forEach(item => {
    item.addEventListener('click', () => {
        passwordHandlers(item)
    })
})

function passwordHandlers(el) {
    el.classList.toggle('password')

    if (el.parentElement.firstElementChild.lastElementChild.getAttribute('type') === 'password') {
        el.parentElement.firstElementChild.lastElementChild.setAttribute('type', 'text')
    } else {
        el.parentElement.firstElementChild.lastElementChild.setAttribute('type', 'password')
    }
}

async function formBtnHandler() {
    formBtn.classList.remove('form-btn')
    formBtn.classList.add('form-btn-active')
    formBtn.innerHTML = '<span class="loader"></span>'
    let getUsers = await fetch(`https://giyahland-json.onrender.com/users`).then(res => res.json()).catch(err => err)
    let userGender = await fetch(`https://api.genderize.io?name=${nameInput.value}`).then(res => res.json()).catch(err => console.log(err))

    let newUser = {
        id: JSON.stringify(getUsers.length + 1),
        firstname: nameInput.value,
        lastname: lastnameInput.value,
        gender: userGender.gender,
        phoneNumber: numberInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        address: "",
        avatar: userGender === 'female' ? "0" : "3",
        homePhone: "",
        admin: false
    }

    let newUserBasket = {
        id: JSON.stringify(getUsers.length + 1),
        items: []
    }
    ///////////// ---- send data to server ----//////////////
    let sendData = await fetch(`https://giyahland-json.onrender.com/users`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newUser)
    }).then(res => console.log(res)).catch(err => console.log(err))
    fetch(`https://giyahland-json.onrender.com/carts`,{
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newUserBasket)
    }).then(res => console.log(res)).catch(err => console.log(err))
    successBox.innerHTML = `<modal-box icon-src="#check" modal-title ="موفق" modal-text="ثبت نام شما با موفقیت انجام شد:)" modal-color="green"></modal-box>`
    ///////////// ---- set cookie ----//////////////
    let now = new Date()
    now.setTime(now.getTime() + 5 * 60 * 1000)
    $.cookie = `UID = ${getUsers.length + 1}; path = /;expires = ${now.toUTCString()}`
    emptyInputsHandlers()
    ///////////// ---- go home page ----//////////////
    setTimeout(() => {
        location.href = '../../index.html'
    }, 2000)
}

/////////////////////////////////// --- to empty inputs --- //////////////////////////////////
function emptyInputsHandlers() {
    inputs.forEach(item => {
        item.value = ''
    })
}

////////////////////////// ---listeners--- ////////////////////////////////
form.addEventListener('submit', event => {
    event.preventDefault()
})
formBtn.addEventListener('click', () => {
    if (passwordInput.value === repeatPasswordInput.value && passwordInput.value.length > 0) {
        formBtnHandler()
    } else {
        successBox.innerHTML = `<modal-box icon-src="#error" modal-title ="نا موفق" modal-text="رمز خود را به درستی وارد کنید!" modal-color="red"></modal-box>`
    }
})

