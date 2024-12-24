import React from "react";
import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import { ImageLogo } from "../image-logo";
import { RegistrationForm } from "../registration-form";


export const Header = () => {
    return (
        <VStack pt="10px">
            <HStack w="100%" pl="50px" pr="50px">
                <Text flex="1"
                    fontSize="24px"
                    fontWeight="600"
                    fontStyle="italic"
                    color="orange.500"
                >
                    Главная
                </Text>
                <Flex flex="1" justifyContent="center">
                    <ImageLogo />
                </Flex>
                <Box display="flex" justifyContent="end" flex="1" >
                    <RegistrationForm />
                </Box>
            </HStack>
            <Box
                borderBottom="3px solid"
                borderColor="orange.200"
                width="90%"
                mx="auto"
                mb={3} >
            </Box>
        </VStack >
    );
}
