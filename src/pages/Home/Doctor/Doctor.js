import React from 'react';
import { Grid, Typography } from '@mui/material';

const Doctor = ({ doctor }) => {
    const { name, image } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img
                style={{ width: '350px', height: '270px', borderRadius: '5px' }}
                src={`data:image/png;base64,${image}`} alt="" />
            <Typography sx={{ color: '#5CE7ED' }} variant="h6">{name}</Typography>
        </Grid>
    );
};

export default Doctor;