import React from "react";
import { Box } from "@chakra-ui/react";

export const Video = () => {
    return (
        <Box
            as="iframe"
            src="https://www.youtube.com/embed/EBbwrtTzTVQ"
            frameBorder="0"
            allowFullScreen
            width="985px"
            height="656.55px"
            borderRadius="md"
            boxShadow="lg"
            mx="auto"

            {...({} as React.ComponentProps<"iframe">)}
        />
    )
}