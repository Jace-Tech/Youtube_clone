import { Avatar, Box, Button, Center, Flex, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { IoEllipsisVerticalSharp, IoThumbsUp, IoThumbsDown, IoChatbubble, IoChatbox, IoShare, IoShareSocial } from "react-icons/io5"

const ShortCardIcons = ({ icon, text, handleClick }) => {

    return (
        <VStack color={"gray.500"} onClick={handleClick} cursor={"pointer"}>
            { icon }
            <Text fontSize={'sm'}> { text } </Text>
        </VStack>
    )
}
const styles = {
    videoStyle: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: "rgba(0, 0, 0, .5)",
        zIndex: 2
    }
}


const ShortCard = ({ video, title, authorIcon, authorName, likes, comments }) => {
    const videoRef = useRef()
    const [isLike, setIsLike] = useState(null)

    return (
        <Flex>
            <Box maxW={350} height={"80vh"} position={"relative"}>
                <div style={styles.overlay}></div>
                <video ref={videoRef} loop src={video} style={styles.videoStyle} autoPlay />
                
                <Box position={"absolute"} bottom={5} w={"100%"} p={5} zIndex={5}>
                    <Heading color={"gray.200"} fontWeight={500} fontSize={"xl"} mb={5}> { title } </Heading>

                    <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex alignItems={"center"}>
                            <Avatar src={authorIcon} />
                            <Text color={"gray.200"} fontWeight={600} ml={2}>{ authorName }</Text>
                        </Flex>

                        <Button colorScheme={"red"} rounded={"none"}>Subscribe</Button>
                    </Flex>
                </Box>
            </Box>

            <Flex flexDir={"column"} justifyContent={"space-between"} px={2}>
                <Center cursor={"pointer"} color={"gray.200"}>
                    <IoEllipsisVerticalSharp size={20} />
                </Center>

    

                <VStack gap={3}>
                    <ShortCardIcons isLike={isLike} text={likes} handleClick={() => setIsLike("like")} icon={<IoThumbsUp color={isLike == "like" && "#f00"} size={25} />} />
                    <ShortCardIcons isLike={isLike} text={"Dislike"} handleClick={() => setIsLike("dislike")} icon={<IoThumbsDown color={isLike == "dislike" && "#f00"}  size={25} />} />
                    <ShortCardIcons text={comments} icon={<IoChatbubble size={25} />} />
                    <ShortCardIcons text={"Share"} icon={<IoShareSocial size={25} />} />
                </VStack>
            </Flex>
        </Flex>
    )
}

export default ShortCard