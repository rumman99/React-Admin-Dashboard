import React, { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { colorToken } from '../../theme';
import Header from '../../components/header/Header';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction'


const Calendars = () => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode); 
    const [currentEvents, setCurrentEvents]= useState([]);

    const handleDateClick=(selected)=>{
        const title= prompt("Please Enter a Title for Your Events");
        const calendarApi= selected.view.calendar;
        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };

    const handleEventClick=(selected)=>{
        if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)){
            selected.event.remove();
        }
    };


    return (
        <Box m='20px'>
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page"/>
            <Box display='flex' justifyContent='space-between'>
                <Box 
                    flex='1 1
                    20%' 
                    backgroundColor={color.primary[400]} 
                    p='15px' 
                    borderRadius='4px'
                >
                    <Typography variant='h5'>Events</Typography>
                    <List>
                        {currentEvents.map(event=>(
                            <ListItem 
                                key={event.id} 
                                sx={{backgroundColor: color.greenAccent[500], 
                                margin: '10px 0',
                                borderRadius:'2px'
                            }}
                            >

                                <Typography variant='body1'>{event.title}</Typography>
                                <Typography variant='body1'>
                                    {formatDate(event.start, {
                                        year: "numeric",
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </Typography>

                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* Calendar */}
                <Box flex='1 1 100%' ml='15px'>
                    <FullCalendar
                        height='75vh'
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            left:'prev,next,today',
                            center:'title',
                            right:'dayGridMonth,timeGridWeek,timeGridDay,list'
                        }}
                        // initialView='dayGridMonth'
                        views={{
                            month: {
                                type: 'dayGridMonth',
                                buttonText: 'Month'
                            },
                            week: {
                                type: 'timeGridWeek',
                                buttonText: 'Week'
                            },
                            day: {
                                type: 'timeGridDay',
                                buttonText: 'Day'
                            }
                        }}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events)=> setCurrentEvents(events)}
                        initialEvents={[
                            {id: '1122', title: 'All Day Event', date: '2024-03-28'},
                            {id: '1123', title: 'Half Day Event', date: '2024-03-30'}
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendars;