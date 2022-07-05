import { Badge, Box, Button, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import VideoCard from './VideoCard'

import { MdHistory } from "react-icons/md"

const LibrarySection = ({ heading, icon, data }) => {
    return (
        <Box my={5} pb={5} borderBottomWidth={1} borderBottomColor={"gray.700"}>
            <Flex alignItems={"center"}>
                <HStack fontSize={"xl"} color={"gray.400"}>
                    { icon }
                    <Text fontSize={"lg"} fontWeight={600}>{ heading }</Text> 
                    <Text fontSize={"sm"} fontWeight={600} color={"gray.500"}>
                        { data.length }
                    </Text>
                </HStack>
                <Spacer />
                <Button size={"sm"} textTransform={"uppercase"} variant={"link"}>See all</Button>
            </Flex>

            <Flex w={"100%"} flexWrap={"wrap"} gap={5} p={'4'}>
                {
                    data.map(({ image, icon, datePosted, timeFrame, title, author, views, isViewed }, index) => (
                        <VideoCard
                            key={index}
                            image={image}
                            icon={icon}
                            datePosted={datePosted}
                            timeFrame={timeFrame}
                            title={title}
                            views={views}
                            author={author}
                            isViewed={isViewed}
                        />
                    ))
                }
            </Flex>
        </Box>
    )
}

export default LibrarySection