import React, { useEffect, useState } from 'react';
import TimeAgo from 'react-time-ago';
import { Tweet } from '../typings';
import {HeartIcon, ChatBubbleBottomCenterIcon, ArrowsRightLeftIcon, ArrowUpOnSquareIcon} from '@heroicons/react/24/outline'
import { fetchComments } from '../utils/fetchComments';
import {Comment} from '../typings';

interface Props {
    tweet: Tweet;
};

function Tweet({tweet}: Props) {
    const [comments, setComments] = useState<Comment[]>([]);
    const refreshComments = async () => {
        const comments: Comment[] = await fetchComments(tweet._id);
        console.log(comments);
        setComments(comments);
    }
    useEffect(() => {
        refreshComments();
    }, []);
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
            <div className='flex justify-between mt-5'>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                    <ChatBubbleBottomCenterIcon className='h-5 w-5' />
                </div>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                    <HeartIcon className='h-5 w-5' />
                </div>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                    <ArrowUpOnSquareIcon  className='h-5 w-5'/>
                </div>
                <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                    <ArrowsRightLeftIcon className='h-5 w-5' />
                </div>
            </div>
            {/* Comments */}

            {comments?.length > 0 && (
                <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
                    {comments.map(comment => (
                        <div key={comment._id} className='flex space-x-2'>
                            <img src={comment.profileImg} alt="user img" className='h-7 w-7 object-cover rounded-full'/>
                            <div>
                                <div className='flex items-center space-x-1'>
                                    <p className='mr-1 font-bold'>{comment.username}</p>
                                    <p className='hidden text-sm text-gray-500 lg:inline'>@{comment.username.replace(/\s+/g, '').toLowerCase()}</p>
                                    <TimeAgo className='text-sm text-gray-500' date={new Date(comment._createdAt)} locale="en-US"/>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Tweet;