import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const Item = ({servicios}) => {
    return (
            <Card sx={{ bgcolor: '#00796B', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CardContent
                >
                    <Typography
                    variant="body1"
                    component="p"
                    color="#FFFFFF"
                    fontWeight={600}
                   
                    >
                        {servicios.name}
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default Item