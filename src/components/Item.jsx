import { CardContent, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react'

const Item = ({ servicios }) => {
    return (

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
            <KeyboardArrowDownIcon sx={{ color: "#FFFFFF" }} />
        </CardContent>

    )
}

export default Item