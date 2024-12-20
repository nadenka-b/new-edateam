import React, { useRef, useState } from 'react';
import { Box, Input, VStack, HStack, IconButton, Wrap, WrapItem, Text, Image, Select, ListItem, List, Button } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from '@chakra-ui/icons';

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { default as addPhoto } from "../assets/images/AddPhoto.svg";
import { default as Plus } from "../assets/images/Plus.svg";


const AddRecipePage = () => {
    const [photoPreview, setPhotoPreview] = useState(null)
    const [steps, setSteps] = useState([]);
    const [currentDescription, setCurrentDescription] = useState("");
    const [currentPhoto, setCurrentPhoto] = useState(null);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPhotoPreview(e.target.result); // Сохраняем превью
            };
            reader.readAsDataURL(file);
        }
    };

    const addStep = () => {
        if (photoPreview || currentDescription.trim()) {
            setSteps((prevSteps) => [
                ...prevSteps,
                { photo: photoPreview, description: currentDescription },
            ]);
            setPhotoPreview(null); // Сброс фото
            setCurrentDescription(""); // Сброс описания
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
                bg="var(--background-card)"
                w="1419px"
                h="auto"
                mx="auto"
                p={6}
                display="flex"
                justifyContent="center"

            >
                <VStack spacing={25} align="center">
                    <Input
                        placeholder="Название рецепта"
                        size="lg"
                        maxW={500}
                        fontFamily="var(--main-font)"
                        fontSize={50}
                        fontStyle="italic"
                    />

                    <HStack spacing={8} align="center" w="100%">
                        <Text fontFamily="var(--main-font)" fontStyle="italic" fontSize={32} fontWeight="bold" color="var(--color-brown)" mr={10}>
                            Время приготовления
                        </Text>

                        <Input
                            placeholder="0"
                            size="sm"
                            borderRadius={15}
                            w="100px"
                            textAlign="right"
                            border="2px solid var(--color-brown)"
                            _placeholder={{ color: "var(--color-brown)" }}
                            fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28}
                        />
                        <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28} color="var(--color-brown)">
                            час(ов)
                        </Text>

                        <Input
                            placeholder="0"
                            size="sm"
                            borderRadius={15}
                            w="100px"
                            textAlign="right"
                            border="2px solid var(--color-brown)"
                            _placeholder={{ color: "var(--color-brown)" }}
                            fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28}
                        />
                        <Text fontFamily="var(--main-font)" fontStyle="italic" fontWeight={800} fontSize={28} color="var(--color-brown)">
                            минут
                        </Text>
                    </HStack>

                    <VStack spacing={4} align="center" w="100%">
                        <Text
                            fontFamily="var(--main-font)"
                            fontSize={32}
                            fontWeight="bold"
                            color="var(--color-brown)"
                            fontStyle="italic"
                        >
                            Фото готового блюда
                        </Text>
                        <Box
                            w="918px"
                            h="353px"
                            borderRadius="15px"
                            border="2px dashed var(--color-brown)"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            bg="var(--color-add-photo)"
                            cursor="pointer"
                            _hover={{ bg: "var(--color--add-photo2)" }}
                            flexDirection="column"
                            onClick={() => fileInputRef.current.click()} // Trigger the file input click
                        >
                            <Image
                                src={addPhoto}
                                alt="Фотоаппарат"
                                boxSize="50px"
                                mb={2}
                            />
                            {/* Если файл выбран, отображаем его имя */}
                            {fileName ? (
                                <Text
                                    fontFamily="var(--main-font)"
                                    fontSize={16}
                                    fontWeight={600}
                                    color="var(--color-brown)"
                                    mb={2}
                                >
                                    Выбран файл: {fileName}
                                </Text>
                            ) : (

                                <Text
                                    fontFamily="var(--main-font)"
                                    fontSize={20}
                                    fontWeight={600}
                                    // fontStyle="italic"
                                    color="var(--color-brown)"
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

                        </Box>
                    </VStack>

                    <HStack spacing={8} align="flex-start" justifyContent="space-between" w="100%">
                        {/* Секция с текстом "Категория блюда" */}
                        <VStack align="flex-start" >
                            <Text
                                fontFamily="var(--main-font)"
                                fontStyle="italic"
                                fontSize={32}
                                fontWeight="bold"
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
                                fontSize={22}
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
                                fontSize={32}
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
                                                fontSize={22}
                                                fontWeight="bold"
                                                color="var(--color-brown)"
                                            >
                                                {category}
                                            </Text>
                                            <IconButton
                                                icon={<CloseIcon />}
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
                            color="var(--color-brown)"
                            fontStyle="italic"
                        >
                            Ингредиенты
                        </Text>

                        {/* Поле ввода */}
                        <HStack
                            w="659px"
                            align="center"
                            border="2px solid var(--color-brown)"
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
                                color="var(--color-brown)"
                                flex="3"
                                value={ingredientName}
                                onChange={(e) => setIngredientName(e.target.value)}
                            />

                            <Box w="2px" h="130%" bg="var(--color-brown)" />

                            <Input
                                placeholder="0"
                                border="none"
                                _focus={{ outline: "none" }}
                                textAlign="center"
                                fontFamily="var(--main-font)"
                                fontWeight={700}
                                fontSize="24px"
                                color="var(--color-brown)"
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
                                    ".hover-effect": { color: "var(--color--sent)", filter: "brightness(1.2)" }, // Единый стиль
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
                                    fontSize="lg"
                                    fontWeight="bold"
                                    color="var(--color--add-step-and-photo)"
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
                                    border="2px solid var(--color-brown)"
                                    borderRadius="12px"
                                    p={4}
                                    bg="var(--background-color)"
                                    fontFamily="var(--main-font)"
                                    fontSize="lg"
                                    fontWeight="bold"
                                    color="var(--color-brown)"
                                >
                                    {ingredient.name} - {ingredient.quantity}
                                </ListItem>
                            ))}
                        </List>
                    </VStack>
                    (
                    <VStack spacing={6} align="center" w="100%" p={6}>
                        {/* Заголовок */}
                        <Text fontFamily="var(--main-font)" fontSize={32} fontWeight="bold" fontStyle="italic" color="var(--color-brown)">
                            Пошаговый рецепт
                        </Text>

                        {/* Поле для добавления шага */}
                        <HStack spacing={4} align="start" w="100%" maxW="800px">
                            {/* Серый квадрат для добавления фото */}
                            <Box
                                w="150px"
                                h="150px"
                                bg={photoPreview ? "transparent" : "var(--color-add-photo)"} // Фон исчезает при наличии фото
                                cursor="pointer"
                                overflow="hidden"
                                borderRadius="15px"
                                border="2px dashed var(--color-brown)"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                _hover={{ bg: "var(--color--add-photo2)" }}
                                onClick={() => document.getElementById("photoInput").click()}
                            >
                                {photoPreview ? (
                                    <Image src={photoPreview} alt="Превью фото" boxSize="100%" objectFit="cover" />
                                ) : (
                                    <VStack justifyContent="center" alignItems="center" spacing={2}> {/* spacing создает отступ между элементами */}
                                        <Image
                                            src={addPhoto}
                                            alt="Фотоаппарат"
                                            boxSize="50px"
                                        />
                                        <Text fontFamily="var(--main-font)" fontSize={16} fontWeight={600} color="var(--color-brown)" textAlign="center">
                                            Добавить фото
                                        </Text>
                                    </VStack>
                                )}
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
                                h={20}
                                border="2px solid var(--color-brown)"
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
                                ".hover-effect": { color: "var(--color--sent)", filter: "brightness(1.2)" }, // Единый стиль
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
                                fontSize="lg"
                                fontWeight="bold"
                                color="var(--color--add-step-and-photo)"
                                className='hover-effect'
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
                                        border="2px solid var(--color-brown)"
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
                                        color="var(--color-brown)"
                                        flex="1"
                                    >
                                        {step.description || "Без описания"}
                                    </Text>
                                </HStack>
                            ))}
                        </VStack>
                    </VStack>

                    <Button
                        bg="var(--color--add-step-and-photo)"
                        _hover={{ bg: "var(--color--sent)" }} // Цвет при наведении
                        fontFamily="var(--main-font)"
                        fontStyle="italic"
                        fontWeight={400}
                        fontSize={32}
                        color="var(--background-color)"
                        borderRadius="15px"
                        px={8}
                        py={4}
                    >
                        Отправить
                    </Button>

                </VStack >



            </Box >
            <Footer />
        </>
    );
};

export default AddRecipePage;
