import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Blog",
};

const BlogPage =[
    {
        id: 1,
        title: "My First Blog Post",
        content: "This is the content of my first blog post."
    },
    {
        id: 2,
        title: "My Second Blog Post",
        content: "This is the content of my second blog post."
    },{
        id: 3,
        title: "My Third Blog Post",
        content: "This is the content of my third blog post."
    },{
        id: 4,
        title: "My Fourth Blog Post",
        content: "This is the content of my fourth blog post."
    },{
        id: 5,
        title: "My Fifth Blog Post",
        content: "This is the content of my fifth blog post."
    }
]
const page = () => {
    return (
        <div className='flex justify-center items-center flex-1 flex-col mt-30 space-y-2'>

            <h1 className='text-2xl font-bold'>My Blog</h1>
            <h2>Welcome to my blog!</h2>
            <p>Here are some of my latest posts:</p>
            <p className='w-180 text-center text-orange-700'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt minima facilis quis dignissimos, doloribus facere ut delectus dolorum tempora? Sint sequi sapiente quasi nemo ratione et natus! Facilis eos nulla, enim similique soluta vel et maiores id dolor dolores delectus ducimus laboriosam possimus nesciunt recusandae illo reiciendis iste ullam officia, dolorum quaerat beatae optio velit. Reiciendis architecto itaque perferendis tempore fugiat earum cupiditate minus, voluptatem eos reprehenderit totam laborum illum nam corrupti! Perferendis.</p>

            <div className='space-y-3'>
                <h2 className='text-center text-2xl text-pink-600'>Here are my latest blog posts:</h2>
                {
                    BlogPage.map((posts)=>{
                        return(
                            <div key={posts.id} className='border-t-2 border-orange-700  w-180'>
                                <Link href={`/blog/${posts.id}`} className='font-bold'>{posts.title}</Link>
                                <p>{posts.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;