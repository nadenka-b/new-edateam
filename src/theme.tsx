import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        body: `'Literata', "sans-serif"`,
        heading: `'Literata', "sans-serif"`
    },
    colors: {
        orange: {
            50: "#FFe6c3",
            70: "#FBD07E",
            100: "#DC8D57", //теги
            200: "#FF9F5F", //приветствие
            300: "#FF9901",
            500: "#FF6701", //основной текст 
            600: "#FF6601"
        },
        beige: {
            50: "#FFF4E0",
            150: "rgba(255, 230, 195, 0.65)",
            100: "rgba(255, 240, 218, 0.75)", //время
            200: "#FFF0DA", //фон
            300: "#FFE6C3" //фон карточек
        },
        brown: {
            100: "rgba(126, 73, 37, 0.1)",
            150: "rgba(126, 73, 37, 0.2)",
            200: "rgba(126, 73, 37, 0.4)",
            500: "#7E4925" //везде
        },
        grey: {
            50: "#F2F2F2",//вставить фото
            200: "#979797", //в input
            400: "#5B5B5B" //в создании рецепта
        },
        blue: {
            500: "#11AADC" //телега
        },
        red: {
            500: "#FF354F"
        },
        green: {
            500: "#34CA66"
        },

    },
    styles: {
        global: {
            // Указываем глобальные стили

            "input:focus, input:active": {
                outline: "none !important",
                boxShadow: "none !important"
            },
            body: {

                bg: "beige.200", // Цвет фона
                lineHeight: "base", // Межстрочный интервал
            },
            "*": {
                margin: 0,
                padding: 0,
                boxSizing: "border-box", // Для сброса отступов
            },
        },
    }
});

export default theme;