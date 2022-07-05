import React, { useState } from 'react'
import {Box, Button, Flex, Heading, HStack, IconButton} from "@chakra-ui/react"
import SubcriptionSection from '../components/SubcriptionSection'

import image1 from "../assets/img/image1.jpg"
import icon1 from "../assets/img/jace.png"

import { IoGridOutline, IoGrid, IoListOutline, IoList } from 'react-icons/io5'

const Subscription = () => {
    const [mode, setMode] = useState("grid")
    const data = [
        {
            image: image1,
            icon: icon1,
            datePosted: "7 days ago",
            timeFrame: "8:71",
            title: "Moments that can't be repeated in football",
            views: "5.3M",
            author: "John Smith",
            isViewed: true,
        },
        {
            image: image1,
            icon: icon1,
            datePosted: "7 days ago",
            timeFrame: "8:71",
            title: "Moments that can't be repeated in football",
            views: "5.3M",
            author: "John Smith",
            isViewed: true,
        },
        {
            image: image1,
            icon: icon1,
            datePosted: "7 days ago",
            timeFrame: "8:71",
            title: "Moments that can't be repeated in football",
            views: "5.3M",
            author: "John Smith",
            isViewed: true,
        },
        {
            image: image1,
            icon: icon1,
            datePosted: "7 days ago",
            timeFrame: "8:71",
            title: "Moments that can't be repeated in football",
            views: "5.3M",
            author: "John Smith",
            isViewed: true,
        },
        {
            image: image1,
            icon: icon1,
            datePosted: "7 days ago",
            timeFrame: "8:71",
            title: "Moments that can't be repeated in football",
            views: "5.3M",
            author: "John Smith",
            isViewed: true,
        },
        {
            image: image1,
            icon: icon1,
            datePosted: "7 days ago",
            timeFrame: "8:71",
            title: "Moments that can't be repeated in football",
            views: "5.3M",
            author: "John Smith",
            isViewed: true,
        },
        {
            image: image1,
            icon: icon1,
            datePosted: "7 days ago",
            timeFrame: "8:71",
            title: "Moments that can't be repeated in football",
            views: "5.3M",
            author: "John Smith",
            isViewed: true,
        },
        {
            image: image1,
            icon: icon1,
            datePosted: "7 days ago",
            timeFrame: "8:71",
            title: "Moments that can't be repeated in football",
            views: "5.3M",
            author: "John Smith",
            isViewed: true,
        },
        {
            image: image1,
            icon: icon1,
            datePosted: "7 days ago",
            timeFrame: "8:71",
            title: "Moments that can't be repeated in football",
            views: "5.3M",
            author: "John Smith",
            isViewed: true,
        },
        {
            image: image1,
            icon: icon1,
            datePosted: "7 days ago",
            timeFrame: "8:71",
            title: "Moments that can't be repeated in football",
            views: "5.3M",
            author: "John Smith",
            isViewed: true,
        },
    ]
    return (
        <Box p={4} pos={"relative"}>
            <HStack pos={"absolute"} zIndex={10} right={12} top={12}>
                <Button variant={"link"} _hover={{ textDecor: "none" }} colorScheme={"blue"}  textTransform={"uppercase"}>Manage</Button>             
                
                <IconButton variant={"outline"} fontSize={"lg"} colorScheme={"whiteAlpha"} rounded={"full"} borderColor={"gray.800"} onClick={() => setMode("grid")}>
                    { mode === "grid" ? ( <IoGrid color={"#fff"} /> ) : ( <IoGridOutline /> ) }
                </IconButton>
                
                <IconButton variant={"outline"} fontSize={"lg"} colorScheme={"whiteAlpha"} rounded={"full"} borderColor={"gray.800"} onClick={() => setMode("list")}>
                    { mode === "list" ? ( <IoList color={"#fff"} /> ) : ( <IoListOutline /> ) }
                </IconButton>
            </HStack>

            <SubcriptionSection 
                mode={mode}
                title={"today"} 
                data={data}
            />

            <SubcriptionSection 
                mode={mode}
                title={"week"} 
                data={data}
            />
        </Box>
    )
}

export default Subscription