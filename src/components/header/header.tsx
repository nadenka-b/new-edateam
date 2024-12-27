import React from "react";
import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";
import { RegistrationForm } from "../registration-form";
import { Link } from "react-router-dom"
import { URLs } from "../../__data__/urls";

export const Header = () => {
    return (
        <VStack pt="1vw">
            <HStack w="100%" pl="4vw" pr="4vw">
                <Link to={URLs.baseUrl} style={{ flex: 1, textDecoration: 'none' }}>
                    <Text flex="1"
                        fontSize="1.5vw"
                        fontWeight="600"
                        fontStyle="italic"
                        color="orange.500"
                    >
                        Главная
                    </Text>
                </Link>
                <Link to={URLs.baseUrl} style={{ flex: 1, textDecoration: 'none' }}>
                    <Flex flex="1" justifyContent="center" h="5vw">
                        <ImageLogo />
                    </Flex>
                </Link>
                <Box display="flex" justifyContent="end" flex="1" >
                    <RegistrationForm />
                </Box>
            </HStack>
            <Box
                mt="1vw"
                borderBottom="3px solid"
                borderColor="orange.200"
                width="90%"
                mx="auto">
            </Box>
        </VStack >
    );
}
