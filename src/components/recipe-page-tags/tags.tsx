import React from "react";
import { Box, Text } from "@chakra-ui/react"

export const Tags = () => {
    return (
        <Box textAlign="center" my="calc(21px * 1.2)" >
            <Text as="span"
                fontFamily="var(--main-font)"
                fontSize="lg"
                fontWeight="900"
                fontStyle="italic"
                color="#DC8D57"
                textDecoration="underline"
                textAlign="center"
            >
                завтрак
            </Text>
            <Text as="span"
                fontFamily="var(--main-font)"
                fontSize="lg"
                fontWeight="900"
                fontStyle="italic"
                color="#DC8D57"
                textAlign="center"
                mx="1.5">
                -
            </Text>
            <Text as="span"
                fontFamily="var(--main-font)"
                fontSize="lg"
                fontWeight="900"
                fontStyle="italic"
                color="#DC8D57"
                textDecoration="underline"
                textAlign="center"
            >
                выпечка и десерты
            </Text>
        </Box>

    )
}