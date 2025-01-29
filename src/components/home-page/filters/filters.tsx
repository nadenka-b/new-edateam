import React, { useState, useRef } from "react";
import {
    IconButton,
    Button,
    Text,
    Select,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { PiListHeart } from "react-icons/pi";
import { IngredientFilter } from "./ingredient-filter";
import { TimeCooking } from "./time-cooking";

const selectList = [
    { id: 1, Name: "Завтраки" },
    { id: 2, Name: "Обеды" },
    { id: 3, Name: "Ужины" },
    { id: 4, Name: "Супы" },
    { id: 5, Name: "Гарниры" },
    { id: 6, Name: "Мясо" },
    { id: 7, Name: "Рыба" },
    { id: 8, Name: "Салаты" },
    { id: 9, Name: "Выпечка и десерты" }
];

export const Filters = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const [includeIngredients, setIncludeIngredients] = useState<string[]>([]);
    const [excludeIngredients, setExcludeIngredients] = useState<string[]>([]);

    const addIngredient = (ingredient: string, type: "include" | "exclude") => {
        if (type === "include" && !includeIngredients.includes(ingredient)) {
            setIncludeIngredients([...includeIngredients, ingredient]);
        }
        if (type === "exclude" && !excludeIngredients.includes(ingredient)) {
            setExcludeIngredients([...excludeIngredients, ingredient]);
        }
    };

    // const removeIngredient = (ingredient: string, type: "include" | "exclude") => {
    //     if (type === "include") {
    //         setIncludeIngredients(includeIngredients.filter(i => i !== ingredient));
    //     }
    //     if (type === "exclude") {
    //         setExcludeIngredients(excludeIngredients.filter(i => i !== ingredient));
    //     }
    // };


    return (
        <>
            <IconButton
                bg="transparent"
                _hover={{ opacity: 0.85, color: 'orange.500', bg: 'none' }}
                ref={btnRef}
                colorScheme='teal'
                onClick={onOpen}
                aria-label='list'
                color="orange.500"
                minW="2.2vw"
                h="2.2vw"
                icon={<PiListHeart fontSize='2.2vw' />}>
            </IconButton>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="xs"
            >
                <DrawerOverlay />
                <DrawerContent
                    w="25vw"
                    maxW="25vw"
                    maxH="100%"
                    border="0.3vw solid"
                    borderColor="orange.100"
                    bg="beige.300"
                    borderRadius="md"
                    boxShadow="lg"
                >
                    <DrawerCloseButton />
                    <DrawerHeader
                        color="orange.500"
                        fontSize="1.4vw"
                    >
                        Подбор рецептов
                    </DrawerHeader>

                    <DrawerBody>
                        <Text fontSize="1.2vw" color="orange.500">
                            Категории
                        </Text>
                        <Select
                            focusBorderColor="orange.100"
                            border="0.1vw solid"
                            bg="beige.200"
                            h="2.6vw" w="100%"
                            fontSize="1vw"
                            placeholder='Выберите категорию'
                            _hover={{ opacity: 0.85, borderColor: "orange.100" }}
                            color="brown.500"
                            mb="0.5vw"
                        >
                            {selectList.map((item, index) => (
                                <option key={index} value={item.id}>{item.Name}</option>
                            ))}
                        </Select>
                        <IngredientFilter //логика с ингредиентами должна быть немного другая, должно при нажатии на кнопку появляться где-то ниже выбранное, чтобы можно было несколько выбрать
                            placeholder="Например, курица"
                            title="Добавить ингредиент"
                            onIngredientSelect={(ingredient) => addIngredient(ingredient, "include")}
                        />
                        <IngredientFilter
                            placeholder="Например, чеснок"
                            title="Исключить ингредиент"
                            onIngredientSelect={(ingredient) => addIngredient(ingredient, "include")}
                        />
                        <TimeCooking />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            mr={3}
                            bg="beige.200"
                            color="brown.500"
                            border="0.1vw solid"
                            borderColor="brown.500"
                            fontSize="1.2vw"
                            _hover={{ opacity: 0.85, borderColor: "orange.100" }}
                        >
                            Сбросить
                        </Button>
                        <Button
                            bg="orange.200"
                            color="beige.200"
                            fontSize="1.2vw"
                            _hover={{ opacity: 0.85, borderColor: "orange.200" }}
                        >
                            Найти
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}