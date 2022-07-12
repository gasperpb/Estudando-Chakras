import React from "react";
import App from "./_app";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}
