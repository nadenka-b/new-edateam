import React, { useState } from "react";
import { HStack, Text, VStack, Select, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
// import { CloseIcon } from '@chakra-ui/icons';
import { AiOutlineClose } from "react-icons/ai";

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
        <HStack align="flex-start" w="100%" py={2} justifyContent="space-between">
            {/* Секция с текстом "Категория блюда" */}
            <VStack align="flex-start">
                <Text
                    fontStyle="italic"
                    fontSize="1.6vw"
                    fontWeight="bold"
                    color="brown.500"
                >
                    Категория блюда
                </Text>

                {/* Выпадающее меню под заголовком */}
                <Select
                    placeholder="Выберите категорию"
                    size="lg"
                    h="2.6vw"
                    w="21vw"
                    borderColor="brown.500"
                    fontFamily="var(--main-font)"
                    fontSize="1.4vw"
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
            <VStack align="flex-end" w="100%" maxWidth={300}>
                <Text
                    fontFamily="var(--main-font)"
                    fontSize="1.6vw"
                    fontWeight="bold"
                    color="brown.500"
                    fontStyle="italic"
                >
                    Выбранные категории
                </Text>

                {/* Контейнер для выбранных категорий */}
                <Wrap spacing={2} maxWidth="300px" overflow="hidden" w="100%">
                    {selectedCategories.map((category) => (
                        <WrapItem key={category}>
                            <HStack
                                spacing={2}
                                bg="beige.200"
                                borderRadius="12px"
                                borderColor="brown.500"
                                borderWidth={1}
                                px="10px"
                                py="6px"
                                align="center"
                            >
                                <Text
                                    fontFamily="var(--main-font)"
                                    fontSize="1.4vw"
                                    fontWeight="bold"
                                    color="brown.500"
                                >
                                    {category}
                                </Text>
                                <IconButton
                                    icon={<AiOutlineClose />}
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