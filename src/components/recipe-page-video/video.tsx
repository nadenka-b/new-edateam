import React from "react";
import { Box } from "@chakra-ui/react";

export const Video = () => {
    return (
        <Box
            as="iframe"
            src="https://youtube.com/embed/yTk3iwTyBwY"
            frameBorder="0"
            allowFullScreen
            width="51vw"
            height="33vw"
            borderRadius="md"
            boxShadow="lg"
            mx="auto"

            {...({} as React.ComponentProps<"iframe">)}
        />
    )
}