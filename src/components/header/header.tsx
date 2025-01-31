import React from "react";
import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";
import { Filters } from '../home-page/filters'
import { RegistrationForm } from "./registration-form";
import { Link, useLocation } from "react-router-dom"
import { URLs } from "../../__data__/urls";


export const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === URLs.baseUrl;
    return (
        < VStack pt="1vw" >
            <HStack w="100%" pl="4vw" pr="4vw">
                <HStack flex="1">
                    {
                        isHomePage && (
                            <Flex alignSelf="center" mr="0.5vw">
                                <Filters />
                            </Flex>
                        )
                    }
                    <Link to={URLs.baseUrl}>
                        <Text
                            fontSize="1.5vw"
                            fontWeight="600"
                            fontStyle="italic"
                            color="orange.500"
                            _hover={{ opacity: 0.85, color: 'orange.500' }}
                        >
                            Главная
                        </Text>
                    </Link>
                </HStack>
                <Link to={URLs.baseUrl} style={{ flex: 1 }}>
                    <Flex justifyContent="center" h="3.5vw">
                        <ImageLogo />
                    </Flex>
                </Link>
                <Link to={URLs.ui.user.url} style={{ flex: 1 }}>
                    <Text
                        justifySelf="end"
                        fontSize="1.5vw"
                        fontWeight="600"
                        fontStyle="italic"
                        color="orange.500"
                        _hover={{ opacity: 0.85, color: 'orange.500' }}
                    >
                        Мой профиль
                    </Text>
                </Link>
                {/* <Box display="flex" justifyContent="end" flex="1" mt="0.6vw" >
                    <RegistrationForm />
                </Box> */}
            </HStack>
            {
                !isHomePage && (
                    <Box
                        mt="1.4vw"
                        borderBottom="0.2vw solid"
                        borderColor="orange.200"
                        width="90%"
                        mx="auto">
                    </Box>
                )
            }
        </VStack >
    );
}
