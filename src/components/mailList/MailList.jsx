import React from 'react'
import "./mailList.css"

export default function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, Save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContanier">
            <input type="text" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
