import React from 'react'
import './Sidebar.css'
import SidebarRow from '../SidebarRow/SidebarRow'
import { ExpandMoreOutlined } from '@material-ui/icons'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://avatars.githubusercontent.com/u/72834046?s=400&u=13200316b9a5b284830062c1c1bf2a347616e043&v=4" title="Lawrence Juzva" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />     
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='More' />
        </div>
    )
}

export default Sidebar
