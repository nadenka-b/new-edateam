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
        <HStack spacing={8} align="flex-start" justifyContent="space-between" w="100%">
            {/* Секция с текстом "Категория блюда" */}
            <VStack align="flex-start" >
                <Text
                    fontFamily="var(--main-font)"
                    fontStyle="italic"
                    fontSize={{
                        lg: "1.4em",
                        xl: "1.6em",
                    }}
                    fontWeight={800}
                    color="var(--color-brown)"
                >
                    Категория блюда
                </Text>

                {/* Выпадающее меню под заголовком */}
                <Select
                    placeholder="Выберите категорию"
                    size="lg"
                    h="50px"
                    w="320px"
                    borderColor="var(--color-brown)"
                    fontFamily="var(--main-font)"
                    fontSize={{
                        lg: "1.2em",
                        xl: "1.4em",
                    }}
                    fontWeight="bold"
                    color="var(--color-brown)"
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
                    fontFamily="var(--main-font)"
                    fontSize={{
                        lg: "1.4em",
                        xl: "1.6em",
                    }}
                    fontWeight={800}
                    color="var(--color-brown)"
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
                                bg="var(--background-color)"
                                borderRadius="12px"
                                borderColor="var(--color-brown)"
                                borderWidth={1}
                                px="12px"
                                py="8px"
                                align="center"
                            >
                                <Text
                                    fontFamily="var(--main-font)"
                                    fontSize={{
                                        lg: "1.2em",
                                        xl: "1.4em",
                                    }}
                                    fontWeight="bold"
                                    color="var(--color-brown)"
                                >
                                    {category}
                                </Text>
                                <IconButton
                                    icon={<AiOutlineClose />}
                                    onClick={() => removeCategory(category)}
                                    variant="ghost"
                                    size="sm"
                                    color="var(--color-brown)"
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