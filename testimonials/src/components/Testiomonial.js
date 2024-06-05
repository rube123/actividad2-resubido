import React from 'react';
import '../css/testimonial.css';

function Testimonial(props) {
    return (
        <div className='container-testimonial'>
            <img className='img-testimonial' alt={`${props.img}'s profile`} src={require(`../img/img-${props.img}.png`)} />
            <div className='container-text-testimonial'>
                <p className='name-testimonial'><strong>{props.name}</strong> from {props.country}</p>
                <p className='job-testimonial'> {props.job} at <strong>{props.corporation}</strong></p>
                <p className='text-testimonial'>"{props.testimonial}"</p>
            </div>
        </div>

    );
}

export default Testimonial;