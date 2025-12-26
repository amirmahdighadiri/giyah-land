import {PanelComponent} from "../components/panel-component/panel-component.js";
import {Modal} from "../components/modal/modal.js";

window.customElements.define('modal-box', Modal)
window.customElements.define('panel-site', PanelComponent)

let $ = document
const addImageBox = $.querySelector('#add-image-box')
const deleteBtn = $.querySelector('#delete-image')
const changeBtn = $.querySelector('#change-image')
const selectBox = $.querySelector('select')
const messageText = $.querySelector('textarea')
const sentBtn = $.querySelector('#sent-btn')
const modalWrapper = $.querySelector('#success-box')

//////////////////////////////////////////// --- file in input convert to base 64 --- ///////////////////////////////////////////////////////
const convertUserFileTOBase64 = () => {
    const file = changeBtn.files[0];

    if (!file.type.startsWith('image/')) {
        modalWrapper.innerHTML = `<modal-box icon-src="#error" modal-title ="خطا!" modal-text="لطفاً فقط فایل‌های تصویری انتخاب کنید!" modal-color="red"></modal-box>`
        ////////////////////////////////////////// --- empty to modal wrapper//////////////////////////////////////////////////
        setTimeout(() => {
            modalWrapper.innerHTML = ''
        }, 2000)
        return;
    }
    const reader = new FileReader();

    reader.onload = async (event) => {
        modalWrapper.innerHTML = `<modal-box icon-src="#check" modal-title ="موفق" modal-text="تصویر با موفقیت بارگذاری شد :)" modal-color="green"></modal-box>`
        ////////////////////////////////////////// --- empty to modal wrapper//////////////////////////////////////////////////
        setTimeout(() => {
            modalWrapper.innerHTML = ''
        }, 2000)
        ///////////////////////////////////// --- read to user file and convert to base64 --- /////////////////////////////////////
        const base64String = event.target.result;
        //////////////////////////////// --- remove add icon and add user image --- ///////////////////////////////////////
        addImageBox.firstElementChild.classList.remove('flex')
        addImageBox.firstElementChild.classList.add('hidden')
        addImageBox.lastElementChild.classList.remove('hidden')
        //////////////////////////////// --- set property of image --- ///////////////////////////////////////
        addImageBox.lastElementChild.src = base64String
    };

    reader.onerror = () => {
        modalWrapper.innerHTML = `<modal-box icon-src="#error" modal-title ="خطا!" modal-text="خطایی در خواندن فایل رخ داد." modal-color="red"></modal-box>`
        ////////////////////////////////////////// --- empty to modal wrapper//////////////////////////////////////////////////
        setTimeout(() => {
            modalWrapper.innerHTML = ''
        }, 2000)
    }

    reader.readAsDataURL(file);
}
//////////////////////////////////////////// --- delete image of input --- ///////////////////////////////////////////////////////
const deleteUserImage = () => {
    addImageBox.lastElementChild.src = ""
    //////////////////////////////// --- remove add icon and add user image --- ///////////////////////////////////////
    addImageBox.firstElementChild.classList.add('flex')
    addImageBox.firstElementChild.classList.remove('hidden')
    addImageBox.lastElementChild.classList.add('hidden')

}
//////////////////////////////////////////// --- codes of sent to message to db --- ///////////////////////////////////////////////////////
const sentMessageToDb = async () => {
    let userId = $.cookie.substring($.cookie.indexOf('=') + 1)
    let messageContent = messageText.value
    let userImage = addImageBox.lastElementChild.src

    let getQuestion = await fetch(`https://giyahland-json.onrender.com/question`).then(res => res.json()).catch(err => console.log(err))

    let newQuestion = {
        id: JSON.stringify(getQuestion.length + 1),
        imageSrc: userImage,
        text: messageContent,
        answer: "",
        doctorName: selectBox.value,
        doctorImage : selectBox.value === 'دکتر فرهادی' ? 'Dr.Farhadi' : selectBox.value === 'دکتر جم' ? 'Dr.Jam' : selectBox.value === 'دکتر میرخان' ? 'Dr.Mirkhon' : null,
        questionStatus: false,
        userId: userId
    }


    //////////////////////////// --- code of sent message to db --- ///////////////////////////////
    await fetch(`https://giyahland-json.onrender.com/question`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newQuestion)
    }).then(res => {
        if (res.status === 201) {
            modalWrapper.innerHTML = `<modal-box icon-src="#check" modal-title ="موفق" modal-text="پیام شما با موفقیت ارسال شد:)" modal-color="green"></modal-box>`
            ////////////////////////////////////////// --- empty to modal wrapper//////////////////////////////////////////////////
            setTimeout(() => {
                modalWrapper.innerHTML = ''
            }, 2000)
        }
    }).catch(() => {
        modalWrapper.innerHTML = `<modal-box icon-src="#error" modal-title ="نا موفق" modal-text="پیام شما ارسال نشد.لطفا دوباره تلاش کنید!" modal-color="red"></modal-box>`
        ////////////////////////////////////////// --- empty to modal wrapper//////////////////////////////////////////////////
        setTimeout(() => {
            modalWrapper.innerHTML = ''
        }, 2000)
    })
    //////////////////////////// --- to empty inputs --- /////////////////////////////
    messageText.value = ''
    deleteUserImage()
}
///////////////////////////////////// --- listeners --- //////////////////////////////////////////////
changeBtn.addEventListener('change', convertUserFileTOBase64)
deleteBtn.addEventListener('click', deleteUserImage)
sentBtn.addEventListener('click', sentMessageToDb)



