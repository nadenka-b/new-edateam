import React from "react";
import { Box, Text } from "@chakra-ui/react"

export const Tags = () => {
    return (
        <Box textAlign="center" my="1vw" >
            <Text as="span"
                fontSize="1vw"
                fontWeight="900"
                fontStyle="italic"
                color="orange.100"
                textDecoration="underline"
                textAlign="center"
            >
                завтрак
            </Text>
            <Text as="span"
                fontSize="1vw"
                fontWeight="900"
                fontStyle="italic"
                color="orange.100"
                textAlign="center"
                mx="0.1vw">
                -
            </Text>
            <Text as="span"
                fontSize="1vw"
                fontWeight="900"
                fontStyle="italic"
                color="orange.100"
                textDecoration="underline"
                textAlign="center"
            >
                выпечка и десерты
            </Text>
        </Box>

    )
}