import React from "react";
import { Card, CardBody, CardFooter, Text, Image, Box, Flex, IconButton, Heading } from "@chakra-ui/react";
import { AiOutlineHourglass } from "react-icons/ai";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

export const DishCard = () => {
  return (
    <>
      <Card w="420px" h="420px" overflow="hidden" p="2px" bg="var(--background-card)" boxShadow="lg" borderRadius={5}>
        <CardBody>
          <Box position="relative">
            <Image boxShadow="sm"
              src="https://img1.russianfood.com/dycontent/images_upl/644/big_643804.jpg"
              alt="" borderRadius={5} mb={2} />
            <Flex p="4px" borderRadius={15} alignItems="center" h="40px" bg="rgba(255, 240, 218, 0.75)" position="absolute" right="10px" bottom="20px">
              <AiOutlineHourglass color="var(--color-brown)" fontSize="25px" />
              <Text fontFamily="var(--main-font)" fontWeight="900" fontStyle="Italic" fontSize="14px" color="var(--color-brown)">30 мин</Text>
            </Flex>
          </Box>
          <Text justifySelf="center" fontFamily="var(--main-font)"
            fontSize="m" fontWeight="800" fontStyle="Italic"
            color="var(--color-tags)"
            textDecoration="underline"
            mb={2}>
            завтрак - выпечка и десерты
          </Text>
          <Heading fontFamily="var(--main-font)"
            fontSize="lg" fontWeight="900" fontStyle="Italic"
            color="var(--color-brown)"
            textDecoration="underline">Блинчики с мясом, сыром и лучком</Heading>
        </CardBody>
        <CardFooter position="relative">
          <IconButton
            _hover={{ bg: "none" }}
            color="var(--color-brown)"
            bg="transparent"
            position="absolute"
            right="15px"
            bottom="45px"
            aria-label="p"
            icon={<FaRegBookmark fontSize="35px" />}>
          </IconButton>
        </CardFooter>
      </Card >
    </>
  );
}