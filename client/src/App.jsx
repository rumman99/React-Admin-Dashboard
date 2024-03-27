import { ThemeProvider } from '@emotion/react';
import './App.css'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard/Dashboard';
import SideBar from './scenes/global/SideBar';
import Team from './scenes/team/Team';
import Contacts from './scenes/contacts/Contacts';
import Invoices from './scenes/invoices/Invoices';
import Form from './scenes/form/Form';
import Calendars from './scenes/calendar/Calendars';


function App() {
  const [theme, colorMode]= useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <SideBar/>
          <main className='content'>
            <Topbar/>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/invoices' element={<Invoices/>}/>
              <Route path='/form' element={<Form/>}/>
              <Route path='/bar' element=''/>
              <Route path='/pie' element=''/>
              <Route path='/line' element=''/>
              <Route path='/faq' element=''/>
              <Route path='/geography' element=''/>
              <Route path='/calendar' element={<Calendars/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
