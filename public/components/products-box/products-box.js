const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href=${location.href.includes('index.html') ? './public/styles/app.css' : '../styles/app.css'}>
    <div class="w-[243px] sm:w-72 border border-light-gray-500 rounded-xl p-4">
                <img src="../images/products/1.png" alt="plant" class="w-full" id="product-img">
                <!--       plant info         -->
                <div class="font-MorabbaMedium mt-4 sm:mt-6">
                    <h3 class="text-base sm:text-xl line-clamp-1" id="product-title">گیاه بابا آدم</h3>
                    <!--       plant price         -->
                    <div class="flex items-center justify-between mt-2 sm:mt-4 mb-4 sm:mb-6">
                        <span class="inline-block font-MorabbaLight text-sm">قیمت:</span>
                        <span class="inline-block font-MorabbaMedium text-base sm:text-xl" id="product-price">۱۳/۵۰۰/۰۰۰ تومان</span>
                    </div>
                    <a class="w-full h-10 flex-center text-white bg-forest-green-100 rounded-lg text-sm" id="product-link">مشاهده  بیشتر</a>
                </div>
            </div>
`

class ProductBox extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.productLink = this.shadowRoot.querySelector('#product-link')
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#product-img').setAttribute('src', `${this.getAttribute('product-img')}`);
        this.shadowRoot.querySelector('#product-title').innerHTML = `${this.getAttribute('product-title')}`
        this.shadowRoot.querySelector('#product-price').innerHTML = `${this.getAttribute('product-price')}`
        this.productLink.setAttribute('href' , `${(()=>{
            if (location.href.includes('index.html')){
                return `./pages/product.html?id=${this.getAttribute('product-id')}`
            }else {
                return `product.html?id=${this.getAttribute('product-id')}`
            }
        })()}`)
        this.productLink.setAttribute('title' , `خرید${this.getAttribute('product-title')}`)
    }

    static observedAttributes() {
        return ["product-title" , "product-img" , "product-price" , "product-id"]
    }
}

export {ProductBox}