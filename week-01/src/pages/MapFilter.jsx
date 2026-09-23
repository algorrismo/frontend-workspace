import React from 'react';
import Map from '../components/map';
import Filter from '../components/filter';

const MapFilter = () => {
    return (
        <div>
            <h1 className="text-2xl text-center text-blue-200 mt-7">Map / Filter</h1>

            <div>
                <Map text="This is a map component" />
            </div>

            <div>
                <Filter text="This is a filter component" />
            </div>
        </div>
    );
};

export default MapFilter;
