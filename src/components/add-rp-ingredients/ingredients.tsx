import React, { useRef, useState } from "react";
import { Image, Text, VStack, HStack, Box, Input, Button, List, ListItem } from "@chakra-ui/react";

import { Plus } from './index'

export const Ingredients = () => {
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientQuantity, setIngredientQuantity] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const addIngredient = () => {
        if (ingredientName.trim() && ingredientQuantity.trim()) {
            setIngredients([...ingredients, { name: ingredientName, quantity: ingredientQuantity }]);
            setIngredientName("");
            setIngredientQuantity("");
        }
    };

    return (
        <VStack spacing={4} align="center" w="100%">
            {/* Заголовок */}
            <Text
                fontFamily="var(--main-font)"
                fontSize={{
                    lg: "1.4em",
                    xl: "1.6em",
                }}
                fontWeight="bold"
                color="brown.500"
                fontStyle="italic"
            >
                Ингредиенты
            </Text>

            {/* Поле ввода */}
            <HStack
                w={{
                    lg: "26em",
                    xl: "35em",
                }}
                align="center"
                border="2px solid brown.500"
                borderRadius={15}
                p={2}
                bg="white"
            >
                <Input
                    placeholder="Например, курица"
                    border="none"
                    _focus={{ outline: "none" }}
                    fontWeight={700}
                    fontSize={{
                        lg: "1.1em",
                        xl: "1.4em",
                    }}
                    color="var(--color-brown)"
                    flex="3"
                    value={ingredientName}
                    onChange={(e) => setIngredientName(e.target.value)}
                />

                <Box w="2px" h="130%" bg="brown.500" />

                <Input
                    placeholder="0"
                    border="none"
                    _focus={{ outline: "none" }}
                    textAlign="center"
                    fontWeight={700}
                    fontSize="24px"
                    color="brown.500"
                    flex="1"
                    value={ingredientQuantity}
                    onChange={(e) => setIngredientQuantity(e.target.value)}
                />
            </HStack>

            {/* Кнопка для добавления */}
            <HStack spacing={2} align="center">
                <Button
                    onClick={addIngredient}
                    variant="unstyled"
                    display="flex"
                    _hover={{
                        ".hover-effect": { color: "orange.300", filter: "brightness(1.2)" }, // Единый стиль
                    }}

                >
                    <Image
                        src={Plus} // Укажите путь к вашему изображению
                        alt="Добавить"
                        boxSize="30px"
                        mr={2}
                        className='hover-effect'
                    />

                    <Text
                        fontFamily="var(--main-font)"
                        fontSize={{
                            lg: "1em",
                            xl: "1.1em",
                        }}
                        fontWeight="bold"
                        color="orange.600"
                        className='hover-effect'
                    >
                        Добавить ингредиент
                    </Text>
                </Button>

            </HStack>

            {/* Список ингредиентов */}
            <List
                spacing={3}
                w={{
                    lg: "26em",
                    xl: "35em",
                }}
                maxW="700px">
                {ingredients.map((ingredient, index) => (
                    <ListItem
                        key={index}
                        border="2px solid brown.500"
                        borderRadius="12px"
                        p={4}
                        bg="var(--background-color)"
                        fontFamily="var(--main-font)"
                        fontSize={{
                            lg: "1.1em",
                            xl: "1.4em",
                        }}
                        fontWeight="bold"
                        color="brown.500"
                    >
                        {ingredient.name} - {ingredient.quantity}
                    </ListItem>
                ))}
            </List>
        </VStack>
    )
}