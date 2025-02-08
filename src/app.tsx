import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Fonts from './fonts'
import { BrowserRouter } from 'react-router-dom'
import { PageRoutes } from './routes'
import { store } from './__data__/store'
import { Provider } from 'react-redux'
import { ScrollToTop } from './components/scroll-to-top'
import ErrorBoundary from './components/error-boundary/error-boundary';


const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <Fonts />
            <ScrollToTop />
            <PageRoutes />
          </ChakraProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;