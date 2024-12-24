import React from "react";
import { Input, Text, HStack } from "@chakra-ui/react";

export const TimeInput = () => {
    return (
        <>
            <Input
                placeholder="Название рецепта"
                size="lg"
                maxW={{
                    lg: "10.5em",
                    xl: "10em",
                }}
                fontFamily="var(--main-font)"
                fontSize={{
                    lg: "1.5em",
                    xl: "2em",
                }}
                fontStyle="italic"
                transition="all 0.3s ease-in-out"
            />
            <HStack
                spacing={{
                    lg: "0.4em",
                    xl: "1.2em",
                }}
                align="center" w="100%">
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
                    w={{
                        lg: "2.4em",
                        xl: "4em",
                    }}
                    textAlign="right"
                    border="2px solid var(--color-brown)"
                    _placeholder={{ color: "var(--color-brown)" }}
                    fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={{
                        lg: "1.2em",
                        xl: "1.4em",
                    }}
                />
                <Text
                    fontFamily="var(--main-font)"
                    fontStyle="italic"
                    fontWeight={800}
                    fontSize={{
                        lg: "1.2em",
                        xl: "1.4em",
                    }}
                    color="var(--color-brown)">
                    час(ов)
                </Text>

                <Input
                    placeholder="0"
                    size="sm"
                    borderRadius={15}
                    w={{
                        lg: "2.4em",
                        xl: "4em",
                    }}
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
        </>
    )
}