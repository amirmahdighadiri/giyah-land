const template = document.createElement('template')
template.innerHTML = `
 <link rel="stylesheet" href=${location.href.includes('index.html') ? './public/styles/app.css' : '../styles/app.css'}>
 <div class="container">
        <!--    footer wrapper    -->   
        <div class="flex flex-col-reverse gap-y-4 md:flex-row items-start justify-between">
            <!--      web site rules      -->
            <div class="w-full md:max-w-[280px] lg:max-w-[494px]">
                <!--       footer title         -->
                <a href=${location.href.includes('index.html') ? './index.html' : '../../index.html'} class="">
                    <h2 class="font-YekanBakh-Bold text-base sm:text-2xl text-forest-green-100 ml-3.5 lg:ml-6">گیاه لند</h2>
                </a>
                <!--       footer description         -->
                <p class="font-YekanBakh text-justify text-spanish-gray-300 mt-3 sm:mt-6">گیاه لند سعی بر این دارد با ارائه خدمات نوین در حوزه فروش گیاهان باعث راحتی
                    شما در خرید انواع گیاه شود.تنوع گیاهان و همچنین ایجاد بستری مناسب برای مشاوره با گیاه پزشک از دیگر
                    مزیت های گیاه لند میباشد.</p>
                <!--       footer services         -->
                <div class="flex items-center justify-between mt-4 sm:mt-10">
                    <!--        site Social media           -->
                    <div class="">
                        <span class="font-YekanBakh-Medium text-spanish-gray-300 text-xs sm:text-xl">تلفن پشتیبانی:<a href="tel:021244" class="">021244</a></span>
                        <!--          app icon              -->
                        <div class="flex items-center gap-x-4 sm:gap-x-6 mt-3 sm:mt-4">
                            <!--           linkedIn icon                 -->
                            <a href="#" class="block w-5 h-5 sm:w-6 sm:h-6"><img src=${location.href.includes('index.html') ? "./public/images/social-icon/linkedIn.png" : "../images/social-icon/linkedIn.png"} alt="linkedIn" class="w-full h-full"></a>
                            <!--              telegram icon              -->
                            <a href="#" class="block w-5 h-5 sm:w-6 sm:h-6"><img src=${location.href.includes('index.html') ? "./public/images/social-icon/telegram.png" : "../images/social-icon/telegram.png"} alt="telegram" class="w-full h-full"></a>
                            <!--               pinteresr icon             -->
                            <a href="#" class="block w-5 h-5 sm:w-6 sm:h-6"><img src=${location.href.includes('index.html') ? "./public/images/social-icon/pinterest.png" : "../images/social-icon/pinterest.png"} alt="pinterest" class="w-full h-full"></a>
                        </div>
                    </div>
                    <!--         symbol           -->
                    <img src=${location.href.includes('index.html') ? "./public/images/symbol.png" : "../images/symbol.png"} alt="symbol" class="">
                </div>
            </div>
            <!--     footer plants list       -->
            <div class="w-full md:w-auto flex items-center gap-x-6 text-spanish-gray-300">
                <div class="w-[120px] xl:w-[184px]">
                    <h6 class="font-MorabbaMedium text-xs sm:text-xl mb-4">آپارتمانی</h6>
                    <ul class="font-MorabbaLight text-sm sm:text-xl space-y-2">
                        <li class=""><a href=${location.href.includes('index.html') ? "./pages/product.html?id=1" : "product.html?id=1"} class="inline-block hover:text-forest-green-100 xl:hover:underline xl:hover:underline-offset-8 transition-all">بابا آدم</a></li>
                        <li class=""><a href=${location.href.includes('index.html') ? "./pages/product.html?id=2" : "product.html?id=2"} class="inline-block hover:text-forest-green-100 xl:hover:underline xl:hover:underline-offset-8 transition-all">یوکا</a></li>
                        <li class=""><a href=${location.href.includes('index.html') ? "./pages/product.html?id=3" : "product.html?id=3"} class="inline-block hover:text-forest-green-100 xl:hover:underline xl:hover:underline-offset-8 transition-all">سانسوریا</a></li>
                    </ul>
                </div>
                <div class="w-[120px] xl:w-[184px]">
                    <h6 class="font-MorabbaMedium text-xs sm:text-xl mb-4">تزئینی</h6>
                    <ul class="font-MorabbaLight text-sm sm:text-xl space-y-2">
                        <li class=""><a href=${location.href.includes('index.html') ? "./pages/product.html?id=10" : "product.html?id=10"} class="inline-block hover:text-forest-green-100 xl:hover:underline xl:hover:underline-offset-8 transition-all">یشم</a></li>
                        <li class=""><a href=${location.href.includes('index.html') ? "./pages/product.html?id=9" : "product.html?id=9"} class="inline-block hover:text-forest-green-100 xl:hover:underline xl:hover:underline-offset-8 transition-all">کراسولا</a></li>
                        <li class=""><a href=${location.href.includes('index.html') ? "./pages/product.html?id=12" : "product.html?id=12"} class="inline-block hover:text-forest-green-100 xl:hover:underline xl:hover:underline-offset-8 transition-all">کراسولا خرفه ای</a></li>
                    </ul>
                </div>
                <div class="w-[120px] xl:w-[184px]">
                    <h6 class="font-MorabbaMedium text-xs sm:text-xl mb-4">کادویی</h6>
                    <ul class="font-MorabbaLight text-sm sm:text-xl space-y-2">
                        <li class=""><a href=${location.href.includes('index.html') ? "./pages/product.html?id=18" : "product.html?id=18"} class="inline-block hover:text-forest-green-100 xl:hover:underline xl:hover:underline-offset-8 transition-all">آنتوریوم</a></li>
                        <li class=""><a href=${location.href.includes('index.html') ? "./pages/product.html?id=19" : "product.html?id=19"} class="inline-block hover:text-forest-green-100 xl:hover:underline xl:hover:underline-offset-8 transition-all">بونسای</a></li>
                        <li class=""><a href=${location.href.includes('index.html') ? "./pages/product.html?id=17" : "product.html?id=17"} class="inline-block hover:text-forest-green-100 xl:hover:underline xl:hover:underline-offset-8 transition-all">بنت قنسول</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`

class Footer extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {Footer}