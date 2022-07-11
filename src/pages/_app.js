import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pagePros }) {
  return (
    <ChakraProvider>
      <Component {...pagePros} />
    </ChakraProvider>
  );
}
export default MyApp;
