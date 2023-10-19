"use client";
import { Flex, Text } from "@chakra-ui/react";
import LeftSide from "./components/leftSide/LeftSide";

export default function Home() {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      w="100%"
      h="100vh"
      color="white"
      backgroundColor="#202124"
    >
      <Flex w="25rem" h="35rem" placeSelf="center" placeContent="center">
        <LeftSide />
      </Flex>
      <Flex w="25rem" h="35rem" placeSelf="center" placeContent="center">
        <Text>Right</Text>
      </Flex>
    </Flex>
  );
}
