import React, { useState } from 'react';

const State = () => {

    const [count, setCount]= useState(0)

    // function incrementCount(){
    //     setCount(count+1)
    // }

    function decrementCount(){

        if(count > 0)
            setCount(count-1)
    }


    return (

        <div>
            <div>
                <p className='text-center text-cyan-500 text-3xl font-bold'>This is a state component</p>
            </div>
                {/* display the current count */}
                <p className='text-center text-white text-2xl font-bold'>
                    {count}
                </p>
            <div>
                {/* this is where state will be managed*/}
                <div className='flex justify-center gap-5 mt-5'>
                    <button onClick={()=> setCount(count+1)} className='bg-green-800 p-2 w-12'>+1
                    </button>
                    <button onClick={decrementCount} className='bg-red-800 p-2 w-12'>-1
                    </button>
                </div>
            </div>
        </div>
    );
};

export default State;