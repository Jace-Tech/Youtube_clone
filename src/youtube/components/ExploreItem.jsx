import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const ExploreItem = ({ icon, handleClick, text }) => {
    const page = text?.slice(0, 1)?.toUpperCase() + text.slice(1)

    return (
        <Box minW={170} p={5} cursor={"pointer"} onClick={() => handleClick(page)}  my={1} flex={1} bgColor={"gray.800"} rounded={"md"}>
            { icon }
            <Heading mt={5} textTransform={"capitalize"} fontWeight={600} color={"white"} fontSize={"lg"}>{ text }</Heading>
        </Box>
    )
}

export default ExploreItem