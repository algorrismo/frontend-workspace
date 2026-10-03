import React from 'react';
import data from "../../data/studentInfo.json"
import Link from 'next/link';
const page = () => {


    return (
        <div className='mt-10 flex flex-col items-center justify-center gap-4'>
            <p>This is the information page.</p>
            <p>Welcome to the information page!</p>
            <p className='text-orange-600'>Click any link to learn more.</p>

            <div className='grid grid-cols-3 gap-4 mx-auto'>
   
                {
                    data.map((data,index)=>{
                        return(
                            <div key={data.id} className='border-2 border-orange-600 p-4 rounded-lg'>
                                <p>Name: {data.name}</p>
                                <p>university: {data.university}</p>
                                {/* <p>Grade: {data.address}</p>
                                <p>Contact: {data.contactNumber}</p>
                                <p>About: {data.about}</p> */}
                                <Link href={`/information/${data.slug}`} className='text-gray-900 font-bold hover:cursor-pointer'>check to see more information</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;