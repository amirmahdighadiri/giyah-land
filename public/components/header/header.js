const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href=${location.href.includes('index.html') ? './public/styles/app.css' : '../styles/app.css'}>
<svg class="hidden">
    <symbol id="search" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
              fill="currentColor"/>
    </symbol>
    <symbol id="shopping-cart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5461 13C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.26609 2H1.99609V4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H19.9961V15H7.99609L9.09609 13H16.5461ZM7.15609 6H19.3061L16.5461 11H9.52609L7.15609 6ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM17.9961 18C16.8961 18 16.0061 18.9 16.0061 20C16.0061 21.1 16.8961 22 17.9961 22C19.0961 22 19.9961 21.1 19.9961 20C19.9961 18.9 19.0961 18 17.9961 18Z"
              fill="currentColor"/>
    </symbol>
    <symbol id="login" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z"
              fill="currentColor"/>
    </symbol>
    <symbol id="menu-line" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor"/>
    </symbol>
    <symbol id="close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="currentColor"/>
    </symbol>
    <symbol id="arrow-down" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 8.29492L12 12.8749L16.59 8.29492L18 9.70492L12 15.7049L6 9.70492L7.41 8.29492Z" fill="currentColor"/>
    </symbol>
    <symbol id="hospital" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 22H22" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z" stroke="currentColor" stroke-width="1.5"
              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.06 15H9.92998C9.41998 15 8.98999 15.42 8.98999 15.94V22H14.99V15.94C15 15.42 14.58 15 14.06 15Z"
              stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M12 6V11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M9.5 8.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round"/>
    </symbol>
    <symbol id="home" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="document" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M7 13H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 17H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="call" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
              stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5" stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 9C22 5.13 18.87 2 15 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
    </symbol>
    <symbol id="information" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 4H16.5C17.12 4 17.67 4.02 18.16 4.09C20.79 4.38 21.5 5.62 21.5 9V15C21.5 18.38 20.79 19.62 18.16 19.91C17.67 19.98 17.12 20 16.5 20H7.5C6.88 20 6.33 19.98 5.84 19.91C3.21 19.62 2.5 18.38 2.5 15V9C2.5 5.62 3.21 4.38 5.84 4.09C6.33 4.02 6.88 4 7.5 4Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.5 10H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 15.5H7.02H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.0946 10H10.1036" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.0946 10H7.10359" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="profile" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </symbol>
    <symbol id="person" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z" fill="currentColor"/>
</symbol>
    <symbol id="medic" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 15H8V12H10.5V9.5H13.5V12H16V15H13.5V17.5H10.5V15ZM19 8V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V8C5 6.9 5.9 6 7 6H17C18.1 6 19 6.9 19 8ZM17 8H7V19H17V8ZM18 3H6V5H18V3Z" fill="currentColor"/>
</symbol>
    <symbol id="mail" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor"/>
</symbol>
    <symbol id="log-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" fill="#ED2E2E"/>
</symbol>
</svg>
<div class="container">
        <!--   desktop header     -->
        <nav class="hidden md:flex items-center justify-between py-8 border-b border-light-gray-500 font-YekanBakh">
            <!--      title & menu      -->
            <div class="flex items-center">
                <!--        title and link        -->
                <a href=${location.href.includes('index.html') ? './index.html' : '../../index.html'} class="">
                    <h2 class="font-YekanBakh-Bold text-2xl text-forest-green-100 ml-3.5 lg:ml-6">گیاه لند</h2>
                </a>
                <!--       menu iten      -->
                <ul class="flex items-center gap-x-2.5 lg:gap-x-8 font-YekanBakh-Medium">
                    <li class=""><a href=${location.href.includes('index.html') ? './index.html' : '../../index.html'} class="text-sm md:text-lg hover:text-forest-green-100 transition-all">صفحه
                        اصلی</a>
                    </li>
                    <li class=""><a href=${location.href.includes('index.html') ? './public/pages/article-page.html?s=normal' : './article-page.html?s=normal'} class="text-sm md:text-lg hover:text-forest-green-100 transition-all"> مقالات
                        </a>
                    </li>
                    <li class=""><a href=${location.href.includes('index.html') ? './public/pages/products-page.html?s=گیاه' : './products-page.html?s=گیاه'} class="text-sm md:text-lg hover:text-forest-green-100 transition-all">محصولات</a></li>
                    <li class=""><a href=${location.href.includes('index.html') ? './public/pages/contact-us.html' : './contact-us.html'} class="text-sm md:text-lg hover:text-forest-green-100 transition-all">تماس
                        با ما</a>
                    </li>
                    <li class=""><a href=${location.href.includes('index.html') ? './public/pages/about-page.html' : './about-page.html'} class="text-sm md:text-lg hover:text-forest-green-100 transition-all">درباره
                        ما</a>
                    </li>
                </ul>
            </div>
            <!--     header btn       -->
            <div class="relative flex items-center gap-x-4">
                <!--       search btn         -->
                <div id="search-box-wrapper" class="relative">
                    <a href="#" class="w-[50px] h-[50px] flex items-center justify-center p-3 border border-forest-green-100 rounded-xl">
                        <svg class="w-6 h-6 text-forest-green-100">
                            <use href="#search"></use>
                        </svg>
                    </a>
                    <div class="hidden w-[224px] absolute z-10 -right-[90px] items-center justify-between p-3 border border-forest-green-100 rounded-xl bg-white mt-4">
                        <input type="text" class="w-full border-0 outline-0 font-YekanBakh-Medium" id="search-box" placeholder="جستجوی محصول ...">
                        <svg id="search-btn" class="w-6 h-6 text-forest-green-100 cursor-pointer">
                                <use href="#search"></use>
                            </svg>
                    </div>
                </div>
                <!--       shopping btn         -->
                <a href=${location.href.includes('index.html') ? './public/pages/cart.html' : './cart.html'} class="relative flex-center p-3 border border-forest-green-100 rounded-xl">
                    <svg class="w-5 h-5 md:w-6 md:h-6 text-forest-green-100">
                        <use href="#shopping-cart"></use>
                    </svg>
                    <span class="absolute -top-2 -right-1 w-5 h-5 flex-center bg-forest-green-100 rounded-full text-white font-YekanBakh-Medium text-[10px]" id="basket-count">0</span>
                </a>
                <!--       login btn         -->
                <a href="" class="relative z-10 flex items-center gap-x-2 px-4 py-3 border border-forest-green-100 rounded-xl text-lg text-forest-green-100" id="user-profile">
                    
                </a>
                <!--        profile menu        -->
                <div id="profile-desktop-menu" class="hidden w-[257px] absolute left-0 top-16 z-10 border border-light-gray-500 rounded-md p-4 bg-white">
                                    <div id="panel-menu-items" class="space-y-2.5 font-YekanBakh-Medium">
                                        <div id="info" class="panel-menu-item py-3 pl-8 pr-4 rounded-md hover:bg-[#F3FDFA] hover:text-forest-green-100 transition-all">
                                            <a href=${location.href.includes('index.html') ? './public/pages/info-panel.html' : "./info-panel.html"} class="flex items-center gap-x-3">
                                                <svg class="w-6 h-6">
                                                    <use href="#person"></use>
                                                </svg>
                                                مشخصات حساب کاربری
                                            </a>
                                        </div>
                                        <div id="medical" class="panel-menu-item py-3 pl-8 pr-4 rounded-md hover:bg-[#F3FDFA] hover:text-forest-green-100 transition-all">
                                            <a href=${location.href.includes('index.html') ? './public/pages/medical-panel.html' : "./medical-panel.html"} class="flex items-center gap-x-3">
                                                <svg class="w-6 h-6">
                                                    <use href="#medic"></use>
                                                </svg>
                                                مشاوره با گیاه پزشک
                                            </a>
                                        </div>
                                        <div id="message" class="panel-menu-item py-3 pl-8 pr-4 rounded-md hover:bg-[#F3FDFA] hover:text-forest-green-100 transition-all">
                                            <a href=${location.href.includes('index.html') ? './public/pages/message-panel.html' : "./message-panel.html"} class="flex items-center gap-x-3">
                                                <svg class="w-6 h-6">
                                                    <use href="#mail"></use>
                                                </svg>
                                                پیام های دریافتی
                                            </a>
                                        </div>
                                    </div>
                                    <button type="button" id="desktop-log-out-btn" class="w-full flex items-center gap-x-3 p-3 text-red-salsa-200 bg-red-salsa-100 rounded-md font-YekanBakh-Medium mt-3">
                                        <svg class="w-6 h-6">
                                            <use href="#log-out"></use>
                                        </svg>
                                        خروج از حساب کاربری
                                    </button>
                                </div>
            </div>

        </nav>
        <!--   mobile header     -->
        <div class="block md:hidden py-3 border-b border-light-gray-500 font-YekanBakh">
            <!--       menu wrapper         -->
            <div class="flex items-center justify-between mb-3">
                <!--        menu        -->
                <div class="flex items-center gap-x-3">
                    <!--        menu btn        -->
                    <div class="flex-center p-3 bg-light-gray-300 rounded-xl" id="mobile-menu-btn">
                        <svg class="w-5 h-5 text-black">
                            <use href="#menu-line"></use>
                        </svg>
                    </div>
                    <!--        title            -->
                    <a href=${location.href.includes('index.html') ? 'index.html' : '../../index.html'}>
                        <h2 class="font-YekanBakh-Bold text-lg text-forest-green-100">گیاه لند</h2>
                    </a>
                    <!--         menu box           -->
                    <div class="fixed top-0 -right-64 bottom-0 z-30 w-64 min-h-screen overflow-y-auto bg-white p-4 transition-all" id="mobile-menu">
                        <!--          title & close menu              -->
                        <div class="flex items-center justify-between border-b border-light-gray-500 pb-2">
                            <!--          title             -->
                            <span class="font-YekanBakh-Bold text-2xl text-forest-green-100">گیاه لند</span>
                            <!--             close btn               -->
                            <svg class="w-6 h-6 text-forest-green-100" id="mobile-menu-close-btn">
                                <use href="#close"></use>
                            </svg>
                        </div>
                        <!--          menu items             -->
                        <ul class="mt-3 space-y-6">
                            <li class="mobile-menu-item">
                                <!--         name and logo menu item          -->
                                <div class="h-full flex items-center justify-between">
                                    <a href=${location.href.includes('index.html') ? 'index.html' : '../index.html'} class="flex items-center gap-x-2">
                                        <svg class="w-5 h-5">
                                            <use href="#home"></use>
                                        </svg>
                                        <span class="">صفحه اصلی</span>
                                    </a>
                                </div>
                            </li>
                            <li class="mobile-menu-item">
                                <!--         name and logo menu item         -->
                                <div class="h-full flex items-center justify-between">
                                    <a href=${location.href.includes('index.html') ? './pages/article-page.html?s=normal' : '../pages/article-page.html?s=normal'} class="flex items-center gap-x-2">
                                        <svg class="w-5 h-5">
                                            <use href="#hospital"></use>
                                        </svg>
                                        <span class="">مقالات</span>
                                    </a>
                                </div>
                               
                            </li>
                            <li class="mobile-menu-item"> 
                                <!--         name and logo menu item        -->
                                <div class="h-full flex items-center justify-between">
                                    <a href=${location.href.includes('index.html') ? './pages/products-page.html?s=گیاه' : 'products-page.html?s=گیاه'} class="flex items-center gap-x-2">
                                        <svg class="w-5 h-5">
                                            <use href="#document"></use>
                                        </svg>
                                        <span class="">محصولات</span>
                                    </a>
                                </div>
                            </li>
                            <li class="mobile-menu-item">
                                <!--         name and logo menu item         -->
                                <div class="h-full flex items-center justify-between">
                                    <a href=${location.href.includes('index.html') ? './pages/contact-us.html' : 'contact-us.html'} class="flex items-center gap-x-2">
                                        <svg class="w-5 h-5">
                                            <use href="#call"></use>
                                        </svg>
                                        <span class="">تماس با ما</span>
                                    </a>
                                </div>
                            </li>
                            <li class="mobile-menu-item">
                                <!--         name and logo menu item          -->
                                <div class="h-full flex items-center justify-between">
                                    <a href=${location.href.includes('index.html') ? './pages/about-page.html' : 'about-page.html'} class="flex items-center gap-x-2">
                                        <svg class="w-5 h-5">
                                            <use href="#information"></use>
                                        </svg>
                                        <span class="">درباره ما</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--       header btn       -->
                <div class="relative flex items-center gap-x-2">
                    <!--       shopping btn         -->
                    <a href=${location.href.includes('index.html') ? './pages/cart.html' : 'cart.html'} class="relative flex-center p-3 border border-forest-green-100 rounded-xl">
                        <svg class="w-5 h-5 text-forest-green-100">
                            <use href="#shopping-cart"></use>
                        </svg>
                        <span class="absolute -top-2 -right-2 w-5 h-5 flex-center bg-forest-green-100 rounded-full text-white font-YekanBakh-Medium text-[10px]" id="mobile-basket-count">0</span>
                    </a>
                    <!--       login btn         -->
                    <a href="#" class="flex items-center gap-x-2 p-3 border border-forest-green-100 rounded-xl text-lg text-forest-green-100" id="mobile-user-profile">
                       
                    </a>
                    <!--        profile menu        -->
                     <div id="profile-mobile-menu" class="hidden w-[257px] absolute left-0 top-16 z-10 border border-light-gray-500 rounded-md p-4 bg-white">
                        <div id="panel-menu-items" class="space-y-2.5 font-YekanBakh-Medium">
                            <div id="info" class="panel-menu-item py-3 pl-8 pr-4 rounded-md hover:bg-[#F3FDFA] hover:text-forest-green-100 transition-all">
                                <a href=${location.href.includes('index.html') ? './pages/info-panel.html' : "info-panel.html"} class="flex items-center gap-x-3">
                                    <svg class="w-6 h-6">
                                        <use href="#person"></use>
                                    </svg>
                                    مشخصات حساب کاربری
                                </a>
                            </div>
                            <div id="medical" class="panel-menu-item py-3 pl-8 pr-4 rounded-md hover:bg-[#F3FDFA] hover:text-forest-green-100 transition-all">
                                <a href=${location.href.includes('index.html') ? './pages/medical-panel.html' : "medical-panel.html"} class="flex items-center gap-x-3">
                                    <svg class="w-6 h-6">
                                        <use href="#medic"></use>
                                    </svg>
                                    مشاوره با گیاه پزشک
                                </a>
                            </div>
                            <div id="message" class="panel-menu-item py-3 pl-8 pr-4 rounded-md hover:bg-[#F3FDFA] hover:text-forest-green-100 transition-all">
                                <a href=${location.href.includes('index.html') ? './pages/message-panel.html' : "message-panel.html"} class="flex items-center gap-x-3">
                                    <svg class="w-6 h-6">
                                        <use href="#mail"></use>
                                    </svg>
                                    پیام های دریافتی
                                </a>
                            </div>
                        </div>
                        <button type="button" id="mobile-log-out-btn" class="w-full flex items-center gap-x-3 p-3 text-red-salsa-200 bg-red-salsa-100 rounded-md font-YekanBakh-Medium mt-3">
                                        <svg class="w-6 h-6">
                                            <use href="#log-out"></use>
                                        </svg>
                                        خروج از حساب کاربری
                                    </button>
                     </div>
                </div>
            </div>
            <!--     search box       -->
            <div class="search-input flex items-center gap-x-2 w-full h-10 bg-light-gray-300 rounded-lg px-3">
                <svg class="w-6 h-6 text-spanish-gray-200">
                    <use href="#search"></use>
                </svg>
                <input type="text" class="bg-transparent w-full outline-0 border-0" id="mobile-search-box" placeholder="جستجو گیاه">
            </div>
        </div>
    </div>
`

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.overLay = document.querySelector('.overlay')
        this.mobileMenuBtn = this.shadowRoot.querySelector('#mobile-menu-btn')
        this.mobileMenuCloseBtn = this.shadowRoot.querySelector('#mobile-menu-close-btn')
        this.mobileMenu = this.shadowRoot.querySelector('#mobile-menu')
        this.userProfile = this.shadowRoot.querySelector('#user-profile')
        this.mobileUserProfile = this.shadowRoot.querySelector('#mobile-user-profile')
        this.profileDesktopMenu = this.shadowRoot.querySelector('#profile-desktop-menu')
        this.profileMobileMenu = this.shadowRoot.querySelector('#profile-mobile-menu')
        this.blurOverlay = document.querySelector('.blur-overlay')
        this.blurMobileOverlay = document.querySelector('.blur-mobile-overlay')
        this.searchBox = this.shadowRoot.querySelector('#search-box')
        this.searchBtn = this.shadowRoot.querySelector('#search-btn')
        this.searchBoxWrapper= this.shadowRoot.querySelector('#search-box-wrapper')
        this.productCount = 0
    }

    mobileMenuHandler = () => {
        this.mobileMenu.classList.toggle('-right-64')
        this.mobileMenu.classList.toggle('right-0')
        this.overLay.classList.toggle('hidden')
    }
    /////////////////////////////////// --- account log-out handler --- ////////////////////////////////////////////
    logOutAccount = () => {
        this.userId = document.cookie.substring(document.cookie.indexOf('=') + 1)
        ///////////// ---- set cookie ----//////////////
        let now = new Date()
        document.cookie = `UID = ${this.userId}; path = /;expires = Thu, 01 Jan 1970 00:00:00 GMT`
        location.href = `${location.href.includes('index.html') ? 'index.html' : '../../index.html'}`
    }
    ///////////////////////////////////// --- desktop blur and opne & close handler --- //////////////////////////////////////////
    closeProfileDesktopMenuHandler = () => {
        this.profileDesktopMenu.classList.toggle('hidden')
        this.profileDesktopMenu.classList.toggle('block')
        this.blurOverlay.classList.toggle('hidden')
    }
    ///////////////////////////////////// --- mobile blur and opne & close handler --- //////////////////////////////////////////
    closeProfileMobileMenuHandler = () => {
        this.profileMobileMenu.classList.toggle('hidden')
        this.profileMobileMenu.classList.toggle('block')
        this.blurMobileOverlay.classList.toggle('hidden')
    }
    ////////////////////////////// --- add bliur page when opne search box --- /////////////////////////////
    openSearchBox = ()=>{
        this.searchBoxWrapper.lastElementChild.classList.remove('hidden')
        this.searchBoxWrapper.lastElementChild.classList.add('flex')
        document.querySelector('.blur-search-overlay').classList.remove('hidden')
        this.userProfile.classList.remove('z-10')
    }
    ////////////////////////////// --- remove bliur page when close search box --- /////////////////////////////
    closeSearchBox =()=>{
        this.searchBoxWrapper.lastElementChild.classList.add('hidden')
        this.searchBoxWrapper.lastElementChild.classList.remove('flex')
        document.querySelector('.blur-search-overlay').classList.add('hidden')
        this.userProfile.classList.add('z-10')
    }

    connectedCallback() {
        this.mobileMenuBtn.addEventListener('click', this.mobileMenuHandler)
        this.mobileMenuCloseBtn.addEventListener('click', this.mobileMenuHandler)
        this.overLay.addEventListener('click', () => {
            this.mobileMenu.classList.add('-right-64')
            this.mobileMenu.classList.remove('right-0')
            this.overLay.classList.add('hidden')
        })
        if (document.cookie.includes('UID')) {
            this.userId = document.cookie.substring(document.cookie.indexOf('=') + 1)
            fetch(`https://giyahland-json.onrender.com/users/${this.userId}`).then(res => res.json())
                .then(data => {
                    ////////////////////////////// --- profile icon desktop handler --- //////////////////////////////////
                    this.userProfile.className = 'relative z-10 flex items-center gap-x-2'
                    this.userProfile.innerHTML = `
                                <img src=${(()=>{
                                    if (location.href.includes('index.html')){
                                        return `./public/images/profile-img/profile-${data.avatar}.png`
                                    }else {
                                        return `../images/profile-img/profile-${data.avatar}.png`
                                    }
                    })()} alt="" class="w-12 h-12">
                                <span class="font-YekanBakh-Medium text-xl">سلام؛ ${data.firstname}</span>`
                    this.userProfile.addEventListener('click', (event) => {
                        event.preventDefault()
                        this.closeProfileDesktopMenuHandler()
                    })
                    ////////////////////////////// --- profile icon mobile handler --- //////////////////////////////////
                    this.mobileUserProfile.className = 'relative z-10 flex-center'
                    this.mobileUserProfile.innerHTML = `
                                <img src=${(()=>{
                        if (location.href.includes('index.html')){
                            return `./public/images/profile-img/profile-${data.avatar}.png`
                        }else {
                            return `../images/profile-img/profile-${data.avatar}.png`
                        }
                    })()} alt="" class="w-12 h-12">
                    `
                    this.mobileUserProfile.addEventListener('click', (event) => {
                        event.preventDefault()
                        this.closeProfileMobileMenuHandler()
                    })
                })
                .catch(err => console.log(err))
            ////////////////////////////////// --- count of user cart handle --- //////////////////////////////////////
            fetch(`https://giyahland-json.onrender.com/carts/${this.userId}`).then(res => res.json())
                .then(data => {
                    data.items.forEach(item =>{
                        this.productCount += item.count
                    })
                    this.shadowRoot.querySelector('#basket-count').innerHTML = `${this.productCount}`
                    this.shadowRoot.querySelector('#mobile-basket-count').innerHTML = `${this.productCount}`
                })
                .catch(err => console.log(err))

        } else {
            this.userProfile.setAttribute('href', `${location.href.includes('index.html') ? './public/pages/sign-in.html' : 'sign-in.html'}`)
            this.userProfile.innerHTML = `
                    <svg class="w-6 md:h-6">
                        <use href="#login"></use>
                    </svg>
                    ورود/ثبت نام`
            this.mobileUserProfile.setAttribute('href', `${location.href.includes('index.html') ? './public/pages/sign-in.html' : 'sign-in.html'}`)
            this.mobileUserProfile.innerHTML = `
                    <svg class="w-5 h-5">
                         <use href="#login"></use>
                    </svg>`
        }
        this.shadowRoot.querySelector('#mobile-search-box').addEventListener('keyup' , (event)=>{
            if (event.keyCode === 13){
                location.href =`${(()=>{
                    if (location.href.includes('index.html')){
                        return `./public/pages/products-page.html?s=${event.target.value}`
                    }else {
                        return `./products-page.html?s=${event.target.value}`
                    }
                })()}`
            }
        })
        ///////////////////////////// --- log-out account btn --- ////////////////////////////////
        this.shadowRoot.querySelector('#desktop-log-out-btn').addEventListener('click', this.logOutAccount)
        this.shadowRoot.querySelector('#mobile-log-out-btn').addEventListener('click', this.logOutAccount)
        /////////////////////////////////// --- add and remove blur overlay for mobile & desktop --- ////////////////////////////////////////
        this.blurOverlay.addEventListener('click', this.closeProfileDesktopMenuHandler)
        this.blurMobileOverlay.addEventListener('click', this.closeProfileMobileMenuHandler)
        this.searchBtn.addEventListener('click' , async ()=>{
            location.href = `${(()=>{
                if (location.href.includes('index.html')){
                    return `./pubic/pages/products-page.html?s=${this.searchBox.value}`
                }else {
                    return `../pages/products-page.html?s=${this.searchBox.value}`
                }
            })()}`
        })
        this.searchBoxWrapper.addEventListener('click' , this.openSearchBox)
        document.querySelector('.blur-search-overlay').addEventListener('click' , this.closeSearchBox)
    }
}


export {Header}