import { Box, Typography, Stack } from '@mui/material'
import React from 'react'

const Item = ({ array }) => {
    return (
        <Stack
        
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(0,0,0,0.8)'
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
            </Box>
        </Stack>
    )
}

export default Item