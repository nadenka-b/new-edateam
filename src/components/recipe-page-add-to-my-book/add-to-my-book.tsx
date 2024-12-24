import React from "react";
import { Image, Text, VStack, HStack, Box } from "@chakra-ui/react";

import { flagIcon } from "./index";

export const AddToMyBook = () => {
    return (
        <VStack align="center">
            <HStack align="center">
                <Text
                    fontFamily="var(--main-font)"
                    fontSize="calc(20px * 1.1)"
                    fontWeight={900}
                    fontStyle="italic"
                    color="#7E4925"
                >
                    Добавить в мою книгу рецептов
                </Text>
                <Image
                    src={flagIcon}
                    alt="Флажок для избранного"
                    w="27px"
                    h="36px"
                />
            </HStack>

            <Box borderBottom="6px solid orange" width="421px" height="5.5px" />
        </VStack>
    )
}