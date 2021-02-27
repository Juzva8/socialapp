import React from 'react'
import MessageSender from '../MessageSender/MessageSender'
import StoryReel from '../StoryReel/StoryReel'
import './Feed.css'
import Post from '../Post/Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
            profilePic= "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/s320x320/55903546_321861358406531_8089998693643583488_n.jpg?tp=1&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_ohc=QOPbSkYtSWMAX_cW0PO&oh=f135eff1cb786b608fa6cbb420f169d8&oe=6062E016"
            message= "dummy data"
            timestamp = "02/26/2021"
            username = "Juzva8"
            image="https://specials-images.forbesimg.com/imageserve/5ed39dffc8741800074baf6c/960x0.jpg?fit=scale"
            />
            <Post 
            profilePic= "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/s320x320/55903546_321861358406531_8089998693643583488_n.jpg?tp=1&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_ohc=QOPbSkYtSWMAX_cW0PO&oh=f135eff1cb786b608fa6cbb420f169d8&oe=6062E016"
            message= "dummy data"
            timestamp = "02/26/2021"
            username = "Juzva8"
            image=""
            />

        </div>
    )
}

export default Feed
