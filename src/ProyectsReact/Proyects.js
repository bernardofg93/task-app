import React from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export const Proyects = () => {
    return (
        <Container maxWidth="lg" className="container-proyects">
            <Grid sx={{ flexGrow: 1 }} container>
                <Grid item >
                    <Grid container justifyContent="center" spacing={2}>


                        <Grid item>
                            <Card sx={{ maxWidth: 345 }}>
                                <Link to='/appTask'>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://res.cloudinary.com/practicaldev/image/fetch/s--XacY9CS2--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/xwq11jb90lnblnqqu2fd.png"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                AppTask
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                It was done CRUD     with local storage
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>


                        <Grid item>
                            <Card sx={{ Width: 345 }}>
                                <Link to='/AppTaskRedux'>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/136324251/original/59e87f1327c9a2ef6a2e68a9828611aa3d778cb3/develop-react-app-for-you.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                I will make CRUD width REDUX
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
