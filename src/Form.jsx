import { useState, useEffect } from "react"
import "./css/form.css"
import PostCard from "./PostCard"

const Form = () => {
    const [number, setNumber] = useState(0)
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [post, setPost] = useState({
        title: "",
        userId: "",
        body: ""
    })

    // const handleIncrement = () => {
    //     // setNumber(number + 1)
    //     setNumber((prevNumber) => prevNumber + 1)
    
    // }

    const generateId = (length = 3) => {
        let id = ""
        const prefix = "1234567890abcdefghijklmnopqrstuvwxyz"

        for(let i = 0; i < length; i++) {
            id += prefix[Math.floor(Math.random() * prefix.length)]
        }

        return id
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = {
            ...post,
            id: generateId(5)
        }

        setPosts(prev => [...prev, data])
        setPost({
            title: "",
            userId: "",
            body: ""
        })

        setIsLoading(false)

    }

    // const handleSubmit = async (event) => {
    //     setIsLoading(true)
    //     event.preventDefault()

    //     const options = {
    //         method: "POST",
    //         body: JSON.stringify({...post, id: generateId()}),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }

    //     const response = await fetch("https://jsonplaceholder.typicode.com/posts", options)
    //     const data = await response.json()
    //     setIsLoading(false)
    //     console.log(data)
    // }

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(res => res.json())
    //         .then(data => setPosts(data))
    // }, [])



    return (
        <div className="form-body">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={post.title} onChange={(e) => setPost(prev => ({...prev, title: e.target.value }) )} name="firstname" id="" />

                <input type="text" placeholder="User Id" value={post.userId} onChange={(e) => setPost(prev => ({...prev, userId: e.target.value }) )} name="lastname" id="" />

                <textarea placeholder="Body" onChange={(e) => setPost(prev => ({...prev, body: e.target.value }) )} value={post.body} cols="30" rows="10"></textarea>
                
                <button disabled={isLoading}>
                    { isLoading ? "Loading..." : "Submit" }
                </button>
            </form>
            

            <div className="post-wrapper">
                { 
                    posts?.length ? 
                        posts.map(item => (
                            <PostCard  
                                key={item.id}
                                body={item.body}
                                title={item.title}
                                user={item.userId}
                            />
                        )) : (
                            <h4>No Post found</h4>
                        )
                }
            </div>
        </div>
    )
}

export default Form