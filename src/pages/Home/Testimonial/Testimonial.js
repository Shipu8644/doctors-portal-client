import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import TestimonialList from '../TestimonialList/TestimonialList';


const testimonials = [
    {
        name: 'Winson Herry',
        university: 'California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa !',
        img: people1
    },
    {
        name: 'Winson Herry',
        university: 'California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa !',
        img: people2
    },
    {
        name: 'Winson Herry',
        university: 'California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa !',
        img: people3
    }
]
const Testimonial = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 5 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'left', color: '#5CE7ED' }} gutterBottom component="div">TESTIMONIAL</Typography>
            <Typography variant="h4" sx={{ fontWeight: 500, textAlign: 'left', fontSize: '40px' }} gutterBottom component="div">What's Our Patient
                <br />
                Says</Typography>

            <Grid container spacing={3} sx={{ my: 3 }}>
                {testimonials.map(testimonial => <TestimonialList
                    key={testimonial.img}
                    testimonial={testimonial}
                ></TestimonialList>
                )}
            </Grid>
        </Container>
    );
};

export default Testimonial;