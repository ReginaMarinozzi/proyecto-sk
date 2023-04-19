import { CardContent, Typography, Stack } from '@mui/material'
import React from 'react'

const Item = ({ servicios }) => {
    return (
        <Stack
        >
            <CardContent
                sx={{ backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            >
                <Typography
                    variant="h6"
                    component="p"
                    textAlign='center'
                    color="#FFFFFF"
                    fontWeight={700}
                    mb={1}
                >
                    {servicios.name}
                </Typography>   
                <Typography
                    variant="body2"
                    component="p"
                    textAlign='center'
                    color="#FFFFFF"
                    fontWeight={400}
                >
                    {servicios.description}
                </Typography> 
            </CardContent>
        </Stack>
    )
}

export default Item