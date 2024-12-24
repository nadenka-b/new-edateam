import React from "react";
import { Input, Text, HStack } from "@chakra-ui/react";
import { addPhoto } from "../../assets/index";

export const TimeInput = () => {
    return (
        <HStack spacing={8} align="center" w="100%">
        <Text fontFamily="var(--main-font)" fontStyle="italic" fontSize={32} fontWeight="bold" color="var(--color-brown)" mr={10}>
            Время приготовления
        </Text>

        <Input
            placeholder="0"
            size="sm"
            borderRadius={15}
            w="100px"
            textAlign="right"
            border="2px solid var(--color-brown)"
            _placeholder={{ color: "var(--color-brown)" }}
            fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28}
        />
        <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28} color="var(--color-brown)">
            час(ов)
        </Text>

        <Input
            placeholder="0"
            size="sm"
            borderRadius={15}
            w="100px"
            textAlign="right"
            border="2px solid var(--color-brown)"
            _placeholder={{ color: "var(--color-brown)" }}
            fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28}
        />
        <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28} color="var(--color-brown)">
            минут
        </Text>
    </HStack>
    )
}