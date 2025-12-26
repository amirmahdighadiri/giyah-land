import {Header} from "../components/header/header.js";
import {Footer} from "../components/footer/footer.js";

window.customElements.define('header-site', Header)
window.customElements.define('footer-site', Footer)

document.addEventListener('DOMContentLoaded' , ()=>{
    document.querySelector('.page-loader').parentElement.classList.add('hidden')
    document.querySelector('.page-loader').parentElement.classList.remove('flex-center')
    document.body.classList.remove('overflow-hidden')
})