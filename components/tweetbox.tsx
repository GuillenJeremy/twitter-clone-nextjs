import React, { ReactEventHandler, useState } from 'react';
import {
    CalendarIcon,
    FaceSmileIcon,
    MapPinIcon,
    CameraIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
export function Tweetbox() {
    const [input, setInput] = useState<string>('');

    return (
        <div className='flex space-x-2 p- 5'>
            <img className='h-14 2-14 rounded-full object-cover mt-4' src="https://links.papareact.com/gll" alt=""/>
            <div className='flex flex-1 items-center pl-2'>
                <form className='flex flex-1 flex-col'>
                    <input value={input} type='text' placeholder="What's happening?" className='h-24 w-full text-xl outline-none placeholder:text-xl' onChange={(e) => setInput(e.target.value)}/>
                    <div className='flex items-center '>
                        <div className='flex space-x-2 text-twitter flex-1'>
                            {/* ICONS */}
                            <CameraIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                            <MagnifyingGlassIcon className='h-5 w-5 cursor-pointer'/>
                            <FaceSmileIcon className='h-5 w-5 cursor-pointer' />
                            <CalendarIcon className='h-5 w-5 cursor-pointer' />
                            <MapPinIcon className='h-5 w-5 cursor-pointer' />
                        </div>
                        <button disabled={!input} className='bg-twitter px-5 py-2 font-bold text-white rounded-full'>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}