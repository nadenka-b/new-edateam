import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";


export const Header = () => {
    return (
        <Box py={4} px={8}>
            <Flex align="center">
                <Text fontFamily="var(--main-font)" fontSize="lg" fontWeight="600" fontStyle="Italic" color="orange.500">
                    Главная
                </Text>
                <Spacer />
                <ImageLogo />
                <Spacer />
                <Text fontFamily="var(--main-font)" fontSize="lg" fontWeight="600" fontStyle="Italic" color="orange.500">
                    Регистрация / Вход
                </Text>
            </Flex>
            <Box borderBottom="3px solid orange" width="1400px" mx="auto" />
        </Box>
    );
}
