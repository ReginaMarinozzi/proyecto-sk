import { Typography, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ array }) => {
    return (

        <Stack
            maxWidth='100%'
            mb={2}
            component={Link}
            to={array.link}
        >
            <Stack
                justifyContent='center'
                alignItems='center'
                height='5em'
                sx={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                }}
            >
                <Typography
                    variant="h6"
                    component="p"
                    textAlign='center'
                    color="#FFFFFF"
                    fontWeight={700}
                    textTransform='uppercase'
                >
                    {array.name}
                </Typography>
            </Stack>
        </Stack>

    )
}

export default Item