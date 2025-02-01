import React, { useState } from "react";
import { InputGroup, Input, InputRightElement, IconButton } from '@chakra-ui/react';
import { LuEye, LuEyeClosed } from "react-icons/lu";
interface PasswordInputProps {
    name: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ name, onChange, }) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size="md">
            <Input
                borderColor="brown.500"
                _hover={{ opacity: 0.85, borderColor: "orange.100" }}
                bg="beige.200"
                focusBorderColor="orange.100"
                fontSize="1.2vw"
                h="3vw"
                type={show ? 'text' : 'password'}
                name={name}
                onChange={onChange}
            />
            <InputRightElement width="4vw">
                <IconButton
                    aria-label="eye"
                    icon={show ? <LuEye /> : <LuEyeClosed />}
                    _hover={{ bg: 'transparent', opacity: 0.7 }}
                    onClick={handleClick}
                    minW="2.5vw"
                    h="2.5vw"
                    fontSize="2.5vw"
                    color="brown.500"
                    bg="transparent"
                />
            </InputRightElement>
        </InputGroup >
    )
}
