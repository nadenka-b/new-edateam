import React from "react";
import { HStack, Text, Image } from "@chakra-ui/react";

import { clockIcon } from "./index";

export const TimeCooking = () => {
    return (
        <HStack
            align="center"
            w="406px"
            h="76px"
            borderWidth="2px"
            borderColor="#7E4925"
            bg="rgba(126, 73, 37, 0.2)"
            borderRadius="30px"
            px="4"
            mr="149px"
        >
            <Image
                src={clockIcon}
                alt="Часы"
                boxSize="50px"
            />
            <Text
                fontSize="calc(20px * 1.1)"
                fontWeight={900}
                fontStyle="italic"
                color="#7E4925"
            >
                Время приготовления: 30 мин
            </Text>
        </HStack>
    )
}