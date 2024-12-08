import React from "react";
import { Box, Flex, Text, IconButton, Button, HStack, Divider } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";


export const Footer = () => {
    return (
        <Box bg="peachpuff" p="6">
            {/* Верхняя линия */}
            <Divider borderColor="brown" mb="6" />

            {/* Основной контент */}
            <Flex
                justify="space-between"
                align="center"
                direction={["column", "row"]}
            >
                {/* Логотип */}
                <Text
                    fontFamily="'Literata', serif"
                    fontWeight="bold"
                    fontSize="lg"
                    color="orange"
                >
                    ГотовимЛегко
                </Text>

                {/* Кнопка */}
                <Button
                    leftIcon={<Box as="span" fontSize="20px">📧</Box>}
                    color="brown"
                    variant="outline"
                    borderColor="brown"
                    fontSize="lg"
                    px="6"
                    mt={["4", "0"]}
                >
                    Написать нам
                </Button>

                {/* Социальные сети */}
                <Box textAlign={["center", "right"]} mt={["4", "0"]}>
                    <Text fontWeight="bold" color="brown" mb="2">
                        МЫ В СОЦИАЛЬНЫХ СЕТЯХ
                    </Text>
                    <HStack justify="center" spacing="4">
                        <IconButton
                            aria-label="Telegram"
                            icon={<FaTelegramPlane />}
                            colorScheme="blue"
                            variant="ghost"
                            fontSize="24px"
                        />
                        <IconButton
                            aria-label="Telegram"
                            icon={<FaTelegramPlane />}
                            colorScheme="blue"
                            variant="ghost"
                            fontSize="24px"
                        />
                        <IconButton
                            aria-label="Telegram"
                            icon={<FaTelegramPlane />}
                            colorScheme="blue"
                            variant="ghost"
                            fontSize="24px"
                        />
                    </HStack>
                </Box>
            </Flex>
        </Box>
    );
}
