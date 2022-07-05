import React from 'react'

const PostCard = ({ title, body, user }) => {
    return (
        <div className="post-card">
            <h3 className="post-title">{ title }</h3>
            <p className="post-body">{ body }</p>
            <p className="post-user"> { user } </p>
        </div>
    )
}

export default PostCard