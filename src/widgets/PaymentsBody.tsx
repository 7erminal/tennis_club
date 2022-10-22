import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Navbar_ from './NavBar';
import PaymentsContent from './PaymentsContent';

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    members: any
    games: any
    scheduledCoaching: any
    scheduledTraining: any
    viewDetails: (module: string, modleid: string)=>void
  }

const PaymentsBody: React.FC<Props> = ({viewDetails, changeSomething, games, scheduledCoaching, scheduledTraining, regDetails, configs_, members}) => {
    return (
        <div className="main-panel">
            <Navbar_ regDetails={regDetails} />
            <PaymentsContent viewDetails={viewDetails} changeSomething={changeSomething} games={games} scheduledTraining={scheduledTraining} scheduledCoaching={scheduledCoaching} members={members} regDetails={regDetails} configs_={configs_} />
            </div>
    )
}

export default PaymentsBody
