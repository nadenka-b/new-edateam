import React from "react";
import { Text } from "@chakra-ui/react";

export const Title = () => {
    return (
        <Text
            fontSize="2vw"
            fontWeight="900"
            fontStyle="italic"
            color="#7E4925"
            textAlign="center" // Центрирует текст
            mb="calc(11px * 1.2)"
        >
            Блинчики с мясом, сыром и лучком
        </Text>
    )
}