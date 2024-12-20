import React from "react";
import { Box, HStack, Flex, Button, Text, VStack, Link } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";
import { FaTelegram } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

export const Footer = () => {
    return (
        <Box pl="30px" pr="30px" pb="20px" mt="30px">
            <Box
                borderBottom="3px solid"
                borderColor="var(--color-brown)"
                width="95%"
                mx="auto"
                mb={3} >
            </Box>
            <HStack>
                <Box flex="1" alignSelf="end">
                    <ImageLogo />
                </Box>
                <Flex flex="1" justifyContent="center" >
                    <Button
                        border="3px solid"
                        borderColor="var(--color-brown)"
                        borderRadius="20px"
                        variant="plain"
                        leftIcon={<HiOutlineEnvelope color="var(--color-brown)" fontSize="30px" />}
                        fontFamily="var(--main-font)"
                        fontSize="20px"
                        fontWeight="800"
                        color="var(--color-brown)">
                        Написать нам
                    </Button>
                </Flex>
                <VStack flex="1" align="end" justify="center">
                    <Text
                        fontFamily="var(--main-font)"
                        fontSize="20px"
                        fontWeight="900"
                        color="var(--color-brown)">
                        МЫ В СОЦИАЛЬНЫХ СЕТЯХ
                    </Text>
                    <HStack mt={1}>
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
                </VStack>
            </HStack>
        </Box>
    );
}
