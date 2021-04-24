import React from 'react';
import spinner from './spinner.gif';

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