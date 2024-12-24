import React from "react";
import { Input, Text, HStack } from "@chakra-ui/react";
import { addPhoto } from "../../assets/index";

export const TimeInput = () => {
    return (
        <HStack spacing={8} align="center" w="100%">
            <Text fontStyle="italic" fontSize={32} fontWeight="bold" color="brown.500" mr={10}>
                Время приготовления
            </Text>

            <Input
                placeholder="0"
                size="sm"
                borderRadius={15}
                w="100px"
                textAlign="right"
                border="2px solid brown.500"
                _placeholder={{ color: "brown.500" }}
                fontStyle="italic" fontWeight={800} fontSize={28}
            />
            <Text fontStyle="italic" fontWeight={800} fontSize={28} color="brown.500">
                час(ов)
            </Text>

            <Input
                placeholder="0"
                size="sm"
                borderRadius={15}
                w="100px"
                textAlign="right"
                border="2px solid brown.500"
                _placeholder={{ color: "brown.500" }}
                fontStyle="italic" fontWeight={800} fontSize={28}
            />
            <Text fontStyle="italic" fontWeight={800} fontSize={28} color="brown.500">
                минут
            </Text>
        </HStack>
    )
}