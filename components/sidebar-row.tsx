import React, { ReactNode, SVGProps } from 'react';

interface SidebarRowProps {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    title: string;
}

export function SidebarRow({Icon, title}: SidebarRowProps) {
    return (
        <div className="flex items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 group max-w-fit">
            <Icon className='w-6 h-6'/>
            <p className='group-hover:text-twitter'>{title}</p>
        </div>
    )
}