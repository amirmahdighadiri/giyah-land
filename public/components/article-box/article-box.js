const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href=${location.href.includes('index.html') ? './public/styles/app.css' : '../styles/app.css'}>
<svg class="hidden">
<symbol id="arrow-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
    </symbol>
</svg>
<div class="relative w-[216px] sm:w-72 h-60 rounded-lg overflow-hidden">
                <img alt="" class="absolute z-0 w-full h-full object-cover" id="article-img">
                <div class="absolute inset-0 z-10 artilc-gradient"></div>
                <div class="absolute bottom-7 right-2.5 sm:right-5 z-20">
                    <h5 class="font-MorabbaMedium text-base sm:text-xl text-white mb-4" id="article-title">گیاه بونسای</h5>
                    <a href="#" class="w-[178px] sm:w-48 h-10 sm:h-12 flex-center gap-x-2 font-MorabbaLight text-sm sm:text-lg border border-white rounded-xl text-white" id="article-link">
               
                    </a>
                </div>
            </div>
`

class ArticleBox extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#article-img').setAttribute('src' , `${this.getAttribute('article-img')}`)
        this.shadowRoot.querySelector('#article-title').innerHTML = `${this.getAttribute('article-title')}`
        this.shadowRoot.querySelector('#article-link').innerHTML = `
             خرید ${this.getAttribute('article-title')}
            <svg class="w-6 h-6">
                <use href="#arrow-left"></use>
            </svg>
        `
        this.shadowRoot.querySelector('#article-link').setAttribute('href' , `./pages/product.html?id=${this.getAttribute('article-id')}`)
        this.shadowRoot.querySelector('#article-link').setAttribute('title' , `خرید${this.getAttribute('article-title')}`)
    }
    static observedAttributes() {
        return ["article-img" , "article-title" , "article-id"]
    }
}

export {ArticleBox}