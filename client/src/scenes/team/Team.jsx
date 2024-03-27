import React from 'react';
import { colorToken } from '../../theme';
import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import Header from '../../components/header/Header';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';

const Team = () => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode);

    const columns= [
        {
            field: 'id', 
            headerName: 'ID'
        },
        {
            field: 'name', 
            headerName: 'Name', 
            flex:1, 
            cellClassName: 'name-column--cell'
        },
        {
            field: 'age', 
            headerName: 'Age',
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: 'phone', 
            headerName: 'Phone Number',
            flex: 1,
        },
        {
            field: 'email', 
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'access', 
            headerName: 'Access Level',
            flex: 1,
            renderCell:({row: {access}})=>{
                return (
                    <Box width='60%' m='0 auto' p='5px' display='flex' justifyContent={'center'} backgroundColor={
                        access === 'admin' ? color.greenAccent[600] : color.greenAccent[700]
                    }
                    borderRadius='4px'
                    >
                        {access === 'admin' && <AdminPanelSettingsOutlined/>}
                        {access === 'manager' && <SecurityOutlined/>}
                        {access === 'user' && <LockOpenOutlined/>}
                        <Typography color={color.grey[100]} sx={{ml:'5px'}}>
                            {access}
                        </Typography>
                    </Box>
                )
            }
        },
    ]

    return (
        <Box m="20px">
            <Header title="Team" subtitle='Managing the Team Member' />
            <Box 
                m="40px 0 0 0" 
                height='75vh' 
                sx={{"& .MuiDataGrid-root": {
                    border: 'none'
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom:'none'
                    },
                    "& .name-column--cell": {
                        color:color.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor:color.blueAccent[700],
                        borderBottom:'none'
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor:color.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor:color.blueAccent[700]
                    }
                }}>
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Team;