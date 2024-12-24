import React from "react";
import { Box, Button, Input, Image, Heading, HStack, Flex } from "@chakra-ui/react";
import { plate } from "./index"
import { FaArrowRight } from "react-icons/fa6";

export const Greetings = () => {
    return (
        <Box position="relative" bg="orange.200" h={320} w="100%" mt={2} px={100} py={5}>
            <Flex>
                <Box>
                    <Heading
                        fontSize={60}
                        fontWeight="800"
                        fontStyle="Italic"
                        color="beige.200"
                    >
                        Простые рецепты<br />на каждый день!
                    </Heading>
                    <Heading
                        fontSize={20}
                        fontWeight="400"
                        color="beige.200"
                    >
                        Готовить с нами — это легко и вкусно!
                    </Heading>
                    <HStack
                        bg="beige.200"
                        w={550}
                        borderRadius={50}
                        mt={4}
                        pl={2}
                        h={50}
                    >
                        <Input
                            borderRadius={50}
                            border="none"
                            focusBorderColor="transparent"
                            color="brown.500"
                            placeholder="Чего желаете?"
                            size="md"
                            _placeholder={{ color: "#979797" }} />
                        <Button
                            color="beige.200"
                            bg="orange.500"
                            fontSize={20}
                            borderRadius={50}
                            w={166}
                            _hover={{ opacity: 0.85, bg: "orange.500" }}
                        >Найти</Button>
                    </HStack>
                </Box>
                <Box ml={18} mt={120}>
                    <Button
                        _hover={{ opacity: 0.85, bg: "orange.500" }}
                        rightIcon={<FaArrowRight />}
                        boxShadow="md"
                        w={215}
                        h={75}
                        color="beige.200"
                        bg="orange.500"
                        fontSize={24}
                        fontWeight="900"
                        borderRadius={50}>
                        К рецептам
                    </Button>
                </Box>
            </Flex>
            <Box
                position="absolute"
                top="50%"
                left="80%"
                transform="translate(-50%, -50%)"
                zIndex={0}
                w="400px"
                h="400px"
            >
                <Image src={plate} alt="Example" objectFit="cover" boxSize="full" />
            </Box>
        </Box>
    );
}
