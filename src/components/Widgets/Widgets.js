import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
            title="Social app" 
            src="https://www.newsbreak.com/"
            width="360" 
            height="100%" 
            style={{border: "none", overflow: "hidden" }}
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true"  
            allow= "encrypted-media">
            </iframe>
        </div>
    )
}

export default Widgets
