import { Stack, Divider } from '@mui/material';
import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';

const Brands = () => {
  return (
    <Stack
      m={3}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <AdbIcon />
      <AdbIcon />
      <AdbIcon />
    </Stack>
  )
}

export default Brands