import React from "react";
import { Button } from "@chakra-ui/react";

export const Sent = () => {
    return (
        <Button
            bg="orange.600"
            _hover={{ bg: "orange.300" }}

            fontStyle="italic"
            fontWeight={400}
            fontSize={32}
            color="beige.200"
            borderRadius="15px"
            px={8}
            py={4}
        >
            Отправить
        </Button>
    )
}