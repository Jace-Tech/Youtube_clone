import { Box, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import LibrarySection from '../components/LibrarySection'
import { MdHistory } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { IoMdTime } from 'react-icons/io'

import image1 from "../assets/img/image4.jpg"
import icon1 from "../assets/img/jace.png"

const Library = () => {
    const sections = [
        {
            heading: "History",
            icon: <MdHistory />,
            data: [
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
            ]
        },
        {
            heading: "Watch Later",
            icon: <IoMdTime />,
            data: [
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
            ]
        },
        {
            heading: "Liked videos",
            icon: <AiOutlineLike />,
            data: [
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
                {
                    image:image1,
                    icon:icon1,
                    datePosted:"7 days ago",
                    timeFrame:"8:71",
                    title:"Moments that can't be repeated in football",
                    views:"5.3M",
                    author:"John Smith",
                    isViewed:true,
                },
            ]
        }
    ]
    return (
        <Flex px={10} py={8}>
            <Box flex={1}>
                {  
                    sections.map((item, index) => <LibrarySection {...item} key={index} />)
                }    
            </Box>

            <Box w={300}>
                <Box textAlign={"center"} my={10}>
                    <Image src={icon1} rounded={"full"} objectFit={"cover"} w={100} h={100} display={"inline-block"} />
                    <Text mt={1} color={"gray.300"}>Jace Alexander</Text>
                </Box>
                <VStack>
                    <Flex py={2} w={"100%"} fontSize={"sm"} color={"gray.600"} borderBottom={"1px solid"}>
                        <Text>Subscriptions</Text>
                        <Spacer />
                        <Text>58</Text>
                    </Flex>

                    <Flex py={2} w={"100%"} fontSize={"sm"} color={"gray.600"} borderBottom={"1px solid"}>
                        <Text>Uploads</Text>
                        <Spacer />
                        <Text>0</Text>
                    </Flex>

                    <Flex py={2} w={"100%"} fontSize={"sm"} color={"gray.600"} borderBottom={"1px solid"}>
                        <Text>Likes</Text>
                        <Spacer />
                        <Text>1</Text>
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    )
}

export default Library