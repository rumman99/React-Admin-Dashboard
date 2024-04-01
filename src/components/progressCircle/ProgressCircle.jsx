import { useTheme } from '@emotion/react';
import React from 'react';
import { colorToken } from '../../theme';
import { Box } from '@mui/material';

const ProgressCircle = ({progress= '0.74', size= '40'}) => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode);
    const angle= progress* 360;

    return (
        <Box 
            sx={{
                background: `radial-gradient(${color.primary[400]} 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, ${color.blueAccent[500]} ${angle}deg 360deg), ${color.greenAccent[500]}`,
                borderRadius: '50%',
                width: `${size}px`,
                height: `${size}px`
            }}/>
    );
};

export default ProgressCircle;