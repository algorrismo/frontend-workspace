import React from 'react';

const Home = () => {
    const userName = "Ismail Hossain Fahim";

    function PersonInfo() {
        return (
            <p className="text-2xl text-white font-bold text-center">
                SWE
            </p>
        );
    }

    return (
        <div className="App">
            <h1 className='bg-white text-2xl text-orange-400 text-center mt-7'>This is week-01 </h1>
            <h1 className="text-xl text-center text-blue-200">This is parent component</h1>
            <header className="App-header">
                <p className="text-white text-5xl font-bold bg-green-900">
                    Ismail Hossain Fahim
                </p>
                <p className="text-white text-2xl font-bold bg-red-300">
                    Hello {userName}
                </p>

                <PersonInfo />

                <p className="text-2xl text-white font-bold text-center">
                    23-50009-1
                </p>
            </header>
        </div>
    );
};

export default Home;
