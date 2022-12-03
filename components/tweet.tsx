import React from 'react';
import TimeAgo from 'react-time-ago';
import { Tweet } from '../typings';
import {HeartIcon, ChatBubbleBottomCenterIcon} from '@heroicons/react/24/outline'


interface Props {
    tweet: Tweet;
};

function Tweet({tweet}: Props) {
    return (
        <div className='flex flex-col space-x-3 border-y border-gray-100 p-5'>
            <div className='flex space-x-3'>
                <img className='h-10 w-10 rounded-full object-cover' src={tweet.profileImg} alt="user image" />
                <div>
                    <div className='flex items-center space-x-1'>
                        <p className='mr-1 font-bold'>{tweet.username}</p>
                        <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
                        <TimeAgo date={new Date(tweet._createdAt)} locale="en-US"/>
                    </div>
                    <p className='pt-1'>{tweet.text}</p>
                    {tweet.image && (
                        <img src={tweet.image} alt="" className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-xl'/>
                    )}
                </div>
            </div>
            <div >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Tweet;