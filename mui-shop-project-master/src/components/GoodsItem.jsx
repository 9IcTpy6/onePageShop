import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {Typography} from "@mui/material";
import Button from '@mui/material/Button';



const GoodsItem = (props) => {
    const { name, price, setOrder, poster } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card
            sx={{height: '100%'}}
            >
                <CardMedia
                    image={poster}
                    component='img'
                    alt={name}
                    title={name}
                    sx={{height: 140}}
                />
                <CardContent>
                    <Typography variant="h6" component='h3'>{name}</Typography>
                    <Typography variant='body1'>Цена: {price} грн.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant='text'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;