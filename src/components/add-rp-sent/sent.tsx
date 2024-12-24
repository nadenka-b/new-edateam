import React from "react";
import { Button } from "@chakra-ui/react";

export const Sent = () => {
    return (
        <Button
            bg="var(--color--add-step-and-photo)"
            _hover={{ bg: "var(--color--sent)" }} 
            fontFamily="var(--main-font)"
            fontStyle="italic"
            fontWeight={400}
            fontSize={{
                lg: "1.4em",
                xl: "1.6em",
            }}
            color="var(--background-color)"
            borderRadius="15px"
            px={8}
            py={4}
        >
            Отправить
        </Button>
    )
}