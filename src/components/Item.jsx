import { CardContent, Typography, Stack } from '@mui/material'
import React from 'react'

const Item = ({ array }) => {
    return (
        <Stack
        >
            <CardContent
                sx={{
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    borderRadius: '10px'
                }}
            >
                <Typography
                    variant="h6"
                    component="p"
                    textAlign='center'
                    color="#FFFFFF"
                    fontWeight={700}
                    mb={2}
                >
                    {array.name}
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    color="#FFFFFF"
                    fontWeight={400}
                    textAlign='center'
                    px={8}
                >
                    {array.description}
                </Typography>
            </CardContent>
        </Stack>
    )
}

export default Item