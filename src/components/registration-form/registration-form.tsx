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
            {/* Кнопка для открытия модального окна */}
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

            {/* Модальное окно с формой входа или регистрации */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent pb="15px">
                    <ModalHeader>{flag ? 'Регистрация' : 'Вход'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form>
                            <Stack spacing={4}>
                                {/* Поле для имени пользователя */}
                                {flag && (
                                    <FormControl id="username" isRequired>
                                        <FormLabel>Логин</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                )}

                                {/* Поле для email */}
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" />
                                </FormControl>

                                {/* Поле для пароля */}
                                <FormControl id="password" isRequired>
                                    <FormLabel>Пароль</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                            </Stack>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                            {flag ? 'Регистрация' : 'Вход'}
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Назад
                        </Button>
                    </ModalFooter>

                    {/* Кнопка для переключения между регистрацией и входом */}
                    <Box mt={2} textAlign="center">
                        <Button variant="link" onClick={setFlag.toggle}>
                            {flag ? 'Уже есть аккаунт? Войти' : "Нет аккаунта? Зарегистрироваться"}
                        </Button>
                    </Box>
                </ModalContent>
            </Modal>
        </Box >
    )
}