import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header/Header';
import GeographyChart from '../../components/geographyChart/GeographyChart';
import { useTheme } from '@emotion/react';
import { colorToken } from '../../theme';

const Geography = () => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode);

    return (
        <Box m='20px'>
            <Header title="Geography Chart" subtitle='Simple Geography Chart'/>
            <Box height='75vh' border={`1px solid ${color.grey[100]}`} borderRadius='4px'>
                <GeographyChart/>
            </Box>
        </Box>
    );
};

export default Geography;