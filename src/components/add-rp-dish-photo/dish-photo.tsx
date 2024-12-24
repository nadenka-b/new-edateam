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
        <VStack
        py={3}
            spacing={{
                lg: "0.5em",
                xl: "1em",
            }}
            align="center"
            w="100%">
            <Text
                fontFamily="var(--main-font)"
                fontSize={{
                    lg: "1.4em",
                    xl: "1.6em",
                }}
                fontWeight="bold"
                color="var(--color-brown)"
                fontStyle="italic"
            >
                Фото готового блюда
            </Text>
            <Box
                w={{
                    lg: "35em",
                    xl: "40em",
                }}
                h={{
                    lg: "14em",
                    xl: "20em",
                }}
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
    )
}