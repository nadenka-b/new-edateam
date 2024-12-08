import React from "react";
import { Image } from "@chakra-ui/react";
import { logo } from "./index";

export const ImageLogo = () => {
    return (
        <Image src={logo} alt="Логотип сайта" />
    )
}