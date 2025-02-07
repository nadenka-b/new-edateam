import React, { Component, ReactNode } from "react";
import Lottie from "lottie-react";
import { Box, Button, Text } from "@chakra-ui/react";
import { errorAnimation } from "../../assets"

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Box
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    minH="100vh"
                    textAlign="center"
                    position="relative"
                    padding="2rem"
                >
                    <Lottie
                        animationData={errorAnimation}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "100%",
                            height: "100%",
                            maxWidth: "750px",
                            maxHeight: "750px",
                        }}
                    />
                    <Box
                        display="flex"
                        flexDir="column"
                        alignItems="center"
                        justifyContent="center"
                        zIndex={1}
                        mt={14}  // Moves the content lower
                        px={4}
                    >
                        <Text
                            fontSize="4xl"
                            fontWeight="bold"
                            color="red.600"
                            mb={4}
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            Что-то пошло не так
                        </Text>
                        <Text
                            fontSize="lg"
                            color="gray.500"
                            mb={8}
                            lineHeight="1.5"
                        >
                            Произошла ошибочка. Попробуйте обновить страницу, чтобы вернуться к работе.
                        </Text>
                        <Button
                            colorScheme="blue"
                            onClick={() => window.location.reload()}
                            size="lg"
                            borderRadius="full"
                            px={8}
                            _hover={{
                                backgroundColor: "blue.600",
                                transform: "scale(1.05)",
                            }}
                            _active={{
                                backgroundColor: "blue.700",
                            }}
                        >
                            Обновить
                        </Button>
                    </Box>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
