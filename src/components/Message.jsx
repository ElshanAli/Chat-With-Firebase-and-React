import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://cdn.pixabay.com/photo/2023/03/03/13/28/man-7827681_960_720.jpg" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://cdn.pixabay.com/photo/2023/03/03/13/28/man-7827681_960_720.jpg" alt="" />
      </div>
    </div>
  )
}

export default Message