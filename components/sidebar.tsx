import React from "react";
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    RectangleStackIcon,
    EllipsisHorizontalCircleIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/24/outline';

import { SidebarRow } from "./sidebar-row";

export function Sidebar() {
    return (
        <div>
            <img className="h-10 w-10" src="https://links.papareact.com/drq" alt="Twitter icon" />
            <SidebarRow title='Home' Icon={HomeIcon}/>
            <SidebarRow title='Explore' Icon={HashtagIcon}/>
            <SidebarRow title='Notifications' Icon={BellIcon}/>
            <SidebarRow title='Messages' Icon={EnvelopeIcon}/>
            <SidebarRow title='Bookmarks' Icon={BookmarkIcon}/>
            <SidebarRow title='Collections' Icon={RectangleStackIcon}/>
        </div>
    );
}