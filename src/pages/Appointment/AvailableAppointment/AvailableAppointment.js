import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <h1>this is AvailableAppointment {date.toDateString()}</h1>
        </div>
    );
};

export default AvailableAppointment;