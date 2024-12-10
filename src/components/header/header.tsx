import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";


export const Header = () => {
    return (
        <Box py={4} px={8} position="relative" h="100px">
            <Flex align="center" justify="space-between" h="100%">
                <Text fontFamily="var(--main-font)" fontSize="lg" fontWeight="600" fontStyle="Italic" color="var(--color-text-main)">Главная</Text>
                <Text fontFamily="var(--main-font)" fontSize="lg" fontWeight="600" fontStyle="Italic" color="var(--color-text-main)">Регистрация / Вход</Text>
            </Flex>
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" mt={1}>
                <ImageLogo />
            </Box>
            {/* Полоска снизу для страничек рецепта и пользователя */}
            {/* <Box borderBottom="3px solid" borderColor="var(--color-text-main)" width="95%" mx="auto" mt={4} /> */}
        </Box>
    );
}
