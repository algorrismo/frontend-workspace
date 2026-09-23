import React from 'react';

const Apiloader = ({ post }) => {
    return (
        <div className='text-center border-red-500 border-2 p-5 rounded-md bg-gray-800 boroundder-2'>
            <p className='text-gray-400'>{post?.id}</p>
            <p className='text-gray-400'>{post?.userId}</p>
            <p className='text-white'>{post.title}</p>
            <p className='text-gray-300'>{post.body}</p>
            <p className='text-gray-400'>Likes: {post?.reactions?.likes}</p>
            <p className='text-gray-400'>Dislikes: {post?.reactions?.dislikes}</p>
            <p className='text-gray-400'>Views: {post.views}</p>
            <div className='flex justify-center gap-2 mt-2'>
                {
                    post?.tags.map((tag, index) => {
                        return <span key={index} className='bg-gray-600 p-1 rounded-md text-sm'>{tag}</span>
                    })
                }
            </div>
        </div>
    );
};

export default Apiloader;



	
// id	1
// title	"His mother had always taught him"
// body	"His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind."
// tags	
// 0	"history"
// 1	"american"
// 2	"crime"
// reactions	
// likes	192
// dislikes	25
// views	305
// userId	121