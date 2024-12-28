import React, { useState } from "react";
import { Image, Text, VStack, HStack, Box, Input, Button, List, ListItem } from "@chakra-ui/react";

import { Plus } from './index'

export const Ingredients = () => {
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientQuantity, setIngredientQuantity] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const addIngredient = () => {
        if (ingredientName.trim() && ingredientQuantity.trim()) {
            setIngredients([...ingredients, { name: ingredientName, quantity: ingredientQuantity }]);
            setIngredientName(""); //сбрасывает ingredientName и ingredientQuantity в пустые строки, чтобы подготовиться к следующему вводу
            setIngredientQuantity("");
        }
    };

    return (
        <VStack spacing={4} align="center" w="100%">
            {/* Заголовок */}
            <Text
                fontFamily="var(--main-font)"
                fontSize="1.6vw"
                fontWeight="bold"
                color="brown.500"
                fontStyle="italic"
            >
                Ингредиенты
            </Text>

            {/* Поле ввода */}
            <HStack
                w="34.3vw"
                // h="5vw"
                align="center"
                border="2px solid"
                borderColor="brown.500"
                borderRadius={15}
                p={2}
                bg="white"
            >
                <Input
                    placeholder="Например, курица"
                    border="none"
                    _focus={{ outline: "none" }}
                    fontWeight={700}
                    fontSize="1.25vw"
                    color="brown.500"
                    h="2vw"
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
                    fontSize="1.25vw"
                    color="brown.500"
                    flex="1"
                    value={ingredientQuantity}
                    onChange={(e) => setIngredientQuantity(e.target.value)}
                />
            </HStack>

            {/* Кнопка для добавления */}
            <HStack spacing={2} align="center">
                <Button
                    onClick={addIngredient} // срабатывает addIngredient, добавляя текущее название и количество в список
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
                        fontSize="1.1vw"
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
                w="26vw"
                maxW="700px">
                {ingredients.map((ingredient, index) => (//цикл по ingredients массиву и отображает каждый элемент в стилизованном виде <ListItem>
                    <ListItem
                        key={index}
                        border="2px solid brown.500"
                        borderRadius="12px"
                        p={4}
                        bg="var(--background-color)"
                        fontFamily="var(--main-font)"
                        fontSize="1.3vw"
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