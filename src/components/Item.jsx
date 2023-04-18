import { CardContent, Typography, Card, CardMedia } from '@mui/material'
import React from 'react'

const Item = ({ servicios }) => {
    return (
        <Card

        >
            <CardContent
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            >
                <Typography
                    variant="body1"
                    component="p"
                    textAlign='center'
                    color="#FFFFFF"
                    fontWeight={600}
                >
                    {servicios.name}
                </Typography>
                <CardMedia
                    component="img"
                    image={servicios.img}
                    alt='cascos'
                />
            </CardContent>
        </Card>
    )
}

export default Item