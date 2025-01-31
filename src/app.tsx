import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Fonts from './fonts'
import { BrowserRouter } from 'react-router-dom'
import { PageRoutes } from './routes'
import { store } from './__data__/store'
import { Provider } from 'react-redux'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { ScrollToTop } from './components/scroll-to-top'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Fonts />
          <ScrollToTop />
          <Header />
          <PageRoutes />
          <Footer />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;