import React from "react";
import { Text, VStack, Box } from "@chakra-ui/react";

const ingredients = [
    { name: "Яйцо", quantity: "3-4 шт" },
    { name: "Молоко", quantity: "0.5 л" },
    { name: "Мука пшеничная", quantity: "250 г" },
    { name: "Масло растительное", quantity: "2 ст.л." },
    { name: "Сахар", quantity: "1 ст.л." },
    { name: "Мясо отварное", quantity: "500 г" },
    { name: "Лук репчатый", quantity: "1 шт" },
    { name: "Сыр твердый", quantity: "300 г" },
    { name: "Масло сливочное", quantity: "50 г" },
    { name: "Соль, перец", quantity: "По вкусу" },
];

export const ListOfIngredients = () => {
    return (
        <VStack
            w="100%"
            maxW="1000px"
            mx="auto"
            my="100px"
            borderRadius="16px" // Закругление только внешних углов таблицы
            overflow="hidden" // Обрезка содержимого для строгих краев
            spacing={0} // Убираем отступы между строками
        >
            {ingredients.map((ingredient, index) => (
                <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    w="100%"
                    px="16px"
                    py="12px"
                    bg={index % 2 === 0 ? "#FFF0DA" : "#FFE6C3"} // Чередование цветов строк
                    m={0} // Убираем margin между строками
                >
                    <Text
                        fontSize="22px"
                        fontWeight="600"
                        color="#7E4925"
                        mr="4"
                    >
                        {ingredient.name}
                    </Text>

                    <Box
                        borderBottom="1px solid #7E4925"
                        height="0"
                        flex="1"
                    />
                    <Text
                        fontSize="22px"
                        fontWeight="600"
                        color="#7E4925"
                        w="10%" // Фиксируем ширину колонки с количеством
                        textAlign="left" // Выравнивание по правому краю
                        ml="4"
                    >
                        {ingredient.quantity}
                    </Text>
                </Box>
            ))}
        </VStack>

    )
}