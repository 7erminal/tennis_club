import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Navbar_ from './NavBar';
import DashboardContent from './DashboardContent';

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    games: any
    members: any
    configs_: any
    scheduledCoaching: any
    scheduledTraining: any
    viewDetails: (module: string, modleid: string)=>void
    getMember: (memberid: string)=>void
  }

const DashboardBody: React.FC<Props> = ({getMember, viewDetails, games, scheduledTraining, scheduledCoaching, members, configs_, regDetails, changeSomething}) => {
    return (
        <div className="main-panel">
            <Navbar_ getMember={getMember} regDetails={regDetails} />
            <DashboardContent viewDetails={viewDetails} regDetails={regDetails} scheduledCoaching={scheduledCoaching} scheduledTraining={scheduledTraining} changeSomething={changeSomething} games={games} members={members} configs_={configs_}/>
            </div>
    )
}

export default DashboardBody
