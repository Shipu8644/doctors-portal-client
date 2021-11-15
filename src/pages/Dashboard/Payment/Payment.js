import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js'
const stripePromise = loadStripe('pk_test_51Jw67GD1wBtFKjaWHP89DwViajzGVR37uCq6q9HvwTaA5pkuNaLgYr3wIFHUdNagTUe7t9aqspEbq779nYr9dR8x00n7wxiUJI');


const Payment = () => {
    const { appointId } = useParams();
    const [appointment, setAppointment] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointId])


    return (
        <div>
            <h2>Please pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay :${appointment.price}</h4>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}

                />
            </Elements>
        </div>
    );
};

export default Payment;