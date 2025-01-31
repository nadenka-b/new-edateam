import React, { useState, useEffect } from "react";
import { Box, Input, List, ListItem, Text } from "@chakra-ui/react";
import { useLazyGetIngredientsQuery } from "../../../../__data__/services/mainApi";

type IngredientFilterProps = {
    placeholder: string;
    title: string;
    onIngredientSelect: (ingredient: string) => void;
};


export const IngredientFilter: React.FC<IngredientFilterProps> = ({ placeholder, title, onIngredientSelect }) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [getIngredients, { data }] = useLazyGetIngredientsQuery();

    useEffect(() => {
        if (inputValue.trim().length > 2) {
            const timeout = setTimeout(() => {
                getIngredients({ value: inputValue });
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [inputValue, getIngredients]);

    useEffect(() => {
        if (data) {
            setFilteredOptions(data);
        }
    }, [data]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleOptionSelect = (option: string) => {
        onIngredientSelect(option);
        setInputValue("");
        setFilteredOptions([]);
    };

    return (
        <Box position="relative" w="100%">
            <Text fontSize="1.2vw" color="orange.500">
                {title}
            </Text>
            <Input
                focusBorderColor="orange.100"
                _hover={{ opacity: 0.85, borderColor: "orange.100" }}
                border="0.1vw solid"
                bg="beige.200"
                h="2.6vw" w="100%"
                fontSize="1vw"
                color="brown.500"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
            />
            {filteredOptions.length > 0 && (
                <List
                    position="absolute"
                    zIndex="10"
                    bg="beige.200"
                    w="100%"
                    color="brown.500"
                    borderColor="orange.100"
                    border="0.1vw solid"
                    borderRadius="md"
                    mt="2"
                    boxShadow="lg"
                    maxH="150px"
                    overflowY="auto"
                >
                    {filteredOptions.map((option, index) => (
                        <ListItem
                            key={index}
                            p="2"
                            cursor="pointer"
                            onClick={() => handleOptionSelect(option)}
                        >
                            <Text>{option}</Text>
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
}