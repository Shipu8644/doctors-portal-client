import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-bayou-81687.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <Typography sx={{ fontWeight: 500, mt: 6, color: '#5CE7ED' }} variant="h5" component="div" >
                OUR DOCTORS
            </Typography>
            <Container>
                <Grid container spacing={2} sx={{ my: 2 }}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;