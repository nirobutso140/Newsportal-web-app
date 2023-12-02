import React from 'react';

const Title = ({children}) => {
    return (
        <>
            <p className='text-teal-500 text-center mb-12 text-2xl uppercase'>{children}</p>
        </>
    );
};

export default Title;