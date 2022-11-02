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
import ViewMemberPage from './pages/ViewMember'
import EditMemberPage from './pages/EditMember'
import ViewUserPage from './pages/ViewUser'
import AllMembersPage from './pages/AllMembers'
import $ from 'jquery'
import { ROUTES } from './resources/routes-constants'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.sass'
import './styles/mobile.css'
import './styles/desktop.css'
import './styles/paper-dashboard.css'
import Api from './resources/api'
import GameDetails from './pages/GameDetails'
import CoachingDetails from './pages/CoachingDetails'
import TrainingDetails from './pages/TrainingDetails'
import PaymentsPage from './pages/Payments'
import AddPaymentsPage from './pages/AddPayment'

const RootComponent: React.FC = () => {
    const [registrationDetails, setRegistrationDetails] = useState<Array<any>>([])
    const [getRegDetails, setGetRegDetails] = useState(true)
    const [getMembers, setGetMembers] = useState(false)
    const [users, setUsers] = useState<Array<any>>([])
    const [getUsers, setGetUsers] = useState(false)
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
    const [selectedMember, setSelectedMember] = useState('')
    const [selectedUserDetails, setSelectedUserDetails] = useState<Array<any>>([])    
    const [selectedMemberDetails, setSelectedMemberDetails] = useState<Array<any>>([])
    const [selectedGameDetails, setSelectedGameDetails] = useState<Array<any>>([])
    const [selectedCoachingDetails, setSelectedCoachingDetails] = useState<Array<any>>([])
    const [selectedTrainingDetails, setSelectedTrainingDetails] = useState<Array<any>>([])
    
    const [activeNav, setActiveNav] = useState("dashboard")
    
    const [essentials, setEssentials] = useState<any>()

    useEffect(()=>{
        setActiveNav("dashboard")

        console.log("nav change")

        const essential_ = {
            e_members: members,
            e_configs: configs,
            e_games: games,
            e_scheduledCoaching: scheduledCoaching,
            e_scheduledTraining: scheduledTraining,
            e_activeNav: activeNav
        }

        setEssentials(essential_)
    },[])

    useEffect(()=>{
        const essential_ = {
            e_members: members,
            e_configs: configs,
            e_games: games,
            e_scheduledCoaching: scheduledCoaching,
            e_scheduledTraining: scheduledTraining,
            e_activeNav: activeNav
        }

        setEssentials(essential_)
    },[activeNav])

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

    useEffect(()=>{
        new Api().getUsers()
                .then(response => {
                        console.log("members returned are")
                        console.log(response)
                        setUsers(response)
                        
                        }
                    );
    },[getUsers])

    const getMember_ = (memberid: string):void => {
        const params = {id: memberid}

        new Api().getMember(params)
                .then(response => {
                        console.log("member returned is")
                        console.log(response)
                        setSelectedMemberDetails(response[0])
                        
                        }
                    );
    }

    const getUser_ = (userid: string):void => {
        const params = {id: userid}

        new Api().getUser(params)
                .then(response => {
                        console.log("member returned is")
                        console.log(response)
                        setSelectedUserDetails(response[0])
                        
                        }
                    );
    }

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

    const viewDetails_ = (module: string, moduleid: string):void => {
        if(module=='game'){
            const params = {id: moduleid}
            new Api().getGame(params)
                    .then(response => {
                            console.log("details returned...")
                            console.log(response)
                            setSelectedGameDetails(response[0])
                            
                            }
                        );
        }

        if(module=='coaching'){
            const params = {id: moduleid}
            new Api().getCoachingDetails(params)
                    .then(response => {
                            console.log("details returned...")
                            console.log(response)
                            setSelectedCoachingDetails(response[0])
                            
                            }
                        );
        }

        if(module=='training'){
            const params = {id: moduleid}
            new Api().getTrainingDetails(params)
                    .then(response => {
                            console.log("details returned...")
                            console.log(response)
                            setSelectedTrainingDetails(response[0])
                            
                            }
                        );
        }
    }

    const changeSomething = (changeParam: string):void => {
        if(changeParam=="dashboard"){
            setGetMembers(!getMembers)
            setGetConfigs(!getConfigs)
        } else if(changeParam=="members"){
            setGetMembers(!getMembers)
            setGetConfigs(!getConfigs)
        } else if (changeParam=="sessions"){
            setGetMembers(!getMembers)
            setGetConfigs(!getConfigs)
            setGetGames(!getGames)
            setGetScheduledCoach(!getScheduledCoach)
            setGetScheduledTraining(!getScheduledTraining)
        } else if (changeParam=="configs"){
            setGetMembers(!getMembers)
            setGetConfigs(!getConfigs)
        } else if(changeParam=="users"){
            setGetUsers(!getUsers)
            setGetConfigs(!getConfigs)
        } else if(changeParam=="sales"){
            setGetUsers(!getUsers)
            setGetConfigs(!getConfigs)
        }

        setActiveNav(changeParam)
    }

    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<LoginPage />} />
                <Route path={ROUTES.DASHBOARDPAGE_ROUTE} element={<DashboardPage essentials={essentials} getMember={getMember_} viewDetails={viewDetails_} changeSomething={changeSomething} regDetails={regDetails} games={games} members={members} configs_={configs} scheduledCoaching={scheduledCoaching} scheduledTraining={scheduledTraining} />} />
                <Route path={ROUTES.SETTINGSPAGE_ROUTE} element={<SettingsPage essentials={essentials} getUser={getUser_} getMember={getMember_} users={users} changeSomething={changeSomething} regDetails={regDetails} configs_={configs} />} />
                <Route path={ROUTES.MEMBERS_ROUTE} element={<MembersPage selectedMemberDetails={selectedMemberDetails} essentials={essentials} getUser={getUser_} getMember={getMember_} changeSomething={changeSomething} regDetails={regDetails} members={members} registrationDetails_={registrationDetails} configs_={configs} />} />
                <Route path={ROUTES.ALL_MEMBERS_ROUTE} element={<AllMembersPage selectedMemberDetails={selectedMemberDetails} essentials={essentials} getUser={getUser_} getMember={getMember_} changeSomething={changeSomething} regDetails={regDetails} members={members} registrationDetails_={registrationDetails} configs_={configs} />} />
                <Route path={ROUTES.SESSIONS_ROUTE} element={<SessionsPage essentials={essentials} getMember={getMember_} viewDetails={viewDetails_} changeSomething={changeSomething} regDetails={regDetails} configs_={configs} members={members} games={games} scheduledCoaching={scheduledCoaching} scheduledTraining={scheduledTraining}/>} />
                <Route path={ROUTES.EDITMEMBERS_ROUTE} element={<EditMembersPage essentials={essentials} getUser={getUser_} getMember={getMember_} selectedMemberDetails={selectedMemberDetails} members={members} changeSomething={changeSomething} registrationDetails_={registrationDetails} regDetails={regDetails} configs_={configs}/>} />
                <Route path={ROUTES.CONFIGS_ROUTE} element={<ConfigurationsPage essentials={essentials} getMember={getMember_} getConfigDetails_={getConfigDetails_} changeSomething={changeSomething} regDetails={regDetails} configs_={configs}/>} />
                <Route path={ROUTES.VIEW_MEMBER} element={<ViewMemberPage essentials={essentials} getMember={getMember_} selectedMemberDetails={selectedMemberDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs} registrationDetails_={registrationDetails} />} />
                <Route path={ROUTES.EDIT_MEMBER} element={<EditMemberPage essentials={essentials} getMember={getMember_} selectedMemberDetails={selectedMemberDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs} registrationDetails_={registrationDetails}/>} />
                <Route path={ROUTES.VIEW_USER} element={<ViewUserPage essentials={essentials} getMember={getMember_} getUser={getUser_} selectedUserDetails={selectedUserDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs}/>} />
                <Route path={ROUTES.VIEW_GAME_DETAILS} element={<GameDetails essentials={essentials} getMember={getMember_} viewDetails={viewDetails_} selectedGameDetails={selectedGameDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs}/>} />
                <Route path={ROUTES.VIEW_COACHING_DETAILS} element={<CoachingDetails essentials={essentials} getMember={getMember_} viewDetails={viewDetails_} selectedCoachingDetails={selectedCoachingDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs}/>} />
                <Route path={ROUTES.VIEW_TRAINING_DETAILS} element={<TrainingDetails essentials={essentials} getMember={getMember_} viewDetails={viewDetails_} selectedTrainingDetails={selectedTrainingDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs}/>} />
                <Route path={ROUTES.PAYMENTS} element={<PaymentsPage essentials={essentials} getMember={getMember_} viewDetails={viewDetails_} changeSomething={changeSomething} regDetails={regDetails} configs_={configs}/>} />
                <Route path={ROUTES.ADD_PAYMENT} element={<AddPaymentsPage essentials={essentials} getMember={getMember_} viewDetails={viewDetails_} changeSomething={changeSomething} regDetails={regDetails} configs_={configs} members={members}/>} />
            </Routes>
        </Router>
    )
}

export default RootComponent
