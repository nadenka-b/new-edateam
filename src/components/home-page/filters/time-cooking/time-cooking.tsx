import React from "react";
import { Button, Flex, Box, Text } from "@chakra-ui/react";

interface TimeCookingProps {
    value: number;
    options: optionObject[];
    onChange: (value: number) => void;
}

interface optionObject {
    value: number;
    title: string;
}

export const TimeCooking: React.FC<TimeCookingProps> = ({ value, options, onChange }) => {
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
                        key={option.value}
                        onClick={() => onChange(option.value)}
                        borderRadius="0.8vw"
                        variant="solid"
                        bg={value === option.value ? "orange.200" : "beige.200"}
                        color={value === option.value ? "beige.200" : "brown.500"}
                        _hover={{ opacity: 0.85, bg: value === option.value ? "orange.200" : "beige.200" }}
                    >
                        {option.title}
                    </Button>
                ))}
            </Flex>
        </Box>
    );
}

