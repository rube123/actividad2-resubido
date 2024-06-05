import React from 'react';
import '../css/counter.css';

function Counter({ counter }) {
    return (
        <div className='counter'>
            {counter}
        </div>
    );
}

export default Counter;