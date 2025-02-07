import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Image, Text, Button, HStack, VStack, Textarea, Box, IconButton } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { Plus, addPhoto } from "./index";

export const StepAdding = () => {
    const { control, handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            steps: [],
            photo: null,
            description: "",
        },
    });

    const steps = watch("steps"); // Следим за шагами
    const fileInputRef = useRef(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setValue("photo", event.target.result);
            reader.readAsDataURL(file);
        }
    };

    const addStep = () => {
        const photo = watch("photo");
        const description = watch("description");

        if (photo || description.trim()) {
            setValue("steps", [...steps, { photo, description }]);
            setValue("photo", null);
            setValue("description", "");
        }
    };

    const removeStep = (index) => {
        setValue(
            "steps",
            steps.filter((_, i) => i !== index)
        );
    };

    return (
        <form onSubmit={handleSubmit(() => { })}>
            <VStack align="center" w="100%" spacing={4}>
                <Text fontSize="1.6vw" fontWeight="bold" fontStyle="italic" color="brown.500">
                    Пошаговый рецепт
                </Text>

                <HStack spacing={4} align="start" w="100%" justify="center">
                    <Box
                        w="7.8vw"
                        h="7.8vw"
                        bg={watch("photo") ? "transparent" : "grey.50"}
                        cursor="pointer"
                        border="2px dashed brown.500"
                        borderRadius="15px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        _hover={{ bg: "beige.50" }}
                        onClick={() => fileInputRef.current.click()}
                    >
                        {watch("photo") ? (
                            <Image src={watch("photo")} alt="Превью фото" boxSize="100%" objectFit="cover" />
                        ) : (
                            <VStack spacing={2}>
                                <Image src={addPhoto} alt="Фотоаппарат" boxSize="2.6vw" />
                                <Text fontSize="0.8vw" fontWeight={600} color="brown.500" textAlign="center">
                                    Добавить фото
                                </Text>
                            </VStack>
                        )}
                        <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handlePhotoChange} />
                    </Box>

                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <Textarea
                                {...field}
                                placeholder="Введите описание шага"
                                w="30vw"
                                h="7.8vw"
                                border="2px solid brown"
                                borderRadius="15px"
                                fontSize="0.8vw"
                                resize="none" // Отключаем ручное изменение размера
                                overflowY="auto" // Включаем вертикальную прокрутку
                                transition="all 0.3s ease-in-out"
                                _hover={{ borderColor: "orange.300" }}
                                _focus={{
                                    outline: "none",
                                    borderColor: "orange.500",
                                    boxShadow: "0 0 8px orange.500"
                                }}
                            />
                        )}
                    />

                </HStack>

                <Button onClick={addStep} variant="unstyled" display="flex" alignItems="center"
                    _hover={{
                        ".hover-effect": { color: "orange.300", filter: "brightness(1.2)" },
                    }}
                >
                    <Image src={Plus} alt="Добавить" boxSize="30px" mr={2} className="hover-effect" />
                    <Text fontSize="1.1vw" fontWeight="bold" color="orange.600" className="hover-effect">
                        Добавить шаг
                    </Text>
                </Button>
            </VStack>

            <VStack spacing={4} align="start" w="100%" maxW="800px" mt={4}>
                {steps.map((step, index) => (
                    <HStack key={index} spacing={4} align="center" w="100%">
                        <Box
                            w="150px"
                            h="150px"
                            bg="gray.100"
                            borderRadius="md"
                            overflow="hidden"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            border="2px solid brown.500"
                        >
                            {step.photo ? (
                                <Image src={step.photo} alt={`Шаг ${index + 1}`} boxSize="100%" objectFit="cover" />
                            ) : (
                                <Text fontWeight="bold" color="gray.400">
                                    Фото
                                </Text>
                            )}
                        </Box>

                        <Text fontSize="0.8vw" fontWeight="bold" color="brown.500" flex="1">
                            {step.description || "Без описания"}
                        </Text>

                        <IconButton
                            icon={<AiOutlineClose />}
                            onClick={() => removeStep(index)}
                            size="sm"
                            variant="ghost"
                            color="brown.500"
                            aria-label="Удалить шаг"
                        />
                    </HStack>
                ))}
            </VStack>
        </form>
    );
};
