import React, { Component, ReactNode } from "react";
import Lottie from "lottie-react";
import { Box, Button } from "@chakra-ui/react";
import { errorAnimation } from "../../assets";

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

    handleClick = () => {
        window.location.href = "/"; // Перенаправляет на главную страницу
    };

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
                        loop={true}
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
                    <Button
                        mt="55vh"
                        onClick={this.handleClick} // Вызываем метод handleClick
                        fontSize="1.5vh"
                        fontWeight="bold"
                        minWidth="14vw"
                        minHeight="4vh"
                        px={10}
                        py={6}
                        borderRadius="9999px"
                        bg="linear-gradient(135deg, #4F46E5, #3B82F6)"
                        color="white"
                        boxShadow="0px 8px 16px rgba(0, 0, 0, 0.3)"
                        transition="all 0.3s ease-in-out"
                        _hover={{
                            bg: "linear-gradient(135deg, #4338CA, #2563EB)",
                            transform: "scale(1.1)",
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.35)",
                        }}
                        _active={{
                            bg: "linear-gradient(135deg, #3730A3, #1E40AF)",
                            transform: "scale(1.05)",
                            boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        Вернуться на главную
                    </Button>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
