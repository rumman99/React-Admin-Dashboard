import React, { useContext } from 'react';
import LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon  from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon  from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon  from '@mui/icons-material/PersonOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useTheme } from '@emotion/react';
import { ColorModeContext, colorToken } from '../../theme';
import { Box, IconButton, InputBase } from '@mui/material';

const Topbar = () => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode);
    const colorMode= useContext(ColorModeContext);

    return (

        <Box 
            display={'flex'} 
            justifyContent={'space-between'} 
            p={2}
            >
            <Box display={'flex'} 
            backgroundColor={color.primary[400]} 
            borderRadius={'3px'}
            >
                <InputBase sx={{ml:2, flex:1}} placeholder='Search'/>
                <IconButton type='button' sx={{p:1}}>
                    <SearchOutlinedIcon/>
                </IconButton>
            </Box>

            {/* Icons */}
            <Box display={'flex'}>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode=== 'dark'? (<DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon/>)}
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon/>
            </IconButton><IconButton >
                <SettingsOutlinedIcon/>
            </IconButton><IconButton >
                <PersonOutlinedIcon/>
            </IconButton>
            </Box>
        </Box>

    );
};

export default Topbar;