import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import "./Chat.css"
import { SearchOutlined } from '@mui/icons-material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';



function Chat() {
  return (
    <div className='Chat'>
      <div className='chat__header'>
        <Avatar />
        <div className="chat__headerinfo">
          <h3>Room Name</h3>
          <p>last seen of user</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertRoundedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Chat
//  rfce is shortcut to get initials