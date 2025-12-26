const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="../styles/app.css">
<svg class="hidden">
    <symbol id="shopping-cart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5461 13C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.26609 2H1.99609V4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H19.9961V15H7.99609L9.09609 13H16.5461ZM7.15609 6H19.3061L16.5461 11H9.52609L7.15609 6ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM17.9961 18C16.8961 18 16.0061 18.9 16.0061 20C16.0061 21.1 16.8961 22 17.9961 22C19.0961 22 19.9961 21.1 19.9961 20C19.9961 18.9 19.0961 18 17.9961 18Z"
              fill="currentColor"/>
    </symbol>  
    <symbol id="person" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
              fill="currentColor"/>
    </symbol>
    <symbol id="medic" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 15H8V12H10.5V9.5H13.5V12H16V15H13.5V17.5H10.5V15ZM19 8V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V8C5 6.9 5.9 6 7 6H17C18.1 6 19 6.9 19 8ZM17 8H7V19H17V8ZM18 3H6V5H18V3Z"
              fill="currentColor"/>
    </symbol>
    <symbol id="mail" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
              fill="currentColor"/>
    </symbol>
    <symbol id="log-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
              fill="#ED2E2E"/>
    </symbol>
    <symbol id="menu-line" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor"/>
    </symbol>
    <symbol id="close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="currentColor"/>
    </symbol>
</svg>
<section class="wrapper-section">
        <aside class="fixed top-0 z-30 -right-72 md:right-0 bottom-0 flex flex-col justify-between w-72 p-6 border-l border-light-gray-300 bg-white transition-all">
            <div class="">
                <!--    title and close btn      -->
                <div class="flex md:hidden items-center justify-between border-b border-light-gray-300 pb-7 mb-5">
                    <!--          title             -->
                    <span class="font-YekanBakh-Bold text-2xl text-forest-green-100">گیاه لند</span>
                    <!--             close btn               -->
                    <svg class="w-6 h-6 text-forest-green-100" id="mobile-panel-menu-close-btn">
                        <use href="#close"></use>
                    </svg>
                </div>
                <!--     image and phone number       -->
                <div class="flex items-center gap-x-2 mb-6 xl:mb-12">
                    <img src="" alt="user-profile" id="panel-profile" class="w-16 h-16">
                    <div class="font-MorabbaMedium text-sm child:block">
                        <span class="panel-name"></span>
                        <span class="font-YekanBakh-Medium text-spanish-gray-200" id="panel-phone-number"></span>
                    </div>
                </div>
                <!--      panel item wrapper      -->
                <div id="panel-menu-items" class="space-y-2.5 font-YekanBakh-Medium">
                    <div id="info" class="panel-menu-item py-3 pl-8 pr-4 rounded-md">
                        <a href="info-panel.html" class="flex items-center gap-x-3">
                            <svg class="w-6 h-6">
                                <use href="#person"></use>
                            </svg>
                            مشخصات حساب کاربری
                        </a>
                    </div>
                    <div id="medical" class="panel-menu-item py-3 pl-8 pr-4 rounded-md">
                        <a href="medical-panel.html" class="flex items-center gap-x-3">
                            <svg class="w-6 h-6">
                                <use href="#medic"></use>
                            </svg>
                            مشاوره با گیاه پزشک
                        </a>
                    </div>
                    <div id="message" class="panel-menu-item py-3 pl-8 pr-4 rounded-md">
                        <a href="message-panel.html" class="flex items-center gap-x-3">
                            <svg class="w-6 h-6">
                                <use href="#mail"></use>
                            </svg>
                            پیام های دریافتی
                        </a>
                    </div>
                </div>
            </div>
            <!--    log-out account btn    -->
            <button type="button"
                    class="w-full flex items-center gap-x-3 p-3 text-red-salsa-200 bg-red-salsa-100 rounded-md font-YekanBakh-Medium">
                <svg class="w-6 h-6">
                    <use href="#log-out"></use>
                </svg>
                خروج از حساب کاربری
            </button>
        </aside>
        <header class="w-full flex items-center justify-between py-5 px-7 border-b border-light-gray-300 mb-8">
            <!--      menu mobile icon      -->
            <div class="flex md:hidden items-center justify-between p-3 bg-light-gray-300 rounded-xl" id="mobile-panel-menu-btn">
                <svg class="w-5 h-5 text-black">
                    <use href="#menu-line"></use>
                </svg>
            </div>
            <!--      web icon and link to go home page     -->
            <div class="flex items-center">
                <a href="../index.html" class="inline-block md:border-l border-light-gray-300 pl-3">
                    <h2 class="font-YekanBakh-Bold text-2xl text-forest-green-100">گیاه لند</h2>
                </a>
                <span class="hidden md:block font-YekanBakh-Medium">
                    <span class="panel-name inline-block font-MorabbaMedium mr-3 text-sm lg:text-base"></span>
                    <span class="text-xs lg:text-sm">عزیز، به پنل کاربری گیاه لند خوش اومدی🎉</span>
                </span>
            </div>
            <!--      shopping cart icon      -->
            <div class="inline-block relative">
                <a href="cart.html" class="flex-center p-2.5 border border-forest-green-100 rounded-full">
                    <svg class="w-5 h-5 md:w-6 md:h-6 text-forest-green-100">
                        <use href="#shopping-cart"></use>
                    </svg>
                </a>
                <div id="basket-count" class="absolute -top-1 -right-1 w-5 h-5 flex-center bg-forest-green-100 rounded-full text-white font-YekanBakh-Medium text-[10px]">
                    0
                </div>
            </div>
        </header>
    </section>
`

class PanelComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.isMenuStatus = false
    }

    logOutAccount = (userId) => {
        ///////////// ---- set cookie ----//////////////
        let now = new Date()
        document.cookie = `UID = ${userId}; path = /;expires = Thu, 01 Jan 1970 00:00:00 GMT`
        location.href = 'home.html'
    }

    openAndClosePanelMenu = () => {
        this.shadowRoot.querySelector('aside').classList.toggle('-right-72')
        this.shadowRoot.querySelector('aside').classList.toggle('right-0')
        document.querySelector('.overlay').classList.toggle('hidden')
    }

    async connectedCallback() {
        ////////////////////////////////// --- get user id from cookie --- ///////////////////////////////////////
        this.userId = document.cookie.substring(document.cookie.indexOf('=') + 1)
        ////////////////////////////////// --- get location  --- ///////////////////////////////////////
        this.getLocation = location.href
        this.shadowRoot.querySelectorAll('.panel-menu-item').forEach(item => {
            if (this.getLocation.includes(item.id)) {
                item.classList.add('user-panel-item-active')
            }
        })
        ////////////////////////////////// --- get user information  --- ///////////////////////////////////////
        this.getUserInfo = await fetch(`https://giyahland-json.onrender.com/users/${this.userId}`).then(res => res.json()).catch(err => console.log(err))
        /////////////////////////////////// --- update name and phone number and img and count of user basket --- ////////////////////////////////////////
        this.shadowRoot.querySelectorAll('.panel-name').forEach(item => {
            item.innerHTML = `${this.getUserInfo.firstname} ${this.getUserInfo.lastname}`
        })
        this.shadowRoot.querySelector('#panel-phone-number').innerHTML = `${this.getUserInfo.phoneNumber}`
        this.shadowRoot.querySelector('#panel-profile').setAttribute('src', `../images/profile-img/profile-${this.getUserInfo.avatar}.png`)
        fetch(`https://giyahland-json.onrender.com/carts/${this.userId}`).then(res => res.json())
            .then(data => {
                this.shadowRoot.querySelector('#basket-count').innerHTML = `${data.items.length}`
            })
            .catch(err => console.log(err))
        ////////////////////////////////// --- listeners --- ///////////////////////////////////////
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.logOutAccount(this.userId)
        })
        this.shadowRoot.querySelector('#mobile-panel-menu-btn').addEventListener('click', this.openAndClosePanelMenu)
        this.shadowRoot.querySelector('#mobile-panel-menu-close-btn').addEventListener('click', this.openAndClosePanelMenu)
        document.querySelector('.overlay').addEventListener('click' , this.openAndClosePanelMenu)
    }
}

export {PanelComponent}