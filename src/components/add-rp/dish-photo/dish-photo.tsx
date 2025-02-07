import React, { useRef, useState } from "react";
import { Image, Text, VStack, Box } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { addPhoto } from "./index"; // Иконка фотоаппарата

export const DishPhoto = () => {
    const { register, setValue, watch } = useFormContext();
    const fileInputRef = useRef(null); // ref для скрытого input
    const [preview, setPreview] = useState(null); // Хранит ссылку на изображение

    const file = watch("dishPhoto"); // Следим за файлом

    // Обработчик выбора файла
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setValue("dishPhoto", event.target.files); // Обновляем состояние формы
            setPreview(URL.createObjectURL(selectedFile)); // Создаем ссылку для предпросмотра
        }
    };

    return (
        <VStack py={3} spacing="0.2vw" align="center" w="100%">
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
                onClick={() => fileInputRef.current.click()} // Открываем окно выбора файла
            >
                {/* Если есть изображение - показываем его, иначе иконку */}
                {preview ? (
                    <Image src={preview} alt="Предпросмотр" boxSize="100%" borderRadius="0.8vw" />
                ) : (
                    <>
                        <Image src={addPhoto} alt="Фотоаппарат" boxSize="2.6vw" mb={2} />
                        <Text fontSize="1vw" fontWeight={600} color="brown.500" mb={2}>
                            {file?.[0]?.name ? `Выбран файл: ${file[0].name}` : "Нажмите, чтобы добавить фото"}
                        </Text>
                    </>
                )}
                {/* Скрытый input */}
                <input
                    type="file"
                    accept="image/*"
                    {...register("dishPhoto")}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange} // Обработчик загрузки
                />
            </Box>
        </VStack>
    );
};
