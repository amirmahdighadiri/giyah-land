const template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" type="text/css" href="../styles/app.css">
<svg class="hidden">
    <symbol id="arrow-left-circle-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <g clip-path="url(#clip0_9_2121)">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-7.25a.75.75 0 000-1.5H8.66l2.1-1.95a.75.75 0 10-1.02-1.1l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 001.02-1.1l-2.1-1.95h4.59z" clip-rule="evenodd"></path>
        </g>
        <defs>
            <clipPath id="clip0_9_2121">
                <path d="M0 0h20v20H0z"></path>
            </clipPath>
        </defs>
    </symbol>
</svg>
<div class="w-full bg-light-gray-200 rounded-xl overflow-hidden">
            <!--    image of article    -->
            <a href="#" class="">
                <img src="" alt="" class="w-full h-[180px] object-cover rounded-xl" id="article-image">
            </a>
            <!--    description of article    -->
            <div class="p-4">
                <h3 class="h-14 font-YekanBakh-Bold text-xl line-clamp-2 mb-3">
                    <a href="#" id="article-title">10 گیاه مناسب برای تصفیه هوای خانه</a>
                </h3>
                <p class="text-sm line-clamp-3 text-spanish-gray-200 text-justify font-YekanBakh" id="article-description">
                    برخی از گیاهان توانایی تصفیه هوای خانه از سموم و آلاینده‌ها را دارند. این گیاهان نه‌تنها هوای تازه و سالمی ایجاد می‌کنند، بلکه ظاهر زیبایی نیز به محیط شما می‌بخشند. در این مقاله با ۱۰ گیاه برتر تصفیه‌کننده هوا آشنا می‌شوید که برای هر خانه‌ای مناسب هستند.
                </p>
            </div>
            <!--     wrapper of author    -->
            <div class="flex items-center justify-between text-spanish-gray-400 pb-4 px-5 font-YekanBakh-Bold">
                <span id="article-author">امیرمهدی قدیری</span>
                <span id="article-date">1402/10/23</span>
            </div>
            <!--    btn of article to see and read article    -->
            <div class="flex-center pb-5 px-5 border-t">
                <a href="#" class="flex items-start gap-1 font-YekanBakh-Bold text-spanish-gray-200 hover:text-forest-green-100 transition-all mt-4">
                    مطالعه مقاله
                    <svg class="w-5 h-5">
                        <use href="#arrow-left-circle-mini"></use>
                    </svg>
                </a>
            </div>
        </div>
`

class SecondArticleBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#article-image').setAttribute('src' , `../images/herbal-medicine-image/${this.getAttribute('article-img')}`)
        this.shadowRoot.querySelector('#article-title').innerHTML = `${this.getAttribute('article-title')}`
        this.shadowRoot.querySelector('#article-date').innerHTML = `${this.getAttribute('article-date')}`
        this.shadowRoot.querySelector('#article-author').innerHTML = `${this.getAttribute('article-author')}`
        this.shadowRoot.querySelector('#article-description').innerHTML = `${this.getAttribute('article-description')}`
    }

    static observedAttributes() {
        return ["article-title" , "article-img" , "article-date" , "product-id" , "article-author" , "article-description"]
    }
}

export {SecondArticleBox}