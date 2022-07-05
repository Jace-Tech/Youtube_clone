import { Box, Flex, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import ExploreVideoCard from './ExploreVideoCard'
import VideoCard from './VideoCard'

const SubcriptionSection = ({ title, data, mode }) => {
    return (
        <Box px={8} py={4}>
            <Flex alignItems={"center"}>
                { mode === "grid" &&  <Heading py={4} fontSize={"md"} textTransform={"capitalize"} fontWeight={600} color={"white"}>{title}</Heading> }
            </Flex>

            {
                mode === "list" ? (
                    <VStack gap={5} mt={16}>
                        { 
                            data.map((item, index) => (
                                <ExploreVideoCard 
                                    key={`${item.title}-${index}`}
                                    image={item.image}
                                    author={item.author}
                                    date={item.datePosted}
                                    time={item.timeFrame}
                                    title={item.title}
                                    views={item.views}
                                    isVerified={item.isViewed}
                                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate amet, saepe vitae reprehenderit sapiente aperiam eveniet mollitia voluptatibus incidunt nemo possimus architecto autem iste aliquid aliquam inventore. Tempore, repudiandae molestiae?"}
                                />
                            ))
                        }
                    </VStack>
                )
                : (
                    <Flex w={"100%"} flexWrap={"wrap"} gap={5} py={4} borderColor={"whiteAlpha.300"} borderBottomWidth={1}>
                        {
                            data.map((item, index) => (
                                <VideoCard {...item} key={index} />
                            ))
                        }
                    </Flex>
                )
            }
        </Box>
    )
}

export default SubcriptionSection