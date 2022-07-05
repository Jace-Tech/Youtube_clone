import React from 'react'
import { Flex } from '@chakra-ui/react'
import VideoCard from '../components/VideoCard'

import image1 from "../assets/img/image1.jpg"
import icon1 from "../assets/img/jace.png"

const HomeMain = () => {
    return (
        <Flex w={"100%"} flexWrap={"wrap"} gap={5} p={'4'}>
            {
                new Array(12).fill("_").map((_, index) => (
                    <VideoCard 
                        key={index}
                        image={image1}
                        icon={icon1}
                        datePosted={"7 days ago"} 
                        timeFrame={"8:71"}
                        title={"Moments that can't be repeated in football"} 
                        views={"5.3M"}
                        author={"John Smith"}
                        isViewed={true}
                    />
                ))
            }
        </Flex>
    )
}

export default HomeMain