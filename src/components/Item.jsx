import { Box, Typography, Stack } from '@mui/material'
import React from 'react'

const Item = ({ array }) => {
    return (
        <Stack
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
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
                    mx={1}
                >
                    {array.description}
                </Typography>
            </Box>
        </Stack>
    )
}

export default Item