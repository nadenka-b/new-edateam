import React from "react";
import { Box, Flex, Text, Button, HStack, Link } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";
import { FaTelegram } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

export const Footer = () => {
    return (
        <Box position="relative" p="6">
            {/* Верхняя линия */}
            <Box borderBottom="3px solid" borderColor="var(--color-brown)" width="95%" mx="auto" mb={5} />

            {/* Основной контент */}
            <Flex
                justify="space-between"
                align="center"
                direction={["column", "row"]}
            >
                {/* Логотип */}
                <ImageLogo />

                {/* Социальные сети */}
                <Box textAlign={["center", "right"]} mt={["4", "0"]}>
                    <Text fontFamily="var(--main-font)" fontSize="lg" fontWeight="900" color="var(--color-brown)" mb={4}>
                        МЫ В СОЦИАЛЬНЫХ СЕТЯХ
                    </Text>
                    <HStack justify="left">
                        <Link href="https://t.me/someoneswm">
                            <FaTelegram size="40" color="#11AADC" />
                        </Link>
                        <Link href="https://t.me/nadenka_b">
                            <FaTelegram size="40" color="#11AADC" />
                        </Link>
                        <Link href="https://t.me/AdelinaSattarova">
                            <FaTelegram size="40" color="#11AADC" />
                        </Link>
                    </HStack>
                </Box>
            </Flex>
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" mt={1}>
                <Button border="3px solid" borderColor="var(--color-brown)" variant="plain" borderRadius="20px" px={5} py={6}>
                    <Flex align="center">
                        <Box boxSize="40px" display="flex" alignItems="center" justifyContent="center">
                            <HiOutlineEnvelope style={{ width: "100%", height: "100%", color: "var(--color-brown)" }} />
                        </Box>
                        <Text fontFamily="var(--main-font)" ml={4} fontSize="lg" fontWeight="800" color="var(--color-brown)">Написать нам</Text>
                    </Flex>
                </Button>
            </Box>
        </Box>
    );
}
