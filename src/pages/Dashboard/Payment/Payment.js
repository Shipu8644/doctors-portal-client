import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js'
const stripePromise = loadStripe('pk_test_51Jw67GD1wBtFKjaWHP89DwViajzGVR37uCq6q9HvwTaA5pkuNaLgYr3wIFHUdNagTUe7t9aqspEbq779nYr9dR8x00n7wxiUJI');


const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});


    useEffect(() => {
        fetch(`https://afternoon-bayou-81687.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])


    return (
        <div>
            <h2>Please pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay :${appointment.price}</h4>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}

                />
            </Elements>}
        </div>
    );
};

export default Payment;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create payment method
6. server: create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
*/