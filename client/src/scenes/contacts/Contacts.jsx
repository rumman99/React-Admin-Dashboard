import React from 'react';
import { colorToken } from '../../theme';
import { Box, useTheme } from '@mui/material';
import Header from '../../components/header/Header';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';


const Contacts = () => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode);

    const columns= [
        {
            field: 'id', 
            headerName: 'ID',
            flex: 0.5
        },
        {
            field: 'registrarId', 
            headerName: 'Registrar ID',
            flex: 0.5
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
            field: 'address', 
            headerName: 'Address',
            flex: 1,
        },
        {
            field: 'city', 
            headerName: 'City',
            flex: 1,
        },
        {
            field: 'zipCode', 
            headerName: 'Zip Code',
            flex: 1,
        },
    ]

    return (
        <Box m="20px">
            <Header title="Contacts" subtitle='List of Contacts for Future References' />
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
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${color.grey[100]} !important`
                    },
                }}>
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    slots={{toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    );
};

export default Contacts;