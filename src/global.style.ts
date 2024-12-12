import { css } from "@emotion/react";

export const globalStyles = css`
 @import url('https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap');
 
 * {
        margin: 0;
        padding: 0
    }

    :root {
        --main-font: "Literata", "sans-serif";
        --background-color: #FFF0DA;
        --color-text-main: #FF6701;
        --color-brown:#7E4925;
        --color-text-greetings: #FFF0DA; //совпадает с фоном
        --background-greetings:#FF9F5F;
        --background-card: #ffe6c3;
        --color-tags: #dc8d57;


    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button{
        border:0;
        margin:0;
        outline:0;
        padding:0;
        text-decoration:none;
        box-sizing:border-box;
        -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section{
        display:block;
    }
    table{
        border-collapse:collapse;
        border-spacing:0;
    }
    input[type=search]::-webkit-search-cancel-button,
    input[type=search]::-webkit-search-decoration,
    input[type=search]::-webkit-search-results-button,
    input[type=search]::-webkit-search-results-decoration{
        -webkit-appearance:none;
        -moz-appearance:none;
    }

    input[type=search]{
        -webkit-appearance:none;
        -moz-appearance:none;
        -webkit-box-sizing:content-box;
        -moz-box-sizing:content-box;
        box-sizing:content-box;
    }
    :focus{outline:0;}
    textarea{
        overflow:auto;
        vertical-align:top;
        resize:vertical;
    }
    body{line-height:1;}
    img{
        max-width:100%;
        max-height:100%;
    }
    ol, ul{list-style:none;}
    input, textarea, select{
        box-sizing:border-box;
        outline:0;
    }
    body{
        min-width:320px;
        -webkit-text-size-adjust:100%;
        max-width:1920px;
        margin:0 auto;
    }

    html {
        font-size: 20px;
    }
`