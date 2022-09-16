import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/Dashboard'
import NotFoundPage from './pages/NotFoundPage'
import $ from 'jquery'
import { ROUTES } from './resources/routes-constants'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.sass'
import './styles/mobile.css'
import './styles/desktop.css'
import './styles/paper-dashboard.css'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<LoginPage />} />
                <Route path={ROUTES.DASHBOARDPAGE_ROUTE} element={<DashboardPage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
