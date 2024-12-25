import React from "react";
import { Button } from "@chakra-ui/react";

export const Sent = () => {
    return (
        <Button
            bg="orange.600"
            _hover={{ bg: "orange.300" }}
            fontStyle="italic"
            fontWeight={400}
            fontSize="1.6vw"
            color="beige.200"
            borderRadius="15px"
            px={8}
            py={4}
            mb={3}
        >
            Отправить
        </Button>
    )
}