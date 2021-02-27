import { Avatar } from '@material-ui/core'
import React from 'react'
import './MessageSender.css'

function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="messageSender">
            <div className ="messageSender__top">
                <Avatar />
                <from>
                    <input className='messageSender__input' placeholder={`What is on your server?`} />
                    <input placeholder="image URL (Optional)" />
                    <button onClick={handleSubmit} type='submit'>
                        Hidden submit
                    </button>
                </from>
             </div>
            <div className ="messageSender__bottom">

            </div>
        </div>
    )
}

export default MessageSender
