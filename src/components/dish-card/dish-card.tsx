import React from "react";
import { Text, Image, Card, IconButton, Box } from "@chakra-ui/react";
import { RiHourglassLine } from "react-icons/ri";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

export const DishCard = () => {
  return (
    <>
      <Card.Root w="420px" h="420px" overflow="hidden" p={5} bg="var(--background-card)" boxShadow="lg" borderRadius={5}>
        <Box position="relative">
          <Image boxShadow="sm"
            src="https://img1.russianfood.com/dycontent/images_upl/644/big_643804.jpg"
            alt="" borderRadius={5} mb={2} />
        </Box>
        <Card.Body gap="2">
          <Text alignSelf="center" fontFamily="var(--main-font)"
            fontSize="m" fontWeight="800" fontStyle="Italic"
            color="var(--color-tags)"
            textDecoration="underline">
            завтрак - выпечка и десерты
          </Text>
          <Card.Title fontFamily="var(--main-font)"
            fontSize="lg" fontWeight="900" fontStyle="Italic"
            color="var(--color-brown)"
            textDecoration="underline">Блинчики с мясом, сыром и лучком</Card.Title>
        </Card.Body>
        <Card.Footer  >
          {/* minW="auto" h="auto" */}
          <IconButton color="var(--color-brown)" bg="transparent" position="absolute" right="5px" bottom="5px">
            <FaRegBookmark />
          </IconButton>
        </Card.Footer>
      </Card.Root>
    </>
  );
}