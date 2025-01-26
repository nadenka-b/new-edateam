import React, { useState } from "react";
import { Box, Input, List, ListItem, Text } from "@chakra-ui/react";

type IngredientFilterProps = {
    placeholder: string;
    title: string
};

const ingredients = ["Apple", "Banana", "Cherry", "Date", "Grape", "Orange", "Strawberry"];
// Если список фильтров загружается из API:
// useEffect(() => {
//     if (inputValue) {
//       fetchOptions(inputValue).then(setFilteredOptions);
//     }
//   }, [inputValue]);



export const IngredientFilter: React.FC<IngredientFilterProps> = ({ placeholder, title }) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        if (value.trim()) {
            const filtered = ingredients.filter((option) =>
                option.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions([]);
        }
    };

    const handleOptionSelect = (option: string) => {
        setInputValue(option);
        setFilteredOptions([]);
    };

    return (
        <Box position="relative" w="100%">
            <Text fontSize="1.2vw" color="orange.500">
                {title}
            </Text>
            {/* Input Field */}
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

            {/* Dropdown List */}
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
                            //_hover={{ bg: `${colorScheme}.50` }}
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