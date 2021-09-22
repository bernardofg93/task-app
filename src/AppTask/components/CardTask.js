import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';

export const CardTask = (
    { 
        valuesDbStorage, 
        setValuesDbStorage, 
        reloadDB, 
        openModal,  
        isEditing,
        editData
    }) => {


    if (!valuesDbStorage || valuesDbStorage.length === 0) {
        return (
            <div>
                <h2>No hay elementos</h2>
            </div>
        )
    }

    const deleteTask = (index) => {
        valuesDbStorage.splice(index, 1);
        setValuesDbStorage(valuesDbStorage);
        localStorage.setItem('db', JSON.stringify(valuesDbStorage));
        reloadDB(true);
    }

    const handleDataEdit = (id) => {
        openModal(true)
        isEditing(true)
        const res = valuesDbStorage.find(item => item.id === id);
        editData(res)
    }

    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    {valuesDbStorage.map((data, index) => (

                        <Card sx={{ maxWidth: 345 }} key={index}>

                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data.task}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => handleDataEdit(data.id)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    size="small"
                                    color="secondary"
                                    onClick={() => deleteTask(data.index)}
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    ))

                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
