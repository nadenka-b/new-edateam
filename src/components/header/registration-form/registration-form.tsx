import React, { useState } from "react";
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
    useBoolean,
    useToast
} from '@chakra-ui/react';
import { useLoginMutation } from '../../../__data__/services/authApi';
import { useRegistrationMutation } from '../../../__data__/services/mainApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../__data__/slices/authSlice';

import { PasswordInput } from "./password-input"
import { LoginRequest, TokenPayload, RegistrationRequest } from "../../../__data__/model/common";
import { jwtDecode } from 'jwt-decode';

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const toast = useToast()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [flagReg, setFlagReg] = useBoolean()

    const [formStateLogin, setFormStateLogin] = useState<LoginRequest>({
        loginOrEmail: '',
        password: '',
    })
    const [formStateRegistration, setFormStateRegistration] = useState<RegistrationRequest>({
        login: '',
        email: '',
        password: '',
    })

    const [registration, { isLoading: isRegistrationLoading }] = useRegistrationMutation();
    const [login, { isLoading: isLoginLoading }] = useLoginMutation()

    const handleChange = ({ target: { name, value }, }: React.ChangeEvent<HTMLInputElement>) => (
        flagReg
            ? setFormStateRegistration((prev) => ({ ...prev, [name]: value }))
            : setFormStateLogin((prev) => ({ ...prev, [name]: value }))
    )

    const onLogin = async () => {
        try {
            const data = await login(formStateLogin).unwrap()
            const user = jwtDecode<TokenPayload>(data.accessToken)
            dispatch(setCredentials({ user: user, accessToken: data.accessToken, refreshToken: data.refreshToken }))
            toast({
                title: 'Успешно!',
                description: 'Вы успешно вошли в систему',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        } catch (e) {
            toast({
                title: 'Ошибка!',
                description: 'Не удалось войти',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            console.log(e)
        }
    }

    const onRegistration = async () => {
        try {
            const formData = new FormData();
            formData.append('login', formStateRegistration.login)
            formData.append('email', formStateRegistration.email)
            formData.append('password', formStateRegistration.password)
            await registration(formData)
            toast({
                title: 'Успешно!',
                description: 'Вы успешно зарегистрировались',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        } catch (e) {
            toast({
                title: 'Ошибка!',
                description: 'Не удалось зарегестрироваться',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            console.log(e)
        }
    }

    const handleClose = () => {
        setFormStateLogin({
            loginOrEmail: '',
            password: '',
        })
        setFormStateRegistration({
            login: '',
            email: '',
            password: '',
        })
        onClose();
    }

    const handleChangeCurrent = () => {
        setFormStateLogin({
            loginOrEmail: formStateRegistration.login,
            password: formStateRegistration.password,
        })
        setFormStateRegistration({
            login: '',
            email: formStateLogin.loginOrEmail,
            password: formStateLogin.password,
        })
        setFlagReg.toggle()
    }

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

            <Modal isOpen={isOpen} onClose={handleClose} >
                <ModalOverlay />
                <ModalContent
                    w="30vw"
                    maxW="none"
                    h="auto"
                    bg="beige.300"
                    pb="0.8vw"
                    color="brown.500"
                >
                    <ModalHeader fontSize="1.8vw">{flagReg ? 'Регистрация' : 'Вход'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form>
                            <Stack spacing="1vw">
                                {/* Поле для имени пользователя */}
                                {flagReg && (
                                    <FormControl id="username" isRequired>
                                        <FormLabel fontSize="1.2vw">Логин</FormLabel>
                                        <Input
                                            onChange={handleChange}
                                            name="login"
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
                                    <FormLabel fontSize="1.2vw">
                                        {flagReg ? "email" : "Логин/email"}
                                    </FormLabel>
                                    <Input
                                        onChange={handleChange}
                                        name={flagReg ? "email" : "loginOrEmail"}
                                        borderColor="brown.500"
                                        _hover={{ opacity: 0.85, borderColor: "orange.100" }}
                                        bg="beige.200"
                                        focusBorderColor="orange.100"
                                        fontSize="1.2vw"
                                        h="3vw"
                                    />
                                </FormControl>

                                {/* Поле для пароля */}
                                <FormControl id="password" isRequired>
                                    <FormLabel fontSize="1.2vw">Пароль</FormLabel>
                                    <PasswordInput onChange={handleChange} name="password" />
                                </FormControl>
                            </Stack>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            onClick={flagReg ? onRegistration : onLogin}
                            w={flagReg ? "10vw" : "6vw"}
                            h="3vw"
                            bg="orange.100"
                            color="beige.200"
                            fontSize="1.2vw"
                            mr="0.5vw"
                            _hover={{ opacity: 0.7, bg: "orange.100" }}
                            isLoading={isLoginLoading || isRegistrationLoading}
                        >
                            {flagReg ? 'Регистрация' : 'Вход'}
                        </Button>
                        <Button
                            w="6vw"
                            h="3vw"
                            fontSize="1.2vw"
                            variant="outline"
                            color="brown.500"
                            borderColor="brown.500"
                            _hover={{ opacity: 0.7, bg: "beige.300" }}
                            onClick={handleClose}>
                            Назад
                        </Button>
                    </ModalFooter>

                    {/* Кнопка для переключения между регистрацией и входом */}
                    <Box mt="0.5vw" textAlign="center">
                        <Button color="grey.400" fontSize="1.2vw" variant="link" onClick={handleChangeCurrent}>
                            {flagReg ? 'Уже есть аккаунт? Войти' : "Нет аккаунта? Зарегистрироваться"}
                        </Button>
                    </Box>
                </ModalContent>
            </Modal>
        </Box >
    )
}
