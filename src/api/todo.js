const BASE_URL = "http://localhost:5000/todo";

export const fetchAllTodo = async () => {
    try {
        const request = await fetch(BASE_URL)
        const response = await request.json()
    
        return response
    }
    catch (err) {
        console.log(err)
        return null
    }
}

export const postTodo = async (data) => {
    try {
        const option = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const request = await fetch(BASE_URL, option)
        const response = await request.json()
    
        return response
    }
    catch (err) {
        console.log(err)
        return null
    }
}

export const updateTodo = async (data, id) => {
    try {
        const option = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
        // http://localhost:5000/todo/hdhdh-djdnjdnjdd
        const request = await fetch(`${BASE_URL}/${id}`, option)
        const response = await request.json()
    
        return response
    }
    catch (err) {
        console.log(err)
        return null
    }
}


export const deleteTodo = async (id) => {
    try {
        const option = {
            method: "DELETE",
        }
        // http://localhost:5000/todo/hdhdh-djdnjdnjdd
        const request = await fetch(`${BASE_URL}/${id}`, option)
        const response = await request.json()
    
        return response
    }
    catch (err) {
        console.log(err)
        return null
    }
}