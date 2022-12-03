import React from 'react';
import {ArrowPathIcon} from '@heroicons/react/24/outline';
import { Tweetbox } from './tweetbox';
import { Tweet } from '../typings';
import TweetComponent from './tweet';
interface Props {
    tweets: Tweet[];
};

export function Feed({tweets}: Props) {
    return (
        <div className='col-span-7 lg:col-span-5 border-x px-2'>
            <div className='flex items-center justify-between'>
                <h1>Home</h1>
                <ArrowPathIcon className='h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
            </div>

            {/* tweetbox */}
            <div>
                <Tweetbox />
            </div>
            {/* FEED */}
            <div>
                {
                    tweets.map(tweet => (
                        <TweetComponent key={tweet._id} tweet={tweet}/>
                    ))
                }
            </div>
        </div>
    );
}