import React from "react";
import { Input, Text, HStack } from "@chakra-ui/react";

export const TimeInput = () => {
    return (
        <>
            <Input
                placeholder="Название рецепта"
                size="lg"
                maxW="26vw"
                fontFamily="var(--main-font)"
                fontSize="2.3vw"
                fontStyle="italic"
                transition="all 0.3s ease-in-out"
            />
            <HStack
                spacing="0.8vw"
                align="center" 
                >
                <Text
                    fontFamily="var(--main-font)"
                    fontStyle="italic"
                    fontSize="1.6vw"
                    fontWeight="bold"
                    color="brown.500"
                    mr={10}>
                    Время приготовления
                </Text>

                <Input
                    placeholder="0"
                    size="sm"
                    borderRadius={15}
                    w="5.2vw"
                    textAlign="right"
                    border="2px solid"
                    borderColor="brown.500"
                    _placeholder={{ color: "brown.500" }}
                    fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800}
                    fontSize="1.4vw"
                />
                <Text
                    fontFamily="var(--main-font)"
                    fontStyle="italic"
                    fontWeight={800}
                    fontSize="1.4vw"
                    color="brown.500">
                    час(ов)
                </Text>

                <Input
                    placeholder="0"
                    size="sm"
                    borderRadius={15}
                    w="5.2vw"
                    textAlign="right"
                    border="2px solid"
                    borderColor="brown.500"
                    _placeholder={{ color: "brown.500" }}
                    fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800}
                    fontSize="1.4vw"
                />
                <Text
                    fontFamily="var(--main-font)"
                    fontStyle="italic"
                    fontWeight={800}
                    fontSize="1.4vw"
                    color="brown.500">
                    минут
                </Text>
            </HStack>
        </>
    )
}