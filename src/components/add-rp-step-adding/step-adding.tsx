import React, { useState } from "react";
import { Image, Text, Button, HStack, VStack, Input, Box } from "@chakra-ui/react";

import { Plus, addPhoto } from "./index";

export const StepAdding = () => {
    const [photoPreview, setPhotoPreview] = useState(null)
    const [steps, setSteps] = useState([]);
    const [currentDescription, setCurrentDescription] = useState("");
    // const [currentPhoto, setCurrentPhoto] = useState(null);

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


    return (
        <>
            <Text fontFamily="var(--main-font)"
                fontSize={{
                    lg: "1.4em",
                    xl: "1.6em",
                }}
                fontWeight="bold"
                fontStyle="italic"
                color="var(--color-brown)">
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
                    Добавить шаг
                </Text>
            </Button>

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
        </>
    )
}