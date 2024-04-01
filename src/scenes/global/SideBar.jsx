import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon  from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon  from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon  from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon  from '@mui/icons-material/MapOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, IconButton, Typography } from '@mui/material';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { colorToken } from '../../theme';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import './sidebar.css'


const Item= ({title, to, icon, selected, setSelected})=>{
    const theme= useTheme();
    const color= colorToken(theme.palette.mode); 
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
        <MenuItem
            active={selected === title}
            style={{ color: color.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
        </MenuItem>
        </Link>
    );
}

const SideBar = () => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode);
    const [isCollapsed, setIsCollapsed]= useState(false);
    const [selected, setSelected]= useState("Dashboard");


    return (
        <Box>

            <Sidebar collapsed={isCollapsed}
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                backgroundColor: color.primary[400],
                height:'100vh',
                },
            }} >
                <Menu iconShape="square">
                {/* LOGO AND MENU ICON */}
                <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                    margin: "10px 0 20px 0",
                    color: color.grey[100],
                }}
                >
            {!isCollapsed && (
                <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                >
                <Typography variant="h3" color={color.grey[100]}>
                    DASHBOARD
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                </IconButton>
                </Box>
            )}
                </MenuItem>

            {/* USER */}
            {!isCollapsed && (
                <Box mb="25px">
                    <Box 
                        display={'flex'} 
                        justifyContent={'center'} 
                        alignItems={'center'}
                    >
                        <img 
                            width={'100px'} 
                            height={'100px'} 
                            style={{cursor:'pointer', borderRadius:'50%'}} 
                            src='../../assets/user.png' alt="profile-user" 
                        />
                    </Box>

                    <Box textAlign={'center'}>
                        <Typography 
                            variant='h2' 
                            color={color.grey[100]} 
                            fontWeight={'bold'} 
                            sx={{m: '10px 0 0 0'}}
                        >
                            Tasnim Alam Rumman
                        </Typography>
                        <Typography variant='h5' color={color.greenAccent[500]}>Admin</Typography>
                    </Box>
                </Box>
            )}

            {/* Menu Items */}
            <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                <Item
                    title='Dashboard'
                    to='/'
                    icon={<HomeOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                <Typography
                    variant='h6'
                    color={color.grey[300]}
                    sx={{m:'15px 0 5px 20px'}}
                >
                    Data_
                </Typography>

                <Item 
                    title='Manage Team'
                    to="/team"
                    icon={<PeopleOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                <Item 
                    title='Contacts Information'
                    to='/contacts'
                    icon={<ContactsOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                <Item 
                    title='Invoices Balances'
                    to='/invoices'
                    icon={<ReceiptOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                <Typography
                    variant='h6'
                    color={color.grey[300]}
                    sx={{m:'15px 0 5px 20px'}}
                >
                    Pages_
                </Typography>

                <Item 
                    title='Profile Form'
                    to='/form'
                    icon={<PersonOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                <Item 
                    title='Calendar'
                    to='/calendar'
                    icon={<CalendarMonthOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                <Item 
                    title='FAQ Page'
                    to='/faq'
                    icon={<HelpOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                <Typography
                    variant='h6'
                    color={color.grey[300]}
                    sx={{m:'15px 0 5px 20px'}}
                >
                    Charts_
                </Typography>

                <Item 
                    title='Bar Chart'
                    to='/bar'
                    icon={<BarChartOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                <Item 
                    title='Pie Chart'
                    to='/pie'
                    icon={<PieChartOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                <Item 
                    title='Line Chart'
                    to='/line'
                    icon={<TimelineOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                <Item 
                    title='Geography Chart'
                    to='/geography'
                    icon={<MapOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
            </Box>
            </Menu>
            </Sidebar>
        </Box>
    );
};

export default SideBar;