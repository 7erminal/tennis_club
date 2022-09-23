import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/Dashboard'
import SettingsPage from './pages/Settings'
import MembersPage from './pages/Members'
import EditMembersPage from './pages/EditMembers'
import SessionsPage from './pages/Sessions'
import NotFoundPage from './pages/NotFoundPage'
import $ from 'jquery'
import { ROUTES } from './resources/routes-constants'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.sass'
import './styles/mobile.css'
import './styles/desktop.css'
import './styles/paper-dashboard.css'
import Api from './resources/api'

const RootComponent: React.FC = () => {
    const [registrationDetails, setRegistrationDetails] = useState<Array<any>>([])
    const regDetails = ():void => {
        new Api().getRegistrationDetails()
                .then(response => {
                        
                        console.log(response.Plans)
                        setRegistrationDetails(response.Plans)
                        
                        }
                    );
    }

    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<LoginPage />} />
                <Route path={ROUTES.DASHBOARDPAGE_ROUTE} element={<DashboardPage regDetails={regDetails} />} />
                <Route path={ROUTES.SETTINGSPAGE_ROUTE} element={<SettingsPage regDetails={regDetails}/>} />
                <Route path={ROUTES.MEMBERS_ROUTE} element={<MembersPage regDetails={regDetails}/>} />
                <Route path={ROUTES.SESSIONS_ROUTE} element={<SessionsPage regDetails={regDetails}/>} />
                <Route path={ROUTES.EDITMEMBERS_ROUTE} element={<EditMembersPage registrationDetails_={registrationDetails} regDetails={regDetails}/>} />
            </Routes>
        </Router>
    )
}

export default RootComponent
