import React from "react";
import { HStack, Text, Image } from "@chakra-ui/react";

import { clockIcon } from "./index";

export const TimeCooking = () => {
    return (
        <HStack
            align="center"
            w="27vw"
            h="3.9vw"
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
                boxSize="2.6vw"
            />
            <Text
                fontSize="1.2vw"
                fontWeight={900}
                fontStyle="italic"
                color="#7E4925"
            >
                Время приготовления: 30 мин
            </Text>
        </HStack>
    )
}