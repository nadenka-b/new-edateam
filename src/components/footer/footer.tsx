import React from "react";
import { Box, HStack, Flex, Button, Text, VStack, Link } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";
import { FaTelegram } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

export const Footer = () => {
    return (
        <Box pl="2.6vw" pr="2.6vw" pb="1.5vw">
            <Box
                borderBottom="3px solid"
                borderColor="brown.500"
                width="95%"
                mx="auto"
                mb="1vw" >
            </Box>
            <HStack>
                {/* не работает  */}
                <Flex flex="1" alignSelf="center" h="5vw">
                    <ImageLogo />
                </Flex>
                <Flex flex="1" justifyContent="center" >
                    <Button
                        pt="0.9vw"
                        pb="0.9vw"
                        border="3px solid"
                        borderColor="brown.500"
                        borderRadius="15px"
                        variant="plain"
                        leftIcon={<HiOutlineEnvelope color="brown.500" fontSize="1.8vw" />}
                        fontSize="1.25vw"
                        fontWeight="800"
                        color="brown.500">
                        Написать нам
                    </Button>
                </Flex>
                <VStack flex="1" align="end" justify="center">
                    <Text
                        fontSize="1.25vw"
                        fontWeight="900"
                        color="brown.500">
                        МЫ В СОЦИАЛЬНЫХ СЕТЯХ
                    </Text>
                    <HStack mt={1}>
                        <Link href="https://t.me/someoneswm">
                            <Box as={FaTelegram} size="3.1vw" color="blue.500" />
                        </Link>
                        <Link href="https://t.me/nadenka_b">
                            <Box as={FaTelegram} size="3.1vw" color="blue.500" />
                        </Link>
                        <Link href="https://t.me/AdelinaSattarova">
                            <Box as={FaTelegram} size="3.1vw" color="blue.500" />
                        </Link>
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    );
}
