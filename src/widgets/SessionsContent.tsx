import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Navbar_ from './NavBar';
import SessionGames from './SessionGames'
import { BsPlusCircle } from "react-icons/bs";
import SessionCoaching from './SessionCoaching'
import SessionsProtraining from './SessionProtraining';

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    members: any
    games: any
    scheduledCoaching: any
    scheduledTraining: any
  }

const SessionsContent: React.FC<Props> = ({changeSomething, games, scheduledCoaching, scheduledTraining, regDetails, configs_, members}) => {
    const [viewType, setViewType] = useState('update')

    return (
        <div className="contentCustom-session">
            <div className='session-content-ab'>
                <SessionGames viewType_={viewType} changeSomething={changeSomething} games={games} members={members} regDetails={regDetails} configs_={configs_} />
                <div className="space-1"></div>
                <SessionCoaching changeSomething={changeSomething} scheduledCoaching={scheduledCoaching} members={members} regDetails={regDetails} configs_={configs_} />
                <div className="space-1"></div>
                <SessionsProtraining scheduledTraining={scheduledTraining} regDetails={regDetails} members={members} configs_={configs_} changeSomething={changeSomething} />
                <div className="space-1"></div>
            </div>
        </div>
    )
}

export default SessionsContent
