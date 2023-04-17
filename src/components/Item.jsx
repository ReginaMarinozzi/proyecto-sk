import { CardContent, Typography, Stack } from '@mui/material'
import React from 'react'

const Item = ({ servicios }) => {
    return (
        <Stack
        >
            <CardContent
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
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
            </CardContent>
        </Stack>
    )
}

export default Item