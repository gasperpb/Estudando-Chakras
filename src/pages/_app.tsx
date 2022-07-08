
// 1. import 'ChakraProvider' component
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
// 2. Wrap ChakraProvider at the root of your app
  return ( 
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
