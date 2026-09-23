import React from 'react';

const Map = ({text}) => {

    const students = [
                { studentId: 1, name: 'Ayesha Rahman', uni: 'University of Dhaka', address: '12/D, Dhanmondi, Dhaka' },
                { studentId: 2, name: 'Mahmud Hasan', uni: 'BUET', address: '8/A, Mirpur, Dhaka' },
                { studentId: 3, name: 'Nusrat Jahan', uni: 'Jahangirnagar University', address: '21, Savar, Dhaka' },
                { studentId: 4, name: 'Tamim Ahmed', uni: 'Chittagong University', address: '45, Agrabad, Chittagong' },
    ];

    return (
        <div>
            <p className='text-3xl text-yellow-300 text-center'>{text}</p>

            <div className='grid grid-cols-2'>
                {students.map((student) => (
                    <div key={student.studentId}>
                        <p className='text-2xl text-white font-bold text-center'>{student.name}</p>
                        <p className='text-xl text-white font-bold text-center'>{student.uni}</p>
                        <p className='text-lg text-white font-bold text-center'>{student.address}</p>
                    </div>
                ))}
            </div>
            
            {/* if index dose not containes 0 */}
            {/* <div className='grid grid-cols-2'>
                {students.map((student, index) => (
                    <div key={index}>
                        <p className='text-4xl text-red-500 font-bold text-center'>{index}</p>
                        <p className='text-2xl text-white font-bold text-center'>{student.name}</p>
                        <p className='text-xl text-white font-bold text-center'>{student.uni}</p>
                        <p className='text-lg text-white font-bold text-center'>{student.address}</p>

                    </div>
                ))}
            </div> */}

        </div>
    );
};

export default Map;