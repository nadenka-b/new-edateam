import React from "react";
import { Box, HStack, Flex, Button, Text, VStack, Link } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";
import { FaTelegram } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { URLs } from "../../__data__/urls";
import { Link as RouteLink } from "react-router-dom"

export const Footer = () => {
    return (
        <Box pl="2.6vw" pr="2.6vw" pb="1.5vw">
            <Box
                borderBottom="0.2vw solid"
                borderColor="brown.500"
                width="95%"
                mx="auto"
                mb="1vw" >
            </Box>
            <HStack>
                <RouteLink to={URLs.baseUrl} style={{ flex: 1, alignSelf: 'center' }}>
                    <Flex h="3vw">
                        <ImageLogo />
                    </Flex>
                </RouteLink>
                <Flex flex="1" justifyContent="center" >
                    <Button
                        h="3.5vw"
                        w="16vw"
                        border="0.2vw solid"
                        borderColor="brown.500"
                        borderRadius="1.5vw"
                        variant="plain"
                        leftIcon={<HiOutlineEnvelope color="brown.500" fontSize="2vw" />}
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
                    <HStack mt="0.05vw">
                        <Link href="https://t.me/someoneswm"
                            rel="noopener noreferrer"
                            target="_blank" >
                            <Box as={FaTelegram} size="2.2vw" color="blue.500" />
                        </Link>
                        <Link href="https://t.me/nadenka_b"
                            rel="noopener noreferrer"
                            target="_blank" >
                            <Box as={FaTelegram} size="2.2vw" color="blue.500" />
                        </Link>
                        <Link href="https://t.me/AdelinaSattarova"
                            rel="noopener noreferrer"
                            target="_blank">
                            <Box as={FaTelegram} size="2.2vw" color="blue.500" />
                        </Link>
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    );
}
