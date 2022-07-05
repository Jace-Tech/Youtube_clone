import { Badge, Box, Center, Divider, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FiClock } from "react-icons/fi"
import { RiPlayList2Fill } from "react-icons/ri"
import { BsDot } from "react-icons/bs"
import { IoEllipsisVerticalSharp, IoCheckmarkCircleSharp } from "react-icons/io5"


const ExploreVideoCard = ({ image, time, title, author, views, date, description, isVerified }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isParentHovered, setIsParentHovered] = useState(false)

    const handleParentMouseOver = () => setIsParentHovered(true)
    const handleParentMouseLeave = () => setIsParentHovered(false)

    const handleMouseOver = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    useEffect(() => console.log(isParentHovered), [isParentHovered])

    return (
        <Flex w={"fit-content"} position={"relative"} onMouseOver={handleParentMouseOver} onMouseLeave={handleParentMouseLeave}>
            <Box position={"relative"} w={"fit-content"} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
                <Image src={image} w={250} h={150} objectFit={"cover"} />

                {
                    isHovered ? (
                        <Flex flexDir={"column"} alignItems={"flex-end"} p={1} position={"absolute"} top={0} left={0} w={"100%"} gap={1}>
                            <Center w={26} h={26} p={1} cursor={"pointer"} bgColor={"black"}> 
                                <FiClock size={22} color={"#fff"} />
                            </Center>

                            <Center w={26} h={26} p={1} cursor={"pointer"} bgColor={"black"}> 
                                <RiPlayList2Fill size={22} color={"#fff"} />
                            </Center>
                        </Flex>
                    ) : (
                        <Box p={1} position={"absolute"} left={0} bottom={0} w={"100%"} textAlign={"right"}>
                            <Badge bgColor={"black"} color={"white"}>{ time }</Badge>
                        </Box>
                    )
                }
            </Box>
            <Box maxW={"calc(100% - 300px)"}>
                <VStack flex={1} ml={4} p={4} py={2} pl={0}>
                    <Flex w={"100%"}>
                        <Heading fontSize={"lg"} fontWeight={500} color={"white"}>{ title }</Heading>
                    </Flex>

                    <HStack w={"100%"}>
                        <HStack color={"gray.600"}>
                            <Text fontSize={"sm"} color={"gray.600"} >{ author }</Text>
                            { isVerified && <IoCheckmarkCircleSharp size={16} /> }
                        </HStack>

                        <Center color={"gray.600"}>
                            <BsDot size={19} />
                        </Center>

                        <Text fontSize={"sm"} color={"gray.600"} >{ views }</Text>

                        <Center color={"gray.600"}>
                            <BsDot size={19} />
                        </Center>

                        <Text fontSize={"sm"} color={"gray.600"} >{ date }</Text>
                    </HStack>

                    <Text fontSize={"sm"} color={"gray.500"}>{ description }</Text>
                </VStack>

                { isParentHovered && (
                    <Center position={"absolute"} cursor={"pointer"} right={1} top={1}>
                        <IoEllipsisVerticalSharp color={"white"} size={20} />
                    </Center>
                ) }
            </Box>
        </Flex>
    )
}

export default ExploreVideoCard