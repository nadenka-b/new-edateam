import React from "react";
import { Box, HStack, Flex, Button, Text, VStack, Link } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";
import { FaTelegram } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { URLs } from "../../__data__/urls";
import { Link as RouteLink } from "react-router-dom"

export const Footer = () => {
    return (
        <Box pl="30px" pr="30px" pb="20px">
            <Box
                borderBottom="3px solid"
                borderColor="brown.500"
                width="95%"
                mx="auto"
                mb={3} >
            </Box>
            <HStack>
                <RouteLink to={URLs.baseUrl} style = {{ flex: 1, textDecoration:'none'}}>
                    <Box flex="1" alignSelf="end">
                        <ImageLogo />
                    </Box>
                </RouteLink>
                <Flex flex="1" justifyContent="center" >
                    <Button
                        border="3px solid"
                        borderColor="brown.500"
                        borderRadius="20px"
                        variant="plain"
                        leftIcon={<HiOutlineEnvelope color="brown.500" fontSize="30px" />}
                        fontSize="20px"
                        fontWeight="800"
                        color="brown.500">
                        Написать нам
                    </Button>
                </Flex>
                <VStack flex="1" align="end" justify="center">
                    <Text
                        fontSize="20px"
                        fontWeight="900"
                        color="brown.500">
                        МЫ В СОЦИАЛЬНЫХ СЕТЯХ
                    </Text>
                    <HStack mt={1}>
                        <Link href="https://t.me/someoneswm"
                              rel="noopener noreferrer"
                              target="_blank" >
                            <FaTelegram size="40" color="#11AADC" />
                        </Link>
                        <Link href="https://t.me/nadenka_b"
                              rel="noopener noreferrer"
                              target="_blank" >
                            <FaTelegram size="40" color="#11AADC" />
                        </Link>
                        <Link href="https://t.me/AdelinaSattarova"
                              rel="noopener noreferrer"
                              target="_blank">
                            <FaTelegram size="40" color="#11AADC" />
                        </Link>
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    );
}
