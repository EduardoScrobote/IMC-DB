import React from "react";
import { Flex, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import test from "node:test";

type bodyType = {
  wheight: number;
  height: number;
};

export default function LeftSide() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  return (
    <Flex flexDirection="column" w="100%" alignItems="center">
      <Text fontSize="2xl" mt="8px">
        Calculadora IMC
      </Text>
      <Text mt="8px">Adicione a baixo os seus dados</Text>
      <Flex flexDirection="column" mt="16px">
        <Text>Altura</Text>
        <Input
          mt="4px"
          onChange={({ target: { value } }) => {
            setHeight(parseFloat(value.replace(",", ".")));
          }}
        />
        <Text mt="16px">Peso</Text>
        <Input
          mt="4px"
          onChange={({ target: { value } }) => {
            setWeight(parseInt(value.replace(",", ".")));
          }}
        />
        <Button mt="24px" _hover={{ backgroundColor: "#B2CBE5" }}>
          Calcular
        </Button>
      </Flex>
    </Flex>
  );
}
