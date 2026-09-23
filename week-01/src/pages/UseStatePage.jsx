import React from 'react';
import State from '../components/state';
import NameState from '../components/nameState';

const UseStatePage = () => {
    return (
        <div>
            <h1 className="text-2xl text-center text-blue-200 mt-7">React useState</h1>

            <div>
                <State />
                <NameState />
            </div>
        </div>
    );
};

export default UseStatePage;
