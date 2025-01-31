import React from "react";
import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useDisclosure,
    useBoolean
} from '@chakra-ui/react';

export const RegistrationForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [flag, setFlag] = useBoolean()
    return (
        <Box>
            <Button
                onClick={onOpen}
                variant="link"
                fontSize="1.5vw"
                fontWeight="600"
                fontStyle="italic"
                color="orange.500"
                _hover={{ opacity: 0.85, color: 'orange.500' }}
            >
                Регистрация / Вход
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent
                    w="30vw"
                    maxW="none"
                    h="auto"
                    bg="beige.300"
                    pb="0.8vw"
                    color="brown.500"
                >
                    <ModalHeader fontSize="1.8vw">{flag ? 'Регистрация' : 'Вход'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form>
                            <Stack spacing="1vw">
                                {/* Поле для имени пользователя */}
                                {flag && (
                                    <FormControl id="username" isRequired>
                                        <FormLabel fontSize="1.2vw">Логин</FormLabel>
                                        <Input
                                            borderColor="brown.500"
                                            _hover={{ opacity: 0.85, borderColor: "orange.100" }}
                                            bg="beige.200"
                                            focusBorderColor="orange.100"
                                            fontSize="1.2vw"
                                            h="3vw"
                                            type="text"
                                        />
                                    </FormControl>
                                )}

                                {/* Поле для email */}
                                <FormControl id="email" isRequired>
                                    <FormLabel fontSize="1.2vw">Email</FormLabel>
                                    <Input
                                        borderColor="brown.500"
                                        _hover={{ opacity: 0.85, borderColor: "orange.100" }}
                                        bg="beige.200"
                                        focusBorderColor="orange.100"
                                        fontSize="1.2vw"
                                        h="3vw"
                                        type=" email"
                                    />
                                </FormControl>

                                {/* Поле для пароля */}
                                <FormControl id="password" isRequired>
                                    <FormLabel fontSize="1.2vw">Пароль</FormLabel>
                                    <Input
                                        borderColor="brown.500"
                                        _hover={{ opacity: 0.85, borderColor: "orange.100" }}
                                        bg="beige.200"
                                        focusBorderColor="orange.100"
                                        fontSize="1.2vw"
                                        h="3vw"
                                        type="password"
                                    />
                                </FormControl>
                            </Stack>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            w={flag ? "10vw" : "6vw"}
                            h="3vw"
                            bg="orange.100"
                            color="beige.200"
                            fontSize="1.2vw"
                            mr="0.5vw"
                            _hover={{ opacity: 0.7, bg: "orange.100" }}
                        >
                            {flag ? 'Регистрация' : 'Вход'}
                        </Button>
                        <Button
                            w="6vw"
                            h="3vw"
                            fontSize="1.2vw"
                            variant="outline"
                            color="brown.500"
                            borderColor="brown.500"
                            _hover={{ opacity: 0.7, bg: "beige.300" }}
                            onClick={onClose}>
                            Назад
                        </Button>
                    </ModalFooter>

                    {/* Кнопка для переключения между регистрацией и входом */}
                    <Box mt="0.5vw" textAlign="center">
                        <Button color="grey.400" fontSize="1.2vw" variant="link" onClick={setFlag.toggle}>
                            {flag ? 'Уже есть аккаунт? Войти' : "Нет аккаунта? Зарегистрироваться"}
                        </Button>
                    </Box>
                </ModalContent>
            </Modal>
        </Box >
    )
}