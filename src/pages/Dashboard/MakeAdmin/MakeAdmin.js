import { Button, TableBody, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

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
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    onBlur={handleOnBlur}
                    type="email"
                    label="Email"
                    variant="standard" />
                <br />
                <br />
                <Button type='submit' variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;