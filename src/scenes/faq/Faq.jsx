import { useTheme } from '@emotion/react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import React from 'react';
import { colorToken } from '../../theme';
import Header from '../../components/header/Header';
import { ExpandMore } from '@mui/icons-material';

const Faq = () => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode);
    
    return (
        <Box m='20px'>
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={color.greenAccent[500]} variant='h5'>
                        An Important Question
                    </Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos itaque voluptatum laborum molestias fuga aut officiis praesentium repellat, atque adipisci quidem cumque distinctio eum repudiandae officia. Maxime, alias dolores?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={color.greenAccent[500]} variant='h5'>
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos itaque voluptatum laborum molestias fuga aut officiis praesentium repellat, atque adipisci quidem cumque distinctio eum repudiandae officia. Maxime, alias dolores?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={color.greenAccent[500]} variant='h5'>
                        Your Favorite Question
                    </Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos itaque voluptatum laborum molestias fuga aut officiis praesentium repellat, atque adipisci quidem cumque distinctio eum repudiandae officia. Maxime, alias dolores?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={color.greenAccent[500]} variant='h5'>
                        Some Random Question
                    </Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos itaque voluptatum laborum molestias fuga aut officiis praesentium repellat, atque adipisci quidem cumque distinctio eum repudiandae officia. Maxime, alias dolores?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={color.greenAccent[500]} variant='h5'>
                        Final Question
                    </Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos itaque voluptatum laborum molestias fuga aut officiis praesentium repellat, atque adipisci quidem cumque distinctio eum repudiandae officia. Maxime, alias dolores?
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
};

export default Faq;