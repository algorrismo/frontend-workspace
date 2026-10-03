import React, { useState } from 'react';

const NameState = () => {

    const [name, setName] = useState("Ismail Hossain")

    function handleChnagedName(e){
        setName(e.target.value)

    }
    function resetName(){
        setName("Ismail Hossain")
    }

    return (
        <div>
            <p className='text-2xl text-fuchsia-800 text-center mt-5'>This is for name state</p>


            {/*  {This is a name state component} */}
            <div className='flex gap-6 flex-col items-center justify-center mt-5'>
                <input value={name} onChange={handleChnagedName}/>

            <p className="text-2xl text-white font-bold text-center">
                Name: <span className='text-2xl text-orange-400 font-bold'>{name}</span>
            </p>
            </div>
            
             <div className='flex justify-center gap-5 mt-5'>
               {/* <button className='bg-green-800 p-2 w-24'>Change Name</button> */}
                <button onClick={resetName} className='bg-red-800 p-2 w-24'>Reset Name</button>
            </div>
        </div>
    );
};

export default NameState;