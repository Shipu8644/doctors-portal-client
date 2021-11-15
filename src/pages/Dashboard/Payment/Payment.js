import React from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const { appointId } = useParams();
    return (
        <div>
            <h2>Please pay for: {appointId}</h2>
        </div>
    );
};

export default Payment;