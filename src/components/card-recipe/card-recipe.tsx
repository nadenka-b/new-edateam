import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { RiHourglassLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";

export const CardRecipe = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="420px"
      bg="peachpuff"
      position="relative"
    >
      {/* Image */}
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxD7xxbcdjYMwUxAH7Px1uPhbyyaHRS_qAuA&s" // Замените на URL изображения
        alt="Блинчики с мясом, сыром и лучком"
        borderRadius="md"
      />

      {/* Overlay content */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-b, transparent, rgba(0, 0, 0, 0.6))"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        p="4"
      >
        <Text fontSize="lg" fontWeight="bold" mb="2">
          Блинчики с мясом, сыром и лучком
        </Text>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <RiHourglassLine />
            <Text fontSize="sm">30 мин</Text>
          </Flex>
          <CiBookmark />
        </Flex>
      </Box>
    </Box>
  );
}
