import React from 'react';
import infoData from '@/data/studentInfo.json'

const page = async({params}) => {



    const { info } = await params;
    const data = infoData.find((data)=> data.slug === info)

    // console.log(data.id);
    
    return (
        <div className='flex justify-center items-center space-x-4 flex-col mt-50 border-2 border-orange-600 p-4 rounded-lg mx-auto w-10/12 my-auto'>
            <h1>{data.name}</h1>
            <p>{data.university}</p>
            <p>{data.address}</p>
            <p>{data.contactNumber}</p>
            <p className='text-blue-400'>{data.about}</p>
        </div>
    );
};

export default page;