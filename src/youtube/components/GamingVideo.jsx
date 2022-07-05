import React from 'react'
import { VStack } from '@chakra-ui/react'

import videoImage from "../assets/img/image3.jpg"
import ExploreVideoCard from './ExploreVideoCard'


const GamingVideo = () => {
    const videoItems = [
        {
            title: "Best Friends in the World: Senior Year | Episode 5",
            author: "Neptune3 Studios",
            image: videoImage,
            isVerified: true,
            views: "1.1M views",
            date: "6 days ago",
            time: "2:18:03",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque natus repellendus, exercitationem ullam non excepturi a voluptate ab est dolore delectus aliquam adipisci, laborum odio sit. Sapiente, quaerat dignissimos."
        },
        {
            title: "Best Friends in the World: Senior Year | Episode 5",
            author: "Neptune3 Studios",
            image: videoImage,
            isVerified: true,
            views: "1.1M views",
            date: "6 days ago",
            time: "2:18:03",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque natus repellendus, exercitationem ullam non excepturi a voluptate ab est dolore delectus aliquam adipisci, laborum odio sit. Sapiente, quaerat dignissimos."
        },
        {
            title: "Best Friends in the World: Senior Year | Episode 5",
            author: "Neptune3 Studios",
            image: videoImage,
            isVerified: true,
            views: "1.1M views",
            date: "6 days ago",
            time: "2:18:03",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque natus repellendus, exercitationem ullam non excepturi a voluptate ab est dolore delectus aliquam adipisci, laborum odio sit. Sapiente, quaerat dignissimos."
        },
        {
            title: "Best Friends in the World: Senior Year | Episode 5",
            author: "Neptune3 Studios",
            image: videoImage,
            isVerified: true,
            views: "1.1M views",
            date: "6 days ago",
            time: "2:18:03",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque natus repellendus, exercitationem ullam non excepturi a voluptate ab est dolore delectus aliquam adipisci, laborum odio sit. Sapiente, quaerat dignissimos."
        },
    ]

    return (
        <VStack alignItems={"flex-start"} gap={5}>
            {videoItems.map((items, index) => <ExploreVideoCard key={`${items.title}-${index}`} {...items} />)}
        </VStack>
    )
}

export default GamingVideo