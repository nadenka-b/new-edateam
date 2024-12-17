import React, { useRef, useState } from 'react';

import { Box, Input, VStack, HStack, IconButton, Wrap, WrapItem, Text, Image, Select } from "@chakra-ui/react";


import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { default as addPhoto } from "../assets/images/AddPhoto.svg";
// export { default as addPhoto} from '../../assets/images/'
import { CloseIcon } from '@chakra-ui/icons';

const AddRecipePage = () => {


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
                h="100vh"
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

                </VStack >

            </Box >
        </>
    );
};

export default AddRecipePage;
