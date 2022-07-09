import { Box, Flex, Text } from "@chakra-ui/react";
import { Container02 } from "../containers";
import Container01 from "../containers/Container01";

export default function Home() {
  return (
    <>
      <Box fontFamily="Montserrat" color="black">
        <Container01 />
        <Container02 />
      </Box>
    </>
  );
}
