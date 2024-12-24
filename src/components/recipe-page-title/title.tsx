import React from "react";
import {Text} from "@chakra-ui/react";

export const Title = () => {
    return (
        <Text
            fontFamily="var(--main-font)"
            fontSize="40px"
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