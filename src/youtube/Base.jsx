import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom"
import LandingLayout from './layouts/LandingLayout'

const Base = () => {
    return (
        <ChakraProvider>
            <Router>
                <LandingLayout />
            </Router>
        </ChakraProvider>
    )
}

export default Base