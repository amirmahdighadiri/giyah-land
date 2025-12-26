/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "powder-blue": {
                    "100": "#B7D9D6",
                    "200": "#9FCDC9",
                    "300": "#87C1BB",
                    "400": "#6FB4AD",
                    "500": "#57A7A0",
                    "600": "#3F9B92",
                    "700": "#278F85",
                },
                "forest-green": {
                    "100": "#417F56",
                    "200": "#396F4B",
                    "300": "#315F41",
                    "400": "#294F36",
                    "500": "#21402B",
                    "600": "#183020",
                    "700": "#102016",
                },
                "light-gray": {
                    "100": "#FAFAFA",
                    "200": "#F6F6F6",
                    "300": "#EFEFEF",
                    "400": "#E1E1E1",
                    "500": "#D9D9D9",
                    "600": "#CBCBCB",
                    "700": "#ADADAD",
                },
                "spanish-gray": {
                    "100": "#909090",
                    "200": "#717171",
                    "300": "#505050",
                    "400": "#353535",
                    "500": "#212121",
                    "600": "#121212",
                    "700": "#121212",
                },
                "red-salsa": {
                    "100": "#FFF2F2",
                    "200": "#ED2E2E",
                }
            },
            screens: {
                'xs': '480px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    '2xl': '0'
                },
                screens: {
                    xs: '480px',
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                }
            },
            fontFamily: {
                "YekanBakh": "YekanBakh Regular",
                "YekanBakh-Medium": "YekanBakh Medium",
                "YekanBakh-Bold": "YekanBakh Bold",
                "YekanBakh-Heavy": "YekanBakh Heavy",
                "Roboto-Medium": "Roboto Medium",
                "Roboto-Bold": "Roboto Bold",
                "Roboto-Black": "Roboto Black",
                "MorabbaLight": "Morabba Light",
                "MorabbaMedium": "Morabba Medium",
                "MorabbaBold": "Morabba Bold"
            },
            animation: {
                progress_ani: 'progress 2s ease-in-out 1',

            },
            keyframes: {
                progress: {
                    '0%': {width: ' 0%'},
                }
            },
        },

    },
    plugins: [
        function ({addVariant , e}) {
            addVariant('child', '&>*')
            addVariant('child-hover', '&>*:hover')
            addVariant('child-active', '&>*:active')
        }
    ],
}


