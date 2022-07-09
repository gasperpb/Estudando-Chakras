import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function Container01() {
  return (
    <>
      <Flex
        flexDirection="column"
        height="566px"
        background="url('/luz.jpg') no-repeat center / cover"
      >
        <Image src="/modelo.svg" alt="Modelo" height="506px" mx="auto"></Image>
        <Image src="/Nextjs-logo.svg" position="absolute"></Image>
      </Flex>
    </>
  );
}
