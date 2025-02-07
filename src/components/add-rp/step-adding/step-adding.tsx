// import React, { useState } from "react";
// import { Image, Text, Button, HStack, VStack, Input, Box } from "@chakra-ui/react";

// import { Plus, addPhoto } from "./index";

// export const StepAdding = () => {
//     const [photoPreview, setPhotoPreview] = useState(null)//Сохраняет предварительный просмотр загруженной фотографии для текущего шага
//     const [steps, setSteps] = useState([]);//Поддерживает массив всех добавленных шагов, где каждый шаг включает photo и description
//     const [currentDescription, setCurrentDescription] = useState("");//Содержит вводимый текст для описания шага

//     const handlePhotoChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 setPhotoPreview(e.target.result); // Сохраняем превью
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const addStep = () => {
//         //Перед добавлением шага убедились, что предоставили хотя бы фотографию или описание
//         if (photoPreview || currentDescription.trim()) {
//             setSteps((prevSteps) => [
//                 ...prevSteps,
//                 { photo: photoPreview, description: currentDescription },
//             ]);//Добавляет текущий шаг (фотографию и описание) в steps массив.
//             setPhotoPreview(null); // Сброс фото
//             setCurrentDescription(""); // Сброс описания
//         }
//     };


//     return (
//         <>
//             <Text fontFamily="var(--main-font)"
//                 fontSize="1.6vw"
//                 fontWeight="bold"
//                 fontStyle="italic"
//                 color="brown.500">
//                 Пошаговый рецепт
//             </Text>

//             {/* Поле для добавления шага */}
//             <HStack spacing={4} align="start" w="100%">
//                 {/* Серый квадрат для добавления фото */}
//                 <Box
//                     w="7.8vw"
//                     h="7.8vw"
//                     mr="1.6vw"
//                     bg={photoPreview ? "transparent" : "grey.50"} // Фон исчезает при наличии фото
//                     cursor="pointer"
//                     overflow="hidden"
//                     borderRadius="15px"
//                     border="2px dashed"
//                     borderColor="brown.500"
//                     display="flex"
//                     justifyContent="center"
//                     alignItems="center"
//                     _hover={{ bg: "beige.50" }}
//                     // Нажатие на поле с фотографией запускает скрытый <input> элемент для выбора файла
//                     onClick={() => document.getElementById("photoInput").click()}
//                 >
//                     {photoPreview ? (
//                         <Image src={photoPreview} alt="Превью фото" boxSize="100%" objectFit="cover" />
//                     ) : (
//                         <VStack justifyContent="center" alignItems="center" spacing={2}> {/* spacing создает отступ между элементами */}
//                             <Image
//                                 src={addPhoto}
//                                 alt="Фотоаппарат"
//                                 boxSize="2.6vw"
//                             />
//                             <Text fontSize="0.8vw" fontWeight={600} color="brown.500" textAlign="center">
//                                 Добавить фото
//                             </Text>
//                         </VStack>
//                     )}
//                     <input
//                         id="photoInput"
//                         type="file"
//                         accept="image/*"
//                         style={{ display: "none" }}
//                         onChange={handlePhotoChange}
//                     />
//                 </Box>


//                 {/* Инпут для описания шага */}
//                 <Input
//                     placeholder="Введите описание шага"
//                     value={currentDescription}
//                     onChange={(e) => setCurrentDescription(e.target.value)}
//                     flex="1"
//                     h="7.8vw"
//                     w={20}
//                     border="2px solid"
//                     borderColor="brown.500"
//                     borderRadius="15px"

//                     fontSize="0.8vw"
//                 />
//             </HStack>

//             {/* Кнопка для добавления шага */}
//             <Button
//                 onClick={addStep}
//                 variant="unstyled"
//                 display="flex"
//                 _hover={{
//                     ".hover-effect": { color: "orange.300", filter: "brightness(1.2)" }, // Единый стиль
//                 }}

//             >
//                 <Image
//                     src={Plus} // Укажите путь к вашему изображению
//                     alt="Добавить"
//                     boxSize="30px"
//                     mr={2}
//                     className='hover-effect'
//                 />

//                 <Text
//                     fontFamily="var(--main-font)"
//                     fontSize="1.1vw"
//                     fontWeight="bold"
//                     color="orange.600"
//                     className='hover-effect'
//                 >
//                     Добавить шаг
//                 </Text>
//             </Button>

//             <VStack spacing={4} align="start" w="100%" maxW="800px">
//                 {steps.map((step, index) => (
//                     <HStack key={index} spacing={4} align="center" w="100%">
//                         {/* Фото шага */}
//                         <Box
//                             w="150px"
//                             h="150px"
//                             bg="gray.100"
//                             borderRadius="md"
//                             overflow="hidden"
//                             display="flex"
//                             justifyContent="center"
//                             alignItems="center"
//                             border="2px solid brown.500"
//                         >
//                             {step.photo ? (
//                                 <Image src={step.photo} alt={`Шаг ${index + 1}`} boxSize="100%" objectFit="cover" />
//                             ) : (
//                                 <Text fontWeight="bold" color="gray.400">
//                                     Фото
//                                 </Text>
//                             )}
//                         </Box>

//                         {/* Описание шага */}
//                         <Text

//                             fontSize="0.8vw"
//                             fontWeight="bold"
//                             color="brown.500"
//                             flex="1"
//                         >
//                             {step.description || "Без описания"}
//                         </Text>
//                     </HStack>
//                 ))}
//             </VStack>
//         </>
//     )
// }

import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Image, Text, Button, HStack, VStack, Input, Box, IconButton } from "@chakra-ui/react";
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
                            <Input
                                {...field}
                                placeholder="Введите описание шага"
                                w="30vw"
                                h="7.8vw"
                                border="2px solid brown"
                                borderRadius="15px"
                                fontSize="0.8vw"
                                transition="all 0.3s ease-in-out"
                                _hover={{ borderColor: "orange.300" }}
                                _focus={{
                                    outline: "none", // Убираем стандартную обводку
                                    borderColor: "orange.500", // Меняем цвет рамки
                                    boxShadow: "0 0 8px orange.500" // Добавляем подсветку
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
