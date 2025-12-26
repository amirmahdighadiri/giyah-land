const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="../styles/app.css">
<svg class="hidden">
<symbol id="error" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</symbol>
<symbol id="check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z"
              fill="currentColor"/>
    </symbol>
</svg>
      <div class="absolute -right-[322px] top-3 transition-all" id="modal-box" dir="rtl">
        <div class="w-[322px] h-[82px] relative flex items-center gap-x-3 overflow-hidden bg-[#F5F5F5] rounded-lg p-7 ">
            <svg class="w-8 h-8" id="modal-icon">
                 <use></use>
            </svg>
            <div class="child:block">
                <span class="font-YekanBakh-Bold text-base" id="modal-title"></span>
                <span class="font-YekanBakh text-xs" id="modal-text"></span>
            </div>
            <div class="w-full h-0.5 absolute bottom-0 right-0" id="box-animate"></div>
        </div>
    </div>
`

class Modal extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.modalBox = this.shadowRoot.querySelector('#modal-box')
        this.boxAnimation = this.shadowRoot.querySelector('#box-animate')
        this.getColor = null
        this.moadlWrapper = document.querySelector('#success-box')
    }
    connectedCallback(){
        this.shadowRoot.querySelector('#modal-icon').firstElementChild.setAttribute('href' , `${this.getAttribute(`icon-src`)}`)
        this.shadowRoot.querySelector('#modal-title').innerHTML = `${this.getAttribute('modal-title')}`
        this.shadowRoot.querySelector('#modal-text').innerHTML = `${this.getAttribute('modal-text')}`

        this.getColor = this.getAttribute('modal-color')
        if (this.getColor === 'red'){
            this.shadowRoot.querySelector('#modal-icon').classList.add('text-red-salsa-200')
            this.boxAnimation.className = 'w-full h-0.5 absolute bottom-0 right-0 bg-red-salsa-200'
        }else {
            this.shadowRoot.querySelector('#modal-icon').classList.add('text-forest-green-100')
            this.boxAnimation.className = 'w-full h-0.5 absolute bottom-0 right-0 bg-forest-green-100'
        }
        setTimeout( ()=>{
            this.modalBox.classList.remove('-right-[322px]')
            this.modalBox.classList.add('right-3')
            this.moadlWrapper.classList.remove('-right-[322px]')
            this.moadlWrapper.classList.add('right-3')
            this.boxAnimation.classList.add('animate-progress_ani')
        },100)

        setTimeout(()=>{
            this.modalBox.classList.add('-right-[322px]')
            this.modalBox.classList.remove('right-3')
            this.moadlWrapper.classList.add('-right-[322px]')
            this.moadlWrapper.classList.remove('right-3')
            this.boxAnimation.classList.remove('animate-progress_ani')
            this.boxAnimation.addEventListener('animationend', ()=>{
                this.boxAnimation.classList.remove('animate-progress_ani')
            })
        },2000)
    }

    static observedAttributes() {
        return ["icon-src", "modal-text", "modal-title" , "modal-color"]
    }
}

export {Modal}