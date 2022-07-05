import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import SideBar from "../components/SideBar"
import Header from "../components/Header"
import Main from "../components/Main"


const LandingLayout = () => {
    return (
        <Box h={"100vh"} w={"100%"} bgColor={"gray.900"} overflow={"hidden"}>
            <Flex h={"100%"} w={"100%"}>
                <Box bgColor={"gray.700"} w={"80px"}>
                    {/* SideBar */}
                    <SideBar />
                </Box>

                <Flex flexDirection={"column"} flex={1} w={"calc(100% - 80px)"} h={"100%"}>
                    <Box w={"100%"} bgColor={"gray.700"}>
                        {/* Header */}
                        <Header />
                    </Box>

                    <Box w={"100%"} flex={1} overflowY={"scroll"}>
                        {/* Main */}
                        <Main />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default LandingLayout