import { Alert, Button, TableBody, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const { token } = useAuth();

    const handleOnBlur = (e) => {
        const value = e.target.value;
        setEmail(value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);

                }

            })

    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: "40%", m: 1 }}
                    onBlur={handleOnBlur}
                    type="email"
                    label="Email"
                    variant="standard"
                />
                <br />
                <br />
                <Button type='submit' variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;