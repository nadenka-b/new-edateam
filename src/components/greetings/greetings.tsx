import React from "react";
import { Box, Button, Input, Image, Heading, HStack, Flex } from "@chakra-ui/react";
import { plate } from "./index"
import { FaArrowRight } from "react-icons/fa6";

export const Greetings = () => {
    return (
        <Box position="relative" bg="var(--background-greetings)" h={320} w="100%" mt={2} px={100} py={5}>
            <Flex>
                <Box>
                    <Heading fontSize={60} fontFamily="var(--main-font)" fontWeight="800" fontStyle="Italic" color="var(--background-color)">Простые рецепты<br />на каждый день!</Heading>
                    <Heading fontSize={20} fontFamily="var(--main-font)" fontWeight="400" color="var(--background-color)">Готовить с нами — это легко и вкусно!</Heading>
                    <HStack bg="var(--background-color)" w={550} borderRadius={50} mt={4} pl={2} fontFamily=" var(--main-font)" h={50}>
                        <Input
                            borderRadius={50}
                            border="none"
                            focusBorderColor="transparent"
                            color="var(--color-brown)"
                            placeholder="Чего желаете?"
                            size="md"
                            _placeholder={{ color: "#979797" }} />
                        <Button
                            color="var(--background-color)"
                            bg="var(--color-text-main)"
                            fontSize={20}
                            borderRadius={50}
                            w={166}
                            _hover={{ bg: "var(--color-text-main)" }}
                        >Найти</Button>
                    </HStack>
                </Box>
                <Box ml={18} mt={120}>
                    <Button
                        _hover={{ bg: "var(--color-text-main)" }}
                        rightIcon={<FaArrowRight />}
                        boxShadow="md"
                        w={215}
                        h={75}
                        color="var(--background-color)"
                        fontFamily="var(--main-font)"
                        bg="var(--color-text-main)"
                        fontSize={24}
                        fontWeight="900"
                        borderRadius={50}>
                        К рецептам
                    </Button>
                </Box>
            </Flex>
            <Box position="absolute" top="50%" left="80%" transform="translate(-50%, -50%)" zIndex={0} w="400px" h="400px">
                <Image src={plate} alt="Example" objectFit="cover" boxSize="full" />
            </Box>
        </Box>
    );
}
