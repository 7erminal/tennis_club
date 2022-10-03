import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/Dashboard'
import SettingsPage from './pages/Settings'
import MembersPage from './pages/Members'
import EditMembersPage from './pages/EditMembers'
import ConfigurationsPage from './pages/Configurations'
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
    const [getRegDetails, setGetRegDetails] = useState(true)
    const [getMembers, setGetMembers] = useState(false)
    const [members, setMembers] = useState<Array<any>>([])
    const [configs, setConfigs] = useState<Array<any>>([])
    const [getConfigs, setGetConfigs] = useState(true)
    const [getGames, setGetGames] = useState(true)
    const [stats, setStats] = useState<Array<any>>([])
    const [games, setGames] = useState<Array<any>>([])
    const [scheduledCoaching, setScheduledCoaching] = useState<Array<any>>([])
    const [scheduledTraining, setScheduledTraining] = useState<Array<any>>([])
    const [getScheduledCoach, setGetScheduledCoach] = useState(true)
    const [getScheduledTraining, setGetScheduledTraining] = useState(true)
    const [getSessionDetails, setGetSessionDetails] = useState(true)
    
    useEffect(()=>{
        new Api().getRegistrationDetails()
                .then(response => {
                        
                        console.log(response)
                        setRegistrationDetails(response)
                        
                        }
                    );
    },[getRegDetails])

    useEffect(()=>{
        console.log("going to get stats")
        new Api().getGames()
                .then(response => {
                        console.log("gamer returned...")
                        console.log(response)
                        setGames(response)
                        
                        }
                    );
    },[getGames])

    useEffect(()=>{
        console.log("going to get stats")
        new Api().getScheduledCoaching()
                .then(response => {
                        console.log("coaching returned...")
                        console.log(response)
                        setScheduledCoaching(response)
                        
                        }
                    );
    },[getScheduledCoach])

    useEffect(()=>{
        console.log("going to get scheduled training")
        new Api().getScheduledTraining()
                .then(response => {
                        console.log("gamer returned...")
                        console.log(response)
                        setScheduledTraining(response)
                        
                        }
                    );
    },[getScheduledTraining])

    useEffect(()=>{
        new Api().getConfigs()
                .then(response => {
                        
                        console.log(response)
                        setConfigs(response)
                        
                        }
                    );
    },[getConfigs])

    useEffect(()=>{
        new Api().getMembers()
                .then(response => {
                        console.log("members returned are")
                        console.log(response)
                        setMembers(response)
                        
                        }
                    );
    },[getMembers])

    const regDetails = ():void => {
        setGetRegDetails(!getRegDetails)
    }

    const getMembers_ = ():void => {
        setGetMembers(!getMembers)
    }

    const getConfigDetails_ = ():void => {
        setGetConfigs(!getConfigs)
    }

    const getSessionDetails_ = ():void => {
        setGetGames(!getGames)
    }

    const changeSomething = (changeParam: string):void => {
        if(changeParam=="members"){
            setGetMembers(!getMembers)
        } else if (changeParam=="sessions"){
            setGetMembers(!getMembers)
            setGetConfigs(!getConfigs)
            setGetGames(!getGames)
            setGetScheduledCoach(!getScheduledCoach)
            setGetScheduledTraining(!getScheduledTraining)
        } else if (changeParam=="configs"){
            setGetMembers(!getMembers)
            setGetConfigs(!getConfigs)
        }
    }

    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<LoginPage />} />
                <Route path={ROUTES.DASHBOARDPAGE_ROUTE} element={<DashboardPage changeSomething={changeSomething} regDetails={regDetails} games={games} members={members} configs_={configs} />} />
                <Route path={ROUTES.SETTINGSPAGE_ROUTE} element={<SettingsPage changeSomething={changeSomething} regDetails={regDetails}/>} />
                <Route path={ROUTES.MEMBERS_ROUTE} element={<MembersPage changeSomething={changeSomething} regDetails={regDetails} members={members}/>} />
                <Route path={ROUTES.SESSIONS_ROUTE} element={<SessionsPage changeSomething={changeSomething} regDetails={regDetails} configs_={configs} members={members} games={games} scheduledCoaching={scheduledCoaching} scheduledTraining={scheduledTraining}/>} />
                <Route path={ROUTES.EDITMEMBERS_ROUTE} element={<EditMembersPage members={members} changeSomething={changeSomething} registrationDetails_={registrationDetails} regDetails={regDetails}/>} />
                <Route path={ROUTES.CONFIGS_ROUTE} element={<ConfigurationsPage getConfigDetails_={getConfigDetails_} changeSomething={changeSomething} regDetails={regDetails} configs_={configs}/>} />
            </Routes>
        </Router>
    )
}

export default RootComponent
