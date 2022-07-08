import {
  Flex,
  Avatar,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      w="100%"
      maxW={1120}
      h="20"
      mx="auto"
      px="2"
      py="2"
      boxShadow="0 1px 0 #ccc"
      color="gray.500"
      fontWeight="bold"
    ></Flex>
  );
};

export default Header;
