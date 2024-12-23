import React from "react";
import { Input, Text, HStack } from "@chakra-ui/react";

export const TimeInput = () => {
    return (
        <HStack spacing={8} align="center" w="100%">
            <Text fontFamily="var(--main-font)"
                fontStyle="italic"
                fontSize={{
                    lg: "1.4em",
                    xl: "1.6em",
                }}
                fontWeight="bold"
                color="var(--color-brown)"
                mr={10}>
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
                fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={{
                    lg: "1.2em",
                    xl: "1.4em",
                }}
            />
            <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={{
                lg: "1.2em",
                xl: "1.4em",
            }} color="var(--color-brown)">
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
                fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={{
                    lg: "1.2em",
                    xl: "1.4em",
                }}
            />
            <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={{
                lg: "1.2em",
                xl: "1.4em",
            }} color="var(--color-brown)">
                минут
            </Text>
        </HStack>
    )
}