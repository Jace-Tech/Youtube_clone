import React, { useEffect, useState } from 'react'
import "./css/Fader.css"

const Fader = () => {

    const [currentIndex, setCurrentIndex] = useState(0)


    const items = [
        "Lorem ipsum dolor sit amet. 1",
        "Lorem ipsum dolor sit amet. 2",
        "Lorem ipsum dolor sit amet. 3",
        "Lorem ipsum dolor sit amet. 4",
    ]

    useEffect(() => {
        const handler = setInterval(() => {
            if(currentIndex < items.length) {
                setCurrentIndex(currentIndex + 1)
            }
            else {
                setCurrentIndex(0)
            }
        }, 2000)

        return () => clearInterval(handler)
    })
  return (
    <div className="fader">
        <h2 className="fader-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

        <div className="fader-container">
            {
                items.map((item, index) => (
                    <div key={index} className={`fader-item ${ currentIndex == index && "active" }`}>
                        { item }
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Fader