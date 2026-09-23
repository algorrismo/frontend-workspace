import React, { useState } from 'react';

const Filter = ({ text }) => {
    const [name, searchName] = useState('');

    const studentNames = [
        'Ayesha Rahman',
        'Mahmud Hasan',
        'Nusrat Jahan',
        'Tamim Ahmed',
        'Ismail Hossain Fahim',
        'Rifat Jahan',
        'Sadia Sultana',
        'Nusrat Jahan',
        'Tamim Ahmed',
        'Ismail Hossain Fahim',
        'Rifat Jahan',
        'Sadia Sultana',
        'Nusrat Jahan',
        'Tamim Ahmed',
        'Ismail Hossain Fahim',
        'Rifat Jahan',
        'Sadia Sultana',
        'Nusrat Jahan',
        'Tamim Ahmed',
        'Ismail Hossain Fahim',
        'Rifat Jahan',
        'Sadia Sultana',
        'Nusrat Jahan',
        'Tamim Ahmed',
        'Ismail Hossain Fahim',
        'Rifat Jahan',
        'Sadia Sultana'
    ];

    const filteredStudentNames = studentNames.filter((studentName) =>
        studentName.toLowerCase().includes(name.toLowerCase())
    );

    return (
        <div>
            <p className="text-3xl text-green-300 text-center">
                {text}
            </p>

            <div className="flex justify-center mt-5 items-center gap-5 flex-col">

                <input
                    value={name}
                    onChange={(e) => searchName(e.target.value)}
                    placeholder="Search student name..."
                    className="border px-3 py-2 rounded"
                />

                {name && filteredStudentNames.length === 0 ? (
                    <p className="text-xl text-red-600 font-bold text-center">
                        {`This name does not exist: ${name}`}
                    </p>
                ) : (
                    filteredStudentNames.map((studentName, index) => (
                        <p 
                            key={index} 
                            className="text-xl text-blue-300 font-bold text-center">
                                
                            {studentName}
                        </p>
                    ))
                )}
            </div>
        </div>
    );
};

export default Filter;