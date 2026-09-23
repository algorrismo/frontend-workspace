import React from 'react';
import Child from '../components/child';

const ChildComponents = () => {
    return (
        <div>
            <h1 className="text-2xl text-center text-blue-200 mt-7">Child Components</h1>

            <div>
                <Child
                    textColor="text-center text-5xl text-pink-500"
                    heading="Hello from child component"
                    headingColor="text-2xl text-white font-bold text-center"
                />
            </div>
        </div>
    );
};

export default ChildComponents;
