import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const TestimonialList = ({ testimonial }) => {
    const { name, university, description, img } = testimonial;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 2, p: 1 }}>
                <CardContent>
                    <Typography variant="body2" sx={{ fontSize: 17 }} gutterBottom>
                        {description}
                    </Typography>
                    <Box sx=
                        {{
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'left',
                            pt: 5,
                            pl: 1
                        }}>
                        <img style={{ width: '70px' }} src={img} alt="" />
                        <Box sx={{
                            pl: 2
                        }}
                        >
                            <Typography variant="h6" sx={{ color: '#5CE7ED' }} gutterBottom component="div">
                                {name}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                {university}
                            </Typography>
                        </Box>
                    </Box>

                </CardContent>

            </Card>
        </Grid>
    );
};

export default TestimonialList;