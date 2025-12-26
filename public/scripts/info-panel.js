import {PanelComponent} from "../components/panel-component/panel-component.js";
import {Modal} from "../components/modal/modal.js";

window.customElements.define('modal-box', Modal)
window.customElements.define('panel-site', PanelComponent)

let $ = document
const userProfile = $.querySelector('#user-profile')
const inputs = $.querySelectorAll('input')
const firstnameInput = $.querySelector('#firstname-input')
const lastnameInput = $.querySelector('#lastname-input')
const phoneNumberInput = $.querySelector('#number-input')
const emailInput = $.querySelector('#email-input')
const addressInput = $.querySelector('#address-input')
const homePhoneInput = $.querySelector('#home-number-input')
const passwordInputs = $.querySelectorAll('.password-status')
const deleteProfileBtn = $.querySelector('#delete-image')
const updateUserInfo = $.querySelector('#update-user-info')
const updatePassword = $.querySelector('#submit-change-password')
const newPasswordInput = $.querySelector('#password-input')
const newPasswordRepeatInput = $.querySelector('#repeat-password-input')
const modalWrapper = $.querySelector('#success-box')

let userId = $.cookie.substring($.cookie.indexOf('=') + 1)
console.log($.cookie)
const toFillInput = async () => {
    let getInformation = await fetch(`https://giyahland-json.onrender.com/users/${userId}`).then(res => res.json()).catch(err => console.log(err))

    firstnameInput.value = getInformation.firstname
    lastnameInput.value = getInformation.lastname
    phoneNumberInput.value = getInformation.phoneNumber
    emailInput.value = getInformation.email
    addressInput.value = getInformation.address
    homePhoneInput.value = getInformation.homePhone

    userProfile.setAttribute('src', `../images/profile-img/profile-${getInformation.avatar}.png`)

    inputs.forEach((input, event) => {
        if (input.value.length > 0) {
            inputFocusHandler(input)
        }
    })
    //////////////////////////////////////////// --- to readonly input --- //////////////////////////////////
    readOnlyInputHandler(homePhoneInput)

}
//////////////////////////////////////// ---focus and handler--- /////////////////////////////////////////////
const inputFocusHandler = (input) => {
    input.parentElement.classList.remove('input-color')
    input.parentElement.classList.add('input-focus-color')
    input.nextElementSibling.style.top = '-16px'
    input.nextElementSibling.style.right = '20px'
    input.nextElementSibling.style.fontSize = '12px'
}

inputs.forEach((item) => {
    item.addEventListener('focus', (event) => {
        inputFocusHandler(event.target)
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

    if (el.parentElement.children[1].getAttribute('type') === 'password') {
        el.parentElement.children[1].setAttribute('type', 'text')
    } else {
        el.parentElement.children[1].setAttribute('type', 'password')
    }
}

const deleteProfileImage = async () => {
    let getInformation = await fetch(`https://giyahland-json.onrender.com/${userId}`).then(res => res.json()).catch(err => console.log(err))
    getInformation.avatar = '00'

    updateDb(getInformation)
}

const updateUserInfoPanel = async () => {
    let getInformation = await fetch(`https://giyahland-json.onrender.com/${userId}`).then(res => res.json()).catch(err => console.log(err))
    let getUserAddress = addressInput.value
    let getUserHomeNumber = homePhoneInput.value

    getUserAddress ? getInformation.address = getUserAddress : getInformation.address = ''
    getUserHomeNumber ? getInformation.homePhone = getUserHomeNumber : getInformation.homePhone = ''

    updateDb(getInformation)

}

///////////////////////////////////////// --- update user Information in db --- ////////////////////////////////////////////
const updateDb = async (userInformation) => {
    await fetch(`https://giyahland-json.onrender.com/${userId}`, {
        method: 'PUT',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(userInformation)
    }).then(res => console.log(res))
        .catch(err => console.log(err))


    modalWrapper.innerHTML = `<modal-box icon-src="#check" modal-title ="موفق" modal-text="تغییرات با موفقیت انجام شد :)" modal-color="green"></modal-box>`

    ///////////// ---- refresh page ----//////////////
    setTimeout(() => {
        location.href = location.href
        modalWrapper.innerHTML = ''
    }, 2000)
}
///////////////////////////////////////// --- to read only input --- ////////////////////////////////////////////
const readOnlyInputHandler = (input) => {
    if (input.value) {
        input.readOnly = true
        input.classList.add('cursor-not-allowed')
    } else {
        input.readOnly = false
    }
}

const changePasswordHandler = async () => {
    let getInformation = await fetch(`https://giyahland-json.onrender.com/${userId}`).then(res => res.json()).catch(err => console.log(err))
    if (newPasswordInput.value.length ===0 || newPasswordRepeatInput.length === 0){
        modalWrapper.innerHTML = `<modal-box icon-src="#error" modal-title ="خطا!" modal-text="فیلد رمز عبور و تکرار ان نباید خالی باشد!" modal-color="red"></modal-box>`
    } else if (newPasswordInput.value !== newPasswordRepeatInput.value){
        modalWrapper.innerHTML = `<modal-box icon-src="#error" modal-title ="خطا!" modal-text="رمز عبور ها با یکدیگر یکسان نیستند . لطفا بررسی کنید." modal-color="red"></modal-box>`
    }

    if (newPasswordInput.value === newPasswordRepeatInput.value){
        getInformation.password = newPasswordInput.value
        updateDb(getInformation)
    }

}
/////////////////////////////////////// ----- listeners -----///////////////////////////////////
deleteProfileBtn.addEventListener('click', deleteProfileImage)
updateUserInfo.addEventListener('click', updateUserInfoPanel)
updatePassword.addEventListener('click', changePasswordHandler)
window.addEventListener('load', () => {
    toFillInput()
})

