import React from 'react'
import { Global } from '@emotion/react'


const Fonts = () => (
  <Global
    styles={`
          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVJaLlaJ5W_C0.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oV-6LlaJ5W_C0.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVpaLlaJ5W_C0.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVl6LlaJ5W_C0.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVe6XlaJ5W_C0.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVQqXlaJ5W_C0.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVJaXlaJ5W_C0.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVDKXlaJ5W_C0.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 200;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeG9KK5Q5ClqOw.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeFjKK5Q5ClqOw.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeE9KK5Q5ClqOw.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeEPKK5Q5ClqOw.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeHjL65Q5ClqOw.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeHaL65Q5ClqOw.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeG9L65Q5ClqOw.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeGUL65Q5ClqOw.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }



          // latin
          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVJaLlbJ5W.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oV-6LlbJ5W.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVpaLlbJ5W.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVl6LlbJ5W.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVe6XlbJ5W.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVQqXlbJ5W.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVJaXlbJ5W.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or38Q6P12-iJxAIgLa78DkTtAoDhk0oVDKXlbJ5W.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 200;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeG9KK5U5Ck.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeFjKK5U5Ck.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeE9KK5U5Ck.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeEPKK5U5Ck.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeHjL65U5Ck.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeHaL65U5Ck.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          @font-face {
            font-family: 'Literata';
            font-style: italic;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeG9L65U5Ck.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

            @font-face {
              font-family: 'Literata';
              font-style: italic;
              font-weight: 900;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/literata/v35/or3yQ6P12-iJxAIgLYT1PLs1a-t7PU0AbeGUL65U5Ck.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
      `}
  />
)

export default Fonts