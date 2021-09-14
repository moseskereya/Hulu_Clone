import React from 'react';
import spinner from './spinner.gif';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="spinner">
            <img
                src={spinner}
                alt="Loading..."
            />
        </div>
    );
};