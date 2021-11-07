import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'
const ExceptionalDental = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "350px" }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: "start",
                        alignItems: 'center',
                        textAlign: 'left'
                    }}
                >
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 500 }} gutterBottom component="div">
                            Exceptional Dental
                            <br />
                            Care, On your terms
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 5, py: 2 }} gutterBottom component="div">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium labore tempora laborum nisi eaque atque debitis non eum voluptatem itaque necessitatibus doloribus voluptates quis adipisci similique ducimus nobis saepe, corporis maiores tempore laboriosam quibusdam laudantium. Nisi id nulla eos similique corrupti nam temporibus voluptatem nostrum quod, a optio pariatur exercitationem ducimus saepe reiciendis cum vel ad praesentium doloremque at corporis eligendi architecto alias ex. Soluta quisquam odio id quam. Fugit?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>

                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default ExceptionalDental;