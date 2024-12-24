import React, { useRef, useState } from "react";
import { Image, Text, VStack, Box } from "@chakra-ui/react";

import { addPhoto } from "./index";

export const DishPhoto = () => {
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

    return (
        <VStack spacing={4} align="center" w="100%">
            <Text
                fontSize={32}
                fontWeight="bold"
                color="brown.500"
                fontStyle="italic"
            >
                Фото готового блюда
            </Text>
            <Box
                w="918px"
                h="353px"
                borderRadius="15px"
                border="2px dashed brown.500"
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
                    boxSize="50px"
                    mb={2}
                />
                {/* Если файл выбран, отображаем его имя */}
                {fileName ? (
                    <Text
                        fontSize={16}
                        fontWeight={600}
                        color="brown.500"
                        mb={2}
                    >
                        Выбран файл: {fileName}
                    </Text>
                ) : (

                    <Text
                        fontSize={20}
                        fontWeight={600}
                        // fontStyle="italic"
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