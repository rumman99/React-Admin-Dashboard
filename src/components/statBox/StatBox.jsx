import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { colorToken } from '../../theme';
import ProgressCircle from '../progressCircle/ProgressCircle';

const StatBox = ({title, subtitle, icon, progress, increase}) => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode);

    return (
        <Box width='100%' m='0 30px'>
            <Box display='flex' justifyContent='space-between'>
                <Box>
                    {icon}
                    <Typography 
                        variant='h4' 
                        fontWeight='bold' 
                        sx={{color:color.grey[100]}}
                    >
                        {title}
                    </Typography>
                </Box>

                <Box>
                    <ProgressCircle progress={progress}/>
                </Box>
            </Box>

            <Box display='flex' justifyContent='space-between'>
                <Typography variant='h5' sx={{color:color.greenAccent[500]}}
                >
                    {subtitle}
                </Typography>
                <Typography 
                    variant='h5' 
                    fontStyle='italic' 
                    sx={{color:color.grey[600]}}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatBox;