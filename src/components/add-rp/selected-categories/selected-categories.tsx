// import React, { useState } from "react";
// import { HStack, Text, VStack, Select, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
// import { AiOutlineClose } from "react-icons/ai";

// export const SelectedCategories = () => {
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const addCategory = (category) => {
//         if (!selectedCategories.includes(category)) {
//             setSelectedCategories([...selectedCategories, category]);
//         }
//     };

//     const removeCategory = (category) => {
//         setSelectedCategories(selectedCategories.filter((item) => item !== category));
//         //Отфильтруйте категорию, которую нужно удалить, создав новый массив, исключающий выбранную категорию
//     };

//     return (
//         <HStack align="flex-start" w="100%" py={2} justifyContent="space-between">
//             {/* Секция с текстом "Категория блюда" */}
//             <VStack align="flex-start">
//                 <Text
//                     fontStyle="italic"
//                     fontSize="1.6vw"
//                     fontWeight="bold"
//                     color="brown.500"
//                 >
//                     Категория блюда
//                 </Text>

//                 {/* Выпадающее меню под заголовком */}
//                 <Select
//                     placeholder="Выберите категорию"
//                     h="2.6vw"
//                     w="20vw"
//                     borderColor="brown.500"
//                     fontFamily="var(--main-font)"
//                     fontSize="1.4vw"
//                     fontWeight="bold"
//                     color="brown.500"
//                     borderRadius="0.8vw"
//                     iconSize="1.6vw" // Adjusts the dropdown arrow size
//                     onChange={(e) => addCategory(e.target.value)} // когда пользователь выбирает новую категорию, функция addCategory вызывается с выбранным значением
//                 >
//                     <option value="Супы">Супы</option>
//                     <option value="Гарнир">Гарнир</option>
//                     <option value="Десерт">Десерт</option>
//                     <option value="Основное блюдо">Основное блюдо</option>
//                 </Select>
//             </VStack>

//             {/* Секция с выбранными категориями справа */}
//             <VStack align="flex-end" w="100%" maxWidth={300}>
//                 <Text
//                     fontFamily="var(--main-font)"
//                     fontSize="1.6vw"
//                     fontWeight="bold"
//                     color="brown.500"
//                     fontStyle="italic"
//                     whiteSpace="nowrap" // Prevent text wrapping
//                 >
//                     Выбранные категории
//                 </Text>

//                 {/* Контейнер для выбранных категорий */}
//                 <Wrap spacing={2} maxWidth="15.6vw" overflow="hidden" w="100%">
//                     {selectedCategories.map((category) => (
//                         <WrapItem key={category}>
//                             <HStack
//                                 spacing={2}
//                                 bg="beige.200"
//                                 borderRadius="0.6vw"
//                                 borderColor="brown.500"
//                                 borderWidth={1}
//                                 px="10px"
//                                 py="6px"
//                                 align="center"
//                             >
//                                 <Text
//                                     fontFamily="var(--main-font)"
//                                     fontSize="1.4vw"
//                                     fontWeight="bold"
//                                     color="brown.500"
//                                 >
//                                     {category}
//                                 </Text>
//                                 <IconButton
//                                     icon={<AiOutlineClose />}
//                                     onClick={() => removeCategory(category)}
//                                     variant="ghost"
//                                     size="sm"
//                                     color="brown.500"
//                                     aria-label="Удалить категорию"
//                                     fontSize="0.8vw" // Adjusts the close icon size
//                                 />
//                             </HStack>
//                         </WrapItem>
//                     ))}
//                 </Wrap>
//             </VStack>
//         </HStack>
//     );
// };

import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { HStack, Text, VStack, Select, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";

export const SelectedCategories = () => {
    const { control, setValue, watch } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "selectedCategories",
    });

    const selectedCategories = watch("selectedCategories", []);

    const addCategory = (category) => {
        if (category && !selectedCategories.some((item) => item.value === category)) {
            append({ value: category });
        }
        setValue("category", ""); // Сбрасываем селект после выбора
    };

    return (
        <HStack align="flex-start" w="100%" py={2} justifyContent="space-between">
            <VStack align="flex-start">
                <Text fontStyle="italic" fontSize="1.6vw" fontWeight="bold" color="brown.500">
                    Категория блюда
                </Text>

                <Select
                    placeholder="Выберите категорию"
                    h="2.6vw"
                    w="20vw"
                    borderColor="brown.500"
                    fontFamily="var(--main-font)"
                    fontSize="1.4vw"
                    fontWeight="bold"
                    color="brown.500"
                    borderRadius="0.8vw"
                    iconSize="1.6vw"
                    onChange={(e) => addCategory(e.target.value)}
                >
                    <option value="Супы">Супы</option>
                    <option value="Гарнир">Гарнир</option>
                    <option value="Десерт">Десерт</option>
                    <option value="Основное блюдо">Основное блюдо</option>
                </Select>
            </VStack>

            <VStack align="flex-end" w="100%" maxWidth={300}>
                <Text
                    fontFamily="var(--main-font)"
                    fontSize="1.6vw"
                    fontWeight="bold"
                    color="brown.500"
                    fontStyle="italic"
                    whiteSpace="nowrap"
                >
                    Выбранные категории
                </Text>

                <Wrap spacing={2} maxWidth="15.6vw" overflow="hidden" w="100%">
                    {fields.map((category, index) => (
                        <WrapItem key={category.id}>
                            <HStack
                                spacing={2}
                                bg="beige.200"
                                borderRadius="0.6vw"
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
                                    {category.value}
                                </Text>
                                <IconButton
                                    icon={<AiOutlineClose />}
                                    onClick={() => remove(index)}
                                    variant="ghost"
                                    size="sm"
                                    color="brown.500"
                                    aria-label="Удалить категорию"
                                    fontSize="0.8vw"
                                />
                            </HStack>
                        </WrapItem>
                    ))}
                </Wrap>
            </VStack>
        </HStack>
    );
};
