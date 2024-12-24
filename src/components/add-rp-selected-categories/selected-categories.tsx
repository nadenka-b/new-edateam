import React, { useState } from "react";
import { HStack, Text, VStack, Select, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
// import { CloseIcon } from '@chakra-ui/icons';

export const SelectedCategories = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const addCategory = (category) => {
        if (!selectedCategories.includes(category)) {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const removeCategory = (category) => {
        setSelectedCategories(selectedCategories.filter((item) => item !== category));
    };

    return (
        <HStack spacing={8} align="flex-start" justifyContent="space-between" w="100%">
            {/* Секция с текстом "Категория блюда" */}
            <VStack align="flex-start" >
                <Text

                    fontStyle="italic"
                    fontSize={32}
                    fontWeight="bold"
                    color="brown.500"
                >
                    Категория блюда
                </Text>

                {/* Выпадающее меню под заголовком */}
                <Select
                    placeholder="Выберите категорию"
                    size="lg"
                    h="50px"
                    w="320px"
                    borderColor="brown.500"

                    fontSize={22}
                    fontWeight="bold"
                    color="brown.500"
                    borderRadius={15}
                    onChange={(e) => addCategory(e.target.value)} // Добавление категории
                >
                    <option value="Супы">Супы</option>
                    <option value="Гарнир">Гарнир</option>
                    <option value="Десерт">Десерт</option>
                    <option value="Основное блюдо">Основное блюдо</option>
                </Select>
            </VStack>

            {/* Секция с выбранными категориями справа */}
            <VStack align="start" w="100%" maxWidth={400}>
                <Text

                    fontSize={32}
                    fontWeight={800}
                    color="brown.500"
                    fontStyle="italic"
                >
                    Выбранные категории
                </Text>

                {/* Контейнер для выбранных категорий */}
                <Wrap spacing={2} maxWidth="400px" overflow="hidden" w="100%">
                    {selectedCategories.map((category) => (
                        <WrapItem key={category}>
                            <HStack
                                spacing={2}
                                bg="beige.200"
                                borderRadius="12px"
                                borderColor="brown.500"
                                borderWidth={1}
                                px="12px"
                                py="8px"
                                align="center"
                            >
                                <Text

                                    fontSize={22}
                                    fontWeight="bold"
                                    color="brown.500"
                                >
                                    {category}
                                </Text>
                                <IconButton
                                    // icon={<CloseIcon />}
                                    onClick={() => removeCategory(category)}
                                    variant="ghost"
                                    size="sm"
                                    color="brown.500"
                                    aria-label="Удалить категорию"
                                />
                            </HStack>
                        </WrapItem>
                    ))}
                </Wrap>
            </VStack>
        </HStack>
    )
}