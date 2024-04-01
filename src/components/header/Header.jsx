import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { colorToken } from '../../theme';

const Header = ({title, subtitle}) => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode);

    return (
        <Box mb='30px'>
            <Typography 
                variant='h2'
                color={color.grey[100]}
                fontWeight={'bold'}
                sx={{mb:'5px'}}
                >
                    {title}
            </Typography>
            
            <Typography
                variant='h5'
                color={color.greenAccent[400]}
            >
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;