import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Explore from '../pages/Explore'
import Library from '../pages/Library'
import Short from '../pages/Short'
import Subscription from '../pages/Subscription'
import HomeMain from '../pages/HomeMain'

const Main = () => {
    const routes = [
        { 
            path: "/",
            componenet: <HomeMain />
        },
        { 
            path: "/explore",
            componenet: <Explore />
        },
        { 
            path: "/short",
            componenet: <Short />
        },
        { 
            path: "/subscriptions",
            componenet: <Subscription />
        },
        { 
            path: "/library",
            componenet: <Library />
        },
    ]
    return (
        <>
            <Routes>
                {
                    routes.map(({ path, componenet }, index) => <Route key={`${path}-${index}`} path={path} element={componenet} /> )
                }
            </Routes>
        </>
    )
}

export default Main