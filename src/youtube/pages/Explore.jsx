import { Box, Container, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import { RiFireLine } from "react-icons/ri"
import { MdOutlineLocalFireDepartment } from "react-icons/md"
import { HiMusicNote } from "react-icons/hi"
import { SiYoutubegaming } from "react-icons/si"
import { IoNewspaperSharp } from "react-icons/io5"
import { FaTrophy } from "react-icons/fa"
import ExploreItem from '../components/ExploreItem'
import { Routes } from 'react-router-dom'
import TrendingVideo from '../components/TrendingVideo'
import MusicVideo from '../components/MusicVideo'
import GamingVideo from '../components/GamingVideo'
import NewsVideo from '../components/NewsVideo'
import SportVideo from '../components/SportVideo'

const Explore = () => {
    const [pageHeading, setPageHeading] = useState("Trending videos")

    const exploreItems = [
        {
            icon: <MdOutlineLocalFireDepartment size={36} color={"rgb(216,16,32)"} />,
            text: "trending"
        },
        {
            icon: <HiMusicNote size={36} color={"rgb(221,174,40)"} />,
            text: "music"
        },
        {
            icon: <SiYoutubegaming size={36} color={"rgb(195,77,35)"} />,
            text: "gaming"
        },
        {
            icon: <IoNewspaperSharp size={36} color={"rgb(121,152,231)"} />,
            text: "news"
        },
        {
            icon: <FaTrophy size={36} color={"rgb(30,53,251)"} />,
            text: "sports"
        },
    ]

    const handleClick = text => setPageHeading(`${text} videos`)
    return (
        <Box p={4}>
            <Container maxW={'container.lg'}>
                <Flex flexWrap={"wrap"} gap={1.5}>
                    { 
                        exploreItems.map(({ icon, text }, index) => (
                            <ExploreItem key={`${text}-${index}`} handleClick={handleClick} icon={icon} text={text} />
                        ))
                    }
                </Flex>

                <Box mt={6}>
                    <Heading color={"white"} fontSize={"lg"}>{ pageHeading }</Heading>

                    <Box mt={5}>
                        {
                            pageHeading?.split(" ")[0].toLowerCase() == "trending" ? (
                                <TrendingVideo />
                            ) : pageHeading?.split(" ")[0].toLowerCase() == "music" ? (
                                <MusicVideo />
                            ) : pageHeading?.split(" ")[0].toLowerCase() == "gaming" ? (
                                <GamingVideo />
                            ) : pageHeading?.split(" ")[0].toLowerCase() == "news" ? (
                                <NewsVideo />
                            ) : pageHeading?.split(" ")[0].toLowerCase() == "sports" ? (
                                <SportVideo />
                            ) : (
                                <TrendingVideo />
                            )
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Explore