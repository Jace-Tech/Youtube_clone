import { VStack } from '@chakra-ui/react'
import React from 'react'
import avatar from "../assets/img/jace.png"
import video from "../assets/vids/video.mp4"
import ShortCard from '../components/ShortCard'

const Short = () => {
    const shortItems = [
        {
            title: "Win $1000 every time 😳",
            authorIcon: avatar,
            authorName: "John Smith",
            video,
            likes: "964k",
            comments: "2k"
        }
    ]
    return (
        <VStack p={4}>
            {
                shortItems.map((shortItem, index) => <ShortCard {...shortItem} key={`${index}`} />)
            }
        </VStack>   
    )
}

export default Short