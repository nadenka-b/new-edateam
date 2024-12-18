import React, { useRef, useState } from 'react';

import { Box, Input, VStack, HStack, IconButton, Wrap, WrapItem, Text, Image, Select, ListItem, List, Button } from "@chakra-ui/react";


import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { default as addPhoto } from "../assets/images/AddPhoto.svg";
import { default as Plus } from "../assets/images/Plus.svg";

// export { default as addPhoto} from '../../assets/images/'
import { AddIcon, CloseIcon } from '@chakra-ui/icons';

const AddRecipePage = () => {

    const [steps, setSteps] = useState([]);
    const [currentDescription, setCurrentDescription] = useState("");
    const [currentPhoto, setCurrentPhoto] = useState(null);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCurrentPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const addStep = () => {
        if (currentDescription || currentPhoto) {
            setSteps([...steps, { description: currentDescription, photo: currentPhoto }]);
            setCurrentDescription("");
            setCurrentPhoto(null);
        }
    };



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


    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState(null); // Состояние для хранения имени файла

    // Функция для обработки изменения файла
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Извлекаем имя файла и его расширение
            const name = file.name;
            const fileExtension = name.split('.').pop(); // Получаем расширение файла

            // Сохраняем полное имя файла (включая расширение)
            setFileName(`${name} (${fileExtension})`);
        }
    };
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
        <>
            <Header />
            <Box
                bg="#FFE6C3"
                w="1419px"
                h="auto"
                mx="auto"
                p={6}
                borderRadius="md"
                boxShadow="md"
                display="flex"
                justifyContent="center"

            >
                <VStack spacing="25px" align="center">
                    <Input
                        placeholder="Название рецепта"
                        size="lg"
                        maxW="550px"
                        fontFamily="var(--main-font)"
                        fontSize={64}
                        fontStyle="italic"
                    />

                    <HStack spacing={8} align="center" justifyContent="space-between" w="100%">
                        <Text fontFamily="var(--main-font)" fontStyle="italic" fontSize={32} fontWeight="bold" color="#7E4925" mr={10}>
                            Время приготовления
                        </Text>

                        <Input
                            placeholder="0"
                            size="sm"
                            borderRadius={15}
                            w="100px"
                            textAlign="center"
                            border="2px solid #7E4925"
                            _placeholder={{ color: "#7E4925" }}
                            fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28}
                        />
                        <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28} color="#7E4925">
                            час(ов)
                        </Text>

                        <Input
                            placeholder="0"
                            size="sm"
                            borderRadius={15}
                            w="100px"
                            textAlign="center"
                            border="2px solid #7E4925"
                            _placeholder={{ color: "#7E4925" }}
                            fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28}
                        />
                        <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28} color="#7E4925">
                            минут
                        </Text>
                    </HStack>

                    <VStack spacing={4} align="center" w="100%">
                        <Text
                            fontFamily="var(--main-font)"
                            fontSize={32}
                            fontWeight="bold"
                            color="#7E4925"
                            fontStyle="italic"
                        >
                            Фото готового блюда
                        </Text>
                        <Box
                            w="700px"
                            h="200px"
                            borderRadius="15px"
                            border="2px dashed #7E4925"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            bg="white"
                            cursor="pointer"
                            _hover={{ bg: "#FFF4E0" }}
                            flexDirection="column"
                            onClick={() => fileInputRef.current.click()} // Trigger the file input click
                        >
                            <Image
                                src={addPhoto}
                                alt="Часы"
                                boxSize="50px"
                                mb={2}
                            />
                            {/* Если файл выбран, отображаем его имя */}
                            {fileName ? (
                                <Text
                                    fontFamily="var(--main-font)"
                                    fontSize={16}
                                    fontWeight={600}
                                    color="#7E4925"
                                    mb={2}
                                >
                                    Выбран файл: {fileName}
                                </Text>
                            ) : (

                                <Text
                                    fontFamily="var(--main-font)"
                                    fontSize={20}
                                    fontWeight={800}
                                    fontStyle="italic"
                                    color="#7E4925"
                                    mb={2}
                                >
                                    Нажмите, чтобы добавить фото
                                </Text>
                            )}

                            {/* Скрытый input для загрузки файла */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                style={{ display: 'none' }} // Скрыть элемент
                                onChange={handleFileChange} // Обработчик изменения файла
                            />


                            <input
                                ref={fileInputRef}
                                type="file"
                                style={{ display: 'none' }} // Hide the file input element
                                onChange={handleFileChange} // Handle file selection
                            />
                        </Box>
                    </VStack>

                    <HStack spacing={8} align="center" justifyContent="space-between" w="100%">
                        {/* Секция с текстом "Категория блюда" */}
                        <VStack align="center" >
                            <Text
                                fontFamily="var(--main-font)"
                                fontStyle="italic"
                                fontSize={32}
                                fontWeight="bold"
                                color="#7E4925"
                            >
                                Категория блюда
                            </Text>

                            {/* Выпадающее меню под заголовком */}
                            <Select
                                placeholder="Выберите категорию"
                                size="lg"
                                w="300px"
                                fontFamily="var(--main-font)"
                                fontStyle="italic"
                                fontWeight="bold"
                                borderColor="#7E4925"
                                borderRadius={15}
                                onChange={(e) => addCategory(e.target.value)} // Добавление категории
                            >
                                <option value="Супы">Супы</option>
                                <option value="Гарнир">Гарнир</option>
                                <option value="Десерт">Десерт</option>
                                <option value="Основное блюдо">Основное блюдо</option>
                                <option value="Основное блюдо2">Основное блюдо1</option>

                                <option value="Основное блюдо1">Основное блюдо2</option>

                            </Select>
                        </VStack>

                        {/* Секция с выбранными категориями справа */}
                        <VStack align="start" w="100%">
                            <Text
                                fontFamily="var(--main-font)"
                                fontSize={32}
                                fontWeight={800}
                                color="#7E4925"
                                fontStyle="italic"

                            >
                                Выбранные категории
                            </Text>

                            {/* Контейнер для выбранных категорий */}
                            <Wrap spacing={4} maxWidth="400px" overflow="hidden" w="100%">
                                {selectedCategories.map((category) => (
                                    <WrapItem key={category}>
                                        <HStack
                                            spacing={2}
                                            bg="#FFF0DA"
                                            borderRadius="12px"
                                            borderColor="#7E4925"
                                            borderWidth={1}
                                            px="12px"
                                            py="8px"
                                            align="center"
                                        >
                                            <Text
                                                fontFamily="var(--main-font)"
                                                fontSize={28}
                                                fontWeight="bold"
                                                color="#7E4925"
                                            >
                                                {category}
                                            </Text>
                                            <IconButton
                                                icon={<CloseIcon />}
                                                onClick={() => removeCategory(category)}
                                                variant="ghost"
                                                size="sm"
                                                color="#7E4925"
                                                aria-label="Удалить категорию"
                                            />
                                        </HStack>
                                    </WrapItem>
                                ))}
                            </Wrap>
                        </VStack>
                    </HStack>

                    {/* <Box
                        bg="#FFE6C3"
                        w="100%"
                        minH="100vh"
                        p={6}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    > */}
                    <VStack spacing={4} align="center" w="100%">
                        {/* Заголовок */}
                        <Text
                            fontFamily="var(--main-font)"
                            fontSize={32}
                            fontWeight="bold"
                            color="#7E4925"
                            fontStyle="italic"
                        >
                            Ингредиенты
                        </Text>

                        {/* Поле ввода */}
                        <HStack
                            w="659px"
                            align="center"
                            border="2px solid #7E4925"
                            borderRadius={15}
                            p={2}
                            bg="white"
                        >
                            <Input
                                placeholder="Например, курица"
                                border="none"
                                _focus={{ outline: "none" }}
                                fontFamily="var(--main-font)"
                                fontWeight={700}
                                fontSize="24px"
                                color="#979797"
                                flex="3"
                                value={ingredientName}
                                onChange={(e) => setIngredientName(e.target.value)}
                            />

                            <Box w="2px" h="130%" bg="#7E4925" />

                            <Input
                                placeholder="0"
                                border="none"
                                _focus={{ outline: "none" }}
                                textAlign="center"
                                fontFamily="var(--main-font)"
                                fontWeight={700}
                                fontSize="24px"
                                color="#7E4925"
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
                                    ".hover-effect": { color: "#FF9901", filter: "brightness(1.2)" }, // Единый стиль
                                }}
                            // alignItems="center"
                            // _hover={{ color: "#FF9901" }}
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
                                    fontSize="lg"
                                    fontWeight="bold"
                                    color="#FF6601"
                                    className='hover-effect'
                                >
                                    Добавить ингредиент
                                </Text>
                            </Button>

                        </HStack>

                        {/* Список ингредиентов */}
                        <List spacing={3} w="100%" maxW="700px">
                            {ingredients.map((ingredient, index) => (
                                <ListItem
                                    key={index}
                                    border="2px solid #7E4925"
                                    borderRadius="12px"
                                    p={4}
                                    bg="#FFF0DA"
                                    fontFamily="var(--main-font)"
                                    fontSize="lg"
                                    fontWeight="bold"
                                    color="#7E4925"
                                >
                                    {ingredient.name} - {ingredient.quantity}
                                </ListItem>
                            ))}
                        </List>
                    </VStack>
                    <VStack spacing={6} align="center" w="100%" p={6}>
                        {/* Заголовок */}
                        <Text fontFamily="var(--main-font)" fontSize={32} fontWeight="bold" fontStyle="italic" color="#7E4925">
                            Пошаговый рецепт
                        </Text>

                        {/* Поле для добавления шага */}
                        <HStack spacing={4} align="start" w="100%" maxW="800px">
                            {/* Серый квадрат для добавления фото */}
                            <Box
                                w="150px"
                                h="150px"
                                bg="gray.300"
                                borderRadius="md"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                cursor="pointer"
                                onClick={() => document.getElementById("photoInput").click()}
                            >

                                <Text fontFamily="var(--main-font)" fontWeight="bold" color="gray.600">
                                    Добавить фото
                                </Text>
                                <input
                                    id="photoInput"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handlePhotoChange}
                                />
                            </Box>

                            {/* Инпут для описания шага */}
                            <Input
                                placeholder="Введите описание шага"
                                value={currentDescription}
                                onChange={(e) => setCurrentDescription(e.target.value)}
                                flex="1"
                                border="2px solid #7E4925"
                                borderRadius="15px"
                                fontFamily="var(--main-font)"
                                fontSize="16px"
                            />
                        </HStack>

                        {/* Кнопка для добавления шага */}
                        <Button
                            onClick={addStep}
                            variant="unstyled"
                            display="flex"
                            _hover={{
                                ".hover-effect": { color: "#FF9901", filter: "brightness(1.2)" }, // Единый стиль
                            }}
                        >


                            <Image
                                src={Plus} // Укажите путь к вашему изображению
                                alt="Добавить"
                                boxSize="30px"
                                mr={2}
                                className="hover-effect" // Класс для стилизации при наведении

                            />

                            <Text
                                fontFamily="var(--main-font)"
                                fontSize="lg"
                                fontWeight="bold"
                                color="#FF6601"
                                className="hover-effect" // Класс для стилизации при наведении

                            >
                                Добавить ингредиент
                            </Text>
                        </Button>
                        {/* Отображение шагов */}
                        <VStack spacing={4} align="start" w="100%" maxW="800px">
                            {steps.map((step, index) => (
                                <HStack key={index} spacing={4} align="center" w="100%">
                                    {/* Фото шага */}
                                    <Box
                                        w="150px"
                                        h="150px"
                                        bg="gray.100"
                                        borderRadius="md"
                                        overflow="hidden"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        {step.photo ? (
                                            <Image src={step.photo} alt={`Шаг ${index + 1}`} boxSize="100%" objectFit="cover" />
                                        ) : (
                                            <Text fontFamily="var(--main-font)" fontWeight="bold" color="gray.400">
                                                Фото
                                            </Text>
                                        )}
                                    </Box>

                                    {/* Описание шага */}
                                    <Text
                                        fontFamily="var(--main-font)"
                                        fontSize="16px"
                                        fontWeight="bold"
                                        color="#7E4925"
                                        flex="1"
                                    >
                                        {step.description || "Без описания"}
                                    </Text>
                                </HStack>
                            ))}
                        </VStack>
                    </VStack>

                    <Button
                        bg="#FF6601"
                        
                        _hover={{ bg: "#FF9901" }} // Цвет при наведении
                        fontFamily="var(--main-font)"
                        fontStyle="italic"
                        fontWeight={400}
                        fontSize={32}
                        color="#fff0da"
                        borderRadius="15px"
                        px={8}
                        py={4}
                    >
                        Отправить
                    </Button>

                </VStack >



            </Box >
        </>
    );
};

export default AddRecipePage;
