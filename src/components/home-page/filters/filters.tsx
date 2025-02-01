import React, { useState, useRef, useEffect } from "react";
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
    Wrap,
    WrapItem,
    HStack,
    Icon
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setIncludeIngredientsTitles, setExcludeIngredientsTitles, setTag, setCookTime } from '../../../__data__/slices/mainDishesSlice';
import { useGetTagsQuery } from '../../../__data__/services/mainApi';

import { PiListHeart } from "react-icons/pi";
import { TiPlus } from "react-icons/ti";
import { MdOutlineDelete } from "react-icons/md";
import { IngredientFilter } from "./ingredient-filter";
import { TimeCooking } from "./time-cooking";
import { AppDispatch, RootState } from "../../../__data__/store";

const options = [
    { value: 30, title: "<30мин" },
    { value: 60, title: "<1ч" },
    { value: 120, title: "<2ч" },
    { value: 0, title: "Любое" },
]

export const Filters = () => {
    const dispatch: AppDispatch = useDispatch();
    const selectedTagFromStore = useSelector((state: RootState) => state.dishes.tagIds);
    const selectedTimeFromStore = useSelector((state: RootState) => state.dishes.cookTime);
    const includeIngredientsFromStore = useSelector((state: RootState) => state.dishes.ingredientTitles);
    const excludeIngredientsFromStore = useSelector((state: RootState) => state.dishes.excludeIngredientTitles);
    const { data, error, isLoading } = useGetTagsQuery(null);

    useEffect(() => {
        setSelectedTag(selectedTagFromStore);
    }, [selectedTagFromStore]);


    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const [includeIngredients, setIncludeIngredients] = useState<string[]>(includeIngredientsFromStore);
    const [excludeIngredients, setExcludeIngredients] = useState<string[]>(excludeIngredientsFromStore);
    const [selectedTag, setSelectedTag] = useState(selectedTagFromStore);
    const [selectedTime, setSelectedTime] = useState(selectedTimeFromStore);

    const addIngredient = (ingredient: string, type: "include" | "exclude") => {
        if (type === "include" && !includeIngredients.includes(ingredient)) {
            setIncludeIngredients([...includeIngredients, ingredient]);
        }
        if (type === "exclude" && !excludeIngredients.includes(ingredient)) {
            setExcludeIngredients([...excludeIngredients, ingredient]);
        }
    };

    const removeIngredient = (ingredient: string, type: "include" | "exclude") => {
        if (type === "include") {
            setIncludeIngredients(includeIngredients.filter(i => i !== ingredient));
        }
        if (type === "exclude") {
            setExcludeIngredients(excludeIngredients.filter(i => i !== ingredient));
        }
    };

    const resetFilters = () => {
        setSelectedTag(0); // Сбрасываем категорию
        setSelectedTime(0); // Сбрасываем время
        setIncludeIngredients([]); // Очищаем выбранные ингредиенты
        setExcludeIngredients([]); // Очищаем исключенные ингредиенты
        dispatch(setTag(0));
        dispatch(setCookTime(0));
        dispatch(setIncludeIngredientsTitles([]));
        dispatch(setExcludeIngredientsTitles([]));
    };

    const handleSearch = () => { // здесь неправильная логика, ведь может быть не 0, а какое-то изменение
        if (selectedTag !== selectedTagFromStore) dispatch(setTag(selectedTag));
        if (selectedTime !== selectedTimeFromStore) dispatch(setCookTime(selectedTime));
        if (includeIngredients.length !== 0) dispatch(setIncludeIngredientsTitles(includeIngredients));
        if (excludeIngredients.length !== 0) dispatch(setExcludeIngredientsTitles(excludeIngredients));
        if (isOpen) onClose();
    };

    return (
        <>
            {isLoading && <div>Загрузка...</div>}
            {error && <div>Ошибка загрузки</div>}
            {data && <>
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
                                value={selectedTag}
                                onChange={(e) => setSelectedTag(Number(e.target.value))}
                                focusBorderColor="orange.100"
                                border="0.1vw solid"
                                bg="beige.200"
                                h="2.6vw" w="100%"
                                fontSize="1vw"
                                _hover={{ opacity: 0.85, borderColor: "orange.100" }}
                                color="brown.500"
                                mb="0.5vw"
                            >
                                <option value={0}>Выберите категорию</option>
                                {data.map((tag) => (
                                    <option key={tag.id} value={tag.id}>{tag.value}</option>
                                ))}
                            </Select>
                            <IngredientFilter
                                placeholder="Например, курица"
                                title="Добавить ингредиент"
                                onIngredientSelect={(ingredient) => addIngredient(ingredient, "include")}
                            />
                            <IngredientFilter
                                placeholder="Например, чеснок"
                                title="Исключить ингредиент"
                                onIngredientSelect={(ingredient) => addIngredient(ingredient, "exclude")}
                            />
                            <TimeCooking value={selectedTime} options={options} onChange={setSelectedTime} />
                            <Wrap mt="1vw">
                                {includeIngredients.map((ingredient, index) => (
                                    <WrapItem key={index}>
                                        <HStack
                                            border="0.08vw solid"
                                            borderColor="brown.500"
                                            bg="beige.200"
                                            borderRadius="1vw"
                                            h="3vw"
                                            pl="0.4vw"
                                            pr="0.4vw">
                                            <Icon as={TiPlus} fontSize="1.5vw" color="green.500" />
                                            <Text fontSize="1vw" color="brown.500" fontWeight="500">
                                                {ingredient}
                                            </Text>
                                            <IconButton
                                                color="red.500"
                                                bg="transparent"
                                                minW="1.5vw"
                                                h="1.5vw"
                                                aria-label="delete"
                                                onClick={() => removeIngredient(ingredient, "include")}
                                                icon={<MdOutlineDelete fontSize="1.5vw" />}
                                                _hover={{ opacity: 0.85 }}>
                                            </IconButton>
                                        </HStack>
                                    </WrapItem>
                                ))}
                                {excludeIngredients.map((ingredient, index) => (
                                    <WrapItem key={index}>
                                        <HStack
                                            border="0.08vw solid"
                                            borderColor="brown.500"
                                            bg="beige.200"
                                            borderRadius="1vw"
                                            h="3vw"
                                            pl="0.4vw"
                                            pr="0.4vw">
                                            <Icon as={TiPlus} transform="rotate(45deg)" fontSize="1.7vw" color="red.500" />
                                            <Text fontSize="1vw" color="brown.500" fontWeight="500">
                                                {ingredient}
                                            </Text>
                                            <IconButton
                                                color="red.500"
                                                bg="transparent"
                                                minW="1.5vw"
                                                h="1.5vw"
                                                aria-label="delete"
                                                onClick={() => removeIngredient(ingredient, "exclude")}
                                                icon={<MdOutlineDelete fontSize="1.5vw" />}
                                                _hover={{ opacity: 0.85 }}>
                                            </IconButton>
                                        </HStack>
                                    </WrapItem>
                                ))}
                            </Wrap>

                        </DrawerBody>

                        <DrawerFooter>
                            <Button
                                h="3.5vw"
                                w="7vw"
                                onClick={resetFilters}
                                mr="0.5vw"
                                bg="beige.200"
                                color="brown.500"
                                border="0.1vw solid"
                                borderColor="brown.500"
                                fontSize="1.2vw"
                                _hover={{ opacity: 0.85, borderColor: "orange.100" }}
                                _active={{ bg: "beige.50" }}
                            >
                                Сбросить
                            </Button>
                            <Button
                                h="3.5vw"
                                w="7vw"
                                onClick={handleSearch}
                                bg="orange.200"
                                color="beige.200"
                                fontSize="1.2vw"
                                _hover={{ opacity: 0.85, borderColor: "orange.200" }}
                                _active={{ bg: "orange.100" }}
                            >
                                Найти
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </>}
        </>
    );
}