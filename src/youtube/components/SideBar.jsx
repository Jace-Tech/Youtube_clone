import { IconButton, LinkBox, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMenuOutline, IoHomeOutline, IoHomeSharp } from 'react-icons/io5'
import { MdOutlineExplore, MdPlayCircle, MdPlayCircleOutline, MdExplore, MdOutlineSubscriptions, MdVideoLibrary, MdOutlineVideoLibrary, MdSubscriptions } from 'react-icons/md'


const SideBar = () => {
    const { pathname } = useLocation()
    const [active, setActive] = useState("/")

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

    const sidebarNavItem = [
        {
            link: "/",
            name: "home",
            icon: <IoHomeOutline size={25} color={"#fff"} />,
            activeIcon: <IoHomeSharp size={25} color={"#fff"} />,
        },
        {
            link: "/explore",
            name: "explore",
            icon:  <MdOutlineExplore size={25} color={"#fff"} />,
            activeIcon: <MdExplore size={25} color={"#fff"} />
        },
        {
            link: "/short",
            name: "short",
            icon: <MdPlayCircleOutline size={25} color={"#fff"} />,
            activeIcon: <MdPlayCircle size={25} color={"#fff"} />,
        },
        {
            link: "/subscriptions",
            name: "subscriptions",
            icon: <MdOutlineSubscriptions size={25} color={"#fff"} />,
            activeIcon: <MdSubscriptions size={25} color={"#fff"} />,
        },
        {
            link: "/library",
            name: "library",
            icon: <MdOutlineVideoLibrary size={25} color={"#fff"} />,
            activeIcon: <MdVideoLibrary size={25} color={"#fff"} />,
        },
    ]
    return (
        <VStack gap={"1rem"} h={"100%"} py={"1rem"}>
            <IconButton bgColor={"transparent"} _hover={{bgColor: "gray.900"}}>
                <IoMenuOutline size={25} color={"#fff"}/>
            </IconButton>

            {
                sidebarNavItem.map((item, index) => (
                    <LinkBox key={index} w={"100%"}>
                        <Link to={item.link} w={"100%"}>
                            <VStack minW={"100%"} py={"2.5"} px={"3"} _hover={{bgColor: "gray.900"}}>
                                { active === item.link ? item.activeIcon : item.icon }
                                <Text 
                                    textTransform={"capitalize"} 
                                    fontSize={".65rem"} color={"#fff"} 
                                    fontWeight={600}
                                >
                                    {item.name}
                                </Text>
                            </VStack>
                        </Link>
                    </LinkBox>
                ))
            }
        </VStack>

    )
}

export default SideBar