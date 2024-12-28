import React, { useRef, useState } from "react";
import { Image, Text, VStack, Box } from "@chakra-ui/react";

import { addPhoto } from "./index";

export const DishPhoto = () => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState(null); // Состояние для хранения имени файла

    // Функция для обработки изменения файла
    const handleFileChange = (event) => { //Запускается, когда пользователь выбирает файл
        const file = event.target.files[0]; //Извлекает выбранный файл
        if (file) {
            // Извлекаем имя файла и его расширение
            const name = file.name;
            const fileExtension = name.split('.').pop(); // Получаем расширение файла

            // Сохраняем полное имя файла (включая расширение)
            setFileName(`${name} (${fileExtension})`); //Извлекает имя и расширение файла и обновляет состояние
        }
    };

    return (
        <VStack
        py={3}
            spacing="0.2vw"
            align="center"
            w="100%">
            <Text
                fontFamily="var(--main-font)"
                fontSize="1.6vw"
                fontWeight="bold"
                color="brown.500"
                fontStyle="italic"
            >
                Фото готового блюда
            </Text>
            <Box
                w="45vw"
                h="18.3vw"
                borderRadius="0.8vw"
                border="2px dashed"
                borderColor="brown.500"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="grey.50"
                cursor="pointer"
                _hover={{ bg: "beige.50" }}
                flexDirection="column"
                onClick={() => fileInputRef.current.click()} // Trigger the file input click
            >
                <Image
                    src={addPhoto}
                    alt="Фотоаппарат"
                    boxSize="2.6vw"
                    mb={2}
                />
                {/* Если файл выбран, отображаем его имя */}
                {fileName ? (
                    <Text
                        fontSize="1vw"
                        fontWeight={600}
                        color="brown.500"
                        mb={2}
                    >
                        Выбран файл: {fileName}
                    </Text>
                ) : (

                    <Text
                        fontSize="1vw"
                        fontWeight={600}
                        color="brown.500"
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
    )
}