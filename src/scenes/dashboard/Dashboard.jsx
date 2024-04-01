import Header from '../../components/header/Header';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { colorToken } from '../../theme';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import StatBox from '../../components/statBox/StatBox';
import LineChart from '../../components/lineChart/LineChart';
import { mockTransactions } from '../../data/mockData';
import ProgressCircle from '../../components/progressCircle/ProgressCircle';
import BarChart from '../../components/barChart/BarChart';
import GeographyChart from '../../components/geographyChart/GeographyChart';

const Dashboard = () => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode);

    return (
        <Box m='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center' >
            <Header title="Dashboard" subtitle="Welcome to your Dashboard"/>

            <Box>
                <Button 
                    sx={{backgroundColor:color.blueAccent[700], color:color.grey[100], 
                    fontSize: '14px', 
                    fontWeight:'bold', 
                    padding:'10px 20px'
                    }}>
                        <DownloadOutlinedIcon sx={{mr: '10px'}}/>
                        Download Reports
                </Button>
            </Box>
            </Box>

            {/* Grid & Charts */}
            <Box 
                display='grid' 
                gridTemplateColumns='repeat(12, 1fr)'
                gridAutoRows='140px'
                gap='20px'
                >
                    {/* Row 1 */}
                    <Box 
                        gridColumn='span 3' 
                        backgroundColor={color.primary[400]}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        >
                            <StatBox
                                title='12,361'
                                subtitle='Email Sent'
                                progress='0.75'
                                increase='+14%'
                                icon={
                                    <EmailOutlinedIcon
                                        sx={{color:color.greenAccent[600],
                                        fontSize:'26px'}}
                                    />
                                }
                            />
                    </Box>
                    <Box 
                        gridColumn='span 3' 
                        backgroundColor={color.primary[400]}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        >
                            <StatBox
                                title='432,225'
                                subtitle='Sales Obtained'
                                progress='0.5'
                                increase='+21%'
                                icon={
                                    <PointOfSaleOutlinedIcon
                                        sx={{color:color.greenAccent[600],
                                        fontSize:'26px'}}
                                    />
                                }
                            />
                    </Box>
                    <Box 
                        gridColumn='span 3' 
                        backgroundColor={color.primary[400]}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        >
                            <StatBox
                                title='32,441'
                                subtitle='New Clients'
                                progress='0.30'
                                increase='+5%'
                                icon={
                                    <PersonAddOutlinedIcon
                                        sx={{color:color.greenAccent[600],
                                        fontSize:'26px'}}
                                    />
                                }
                            />
                    </Box>
                    <Box 
                        gridColumn='span 3' 
                        backgroundColor={color.primary[400]}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        >
                            <StatBox
                                title='1,325,134'
                                subtitle='Traffic Inbound'
                                progress='0.80'
                                increase='+43%'
                                icon={
                                    <TrafficOutlinedIcon
                                        sx={{color:color.greenAccent[600],
                                        fontSize:'26px'}}
                                    />
                                }
                            />
                    </Box>

                    {/* Row 2 */}
                    <Box 
                        gridColumn='span 8'
                        gridRow='span 2'
                        backgroundColor={color.primary[400]}
                        >
                            <Box 
                                mt='25px'
                                p='0 30px'
                                display= 'flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Box>
                                    <Typography 
                                        variant='h5' 
                                        fontWeight='600'
                                        color={color.grey[100]}
                                        >
                                            Revenue Generated
                                    </Typography>
                                    <Typography 
                                        variant='h3' 
                                        fontWeight='bold'
                                        color={color.greenAccent[500]}
                                        >
                                            $59,342,32
                                    </Typography>
                                </Box>
                                
                                <Box>
                                    <IconButton>
                                        <DownloadOutlinedIcon
                                            sx={{fontSize:'26px', color:color.greenAccent[500]}}
                                        />
                                    </IconButton>
                                </Box>
                            </Box>

                            <Box height='250px' mt='-20px'>
                                <LineChart isDashboard={true}/>
                            </Box>
                    </Box>

                    {/* Transactions */}
                    <Box 
                        gridColumn='span 4'
                        gridRow='span 2'
                        backgroundColor={color.primary[400]}
                        overflow='auto'
                        >
                        <Box 
                            display='flex' justifyContent='space-between'
                            alignItems='center'
                            borderBottom={`4px solid ${color.primary[500]}`} 
                            color={color.grey[100]} 
                            p='15px'
                        >
                            <Typography 
                                color={color.grey[100]}
                                variant='h5'
                                fontWeight='600'
                            >
                                Recent Transactions
                            </Typography>
                        </Box>
                        {mockTransactions.map((transaction, i)=>(
                            <Box 
                                key={i}
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                borderBottom={`4px solid ${color.primary[500]}`}
                                p='15px'
                                >
                                    <Box>
                                    <Typography 
                                        color={color.greenAccent[500]}
                                        variant='h5'
                                        fontWeight='600'
                                    >
                                        {transaction.txId}
                                    </Typography>
                                    <Typography 
                                        color={color.grey[100]}
                                    >
                                        {transaction.user}
                                    </Typography>
                                    </Box>
                                    <Box color={color.grey[100]}>
                                        {transaction.date}
                                    </Box>
                                    <Box 
                                        backgroundColor={color.greenAccent[500]} 
                                        p='5px 10px'
                                        borderRadius='4px'
                                        >
                                            {transaction.cost}
                                    </Box>
                            </Box>
                        ))}
                    </Box>

                    {/* Row 3 */}
                    <Box
                        gridColumn='span 4'
                        gridRow='span 2'
                        backgroundColor={color.primary[400]}
                        p='30px'
                    >
                        <Typography variant='h5' fontWeight='600'>
                            Campaign
                        </Typography>
                        <Box 
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            mt='25px'
                            >
                                <ProgressCircle size='125'/>
                                <Typography 
                                    variant='h5'
                                    color={color.greenAccent[500]}
                                    sx={{mt:'15px'}}
                                    >
                                        $48,352 Revenue Generated
                                    </Typography>
                                    <Typography>
                                    Includes extra mise expenditures and costs
                                    </Typography>
                        </Box>
                    </Box>

                    <Box
                        gridColumn='span 4'
                        gridRow='span 2'
                        backgroundColor={color.primary[400]}
                    >
                        <Typography variant='h5' fontWeight='600' sx={{p:'30px 30px 0 30px'}}>
                            Sales Quantity
                        </Typography>
                        <Box 
                            height='200px'
                            mt='20px'
                            >
                                <BarChart isDashboard={true}/>
                        </Box>
                    </Box>

                    <Box
                        gridColumn='span 4'
                        gridRow='span 2'
                        backgroundColor={color.primary[400]}
                        p='30px'
                    >
                        <Typography variant='h5' fontWeight='600' sx={{mb:'15px'}}>
                            Geography Based Traffic
                        </Typography>
                        <Box 
                            height='200px'
                            mt='20px'
                            >
                                <GeographyChart isDashboard={true}/>
                        </Box>
                    </Box>
                    {/*  */}
            </Box>
        </Box>
    );
};

export default Dashboard;