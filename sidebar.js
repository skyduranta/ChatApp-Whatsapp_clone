import React from 'react';
import "./sidebar.css";
import SidebarChat from './SidebarChat';
import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import { Avatar, Icon, IconButton } from '@mui/material';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { SearchOutlined } from '@mui/icons-material';

function sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src="https://avatars.githubusercontent.com/u/104623536?s=400&u=63b4b202a9464cb035ac298962ea91c874988153&v=4" />
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <ChatRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type="text" />
                </div>

            </div>
            <div className='sidebar__chats'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}
export default sidebar 