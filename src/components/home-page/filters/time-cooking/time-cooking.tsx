import React, { useState } from "react";
import { Button, Flex, Box, Text } from "@chakra-ui/react";


export const TimeCooking = () => {
    const [selected, setSelected] = useState("Любое");
    const options = ["<30мин", "<1ч", "<2ч", "Любое"];
    return (
        <Box>
            <Text fontSize="1.2vw" color="orange.500">
                Время приготовления
            </Text>
            <Flex justifyContent="space-between" flexWrap="wrap" gap="0.5vw">
                {options.map((option) => (
                    <Button
                        fontSize="1vw"
                        h="2.5vw"
                        flex="1"
                        key={option}
                        onClick={() => setSelected(option)}
                        borderRadius="0.8vw"
                        variant="solid"
                        bg={selected === option ? "orange.200" : "beige.200"}
                        color={selected === option ? "beige.200" : "brown.500"}
                        _hover={{ opacity: 0.85, bg: selected === option ? "orange.200" : "beige.200" }}
                    >
                        {option}
                    </Button>
                ))}
            </Flex>
        </Box>
    );
}
