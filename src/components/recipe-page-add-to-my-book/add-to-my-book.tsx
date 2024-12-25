import React from "react";
import { Image, Text, VStack, HStack, Box } from "@chakra-ui/react";

import { flagIcon } from "./index";

export const AddToMyBook = () => {
    return (
        <VStack align="center">
            <HStack align="center">
                <Text
                    fontSize="1.2vw"
                    fontWeight={900}
                    fontStyle="italic"
                    color="#7E4925"
                >
                    Добавить в мою книгу рецептов
                </Text>
                <Image
                    src={flagIcon}
                    alt="Флажок для избранного"
                    w="1.4vw"
                    h="1.8vw"
                />
            </HStack>

            <Box borderBottom="6px solid orange" w="25vw" h="0.01vw" />
        </VStack>
    )
}