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
            maxW="52vw"
            mx="auto"
            my="4vw"
            borderRadius="0.83vw" // Закругление только внешних углов таблицы
            overflow="hidden" // Обрезка содержимого для строгих краев
            spacing={0} // Убираем отступы между строками
        >
            {ingredients.map((ingredient, index) => (
                <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    w="100%"
                    px="0.83vw"
                    py="0.6vw"
                    bg={index % 2 === 0 ? "beige.200" : "beige.300"} // Чередование цветов строк
                    m={0} // Убираем margin между строками
                >
                    <Text
                        fontSize="1.14vw"
                        fontWeight="600"
                        color="brown.500"
                        mr="0.2vw"
                    >
                        {ingredient.name}
                    </Text>

                    <Box
                        borderBottom="0.05vw solid brown.500"
                        height="0"
                        flex="1"
                    />
                    <Text
                        fontSize="1.14vw"
                        fontWeight="600"
                        color="brown.500"
                        w="10%" // Фиксируем ширину колонки с количеством
                        textAlign="left" // Выравнивание по левому краю
                        ml="4"
                    >
                        {ingredient.quantity}
                    </Text>
                </Box>
            ))}
        </VStack>

    )
}