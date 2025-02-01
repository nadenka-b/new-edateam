import React from "react";
import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { animLoading } from "../../assets"


export const Loading = () => {
    return (
        <Box as={Lottie}
            mb="10vw"
            animationData={animLoading}
            loop={true}
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="30vw"
        />
    )
}