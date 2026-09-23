import React from 'react';
import Apiholder from '../apiholder';

const FakeApi = () => {
    return (
        <div>
            <h1 className="text-2xl text-center text-blue-200 mt-7">Fake API</h1>

            <div>
                <Apiholder text="This is a fake API component" />
            </div>
        </div>
    );
};

export default FakeApi;
