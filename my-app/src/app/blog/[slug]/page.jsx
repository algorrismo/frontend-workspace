import blogPosts from '@/blogPostData/data';
import React from 'react';

// const page = async (props) => {
//     const params = props.params;
// }

const page = async({ params }) => {
    
    //? const slug =  params.slug
    //* const data = await params;
    //* const slug = data.slug;

    //? mainly a cleaner/shorter version of the example above:
    const { slug } = await params;
    
    const data =await params;
    const slug2 = data.slug;
    
    console.log("slug:", slug);
    console.log("slug2:", slug2);

    //? find the post with the matching slug
    const post = blogPosts.find((post)=> post.slug === slug)

    // console.log("post:", post);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className='flex justify-between flex-col mt-30 mx-auto space-y-2 border-2 border-orange-700 w-180 rounded-2xl p-5 text-center'>

            <h1 className='text-2xl font-bold'>{post.title}</h1>
            <p className='text-gray-600'>{post.content}</p>
            
        </div>
    );
};

export default page;