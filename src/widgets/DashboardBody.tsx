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
  }

const DashboardBody: React.FC<Props> = ({games, members, configs_, regDetails, changeSomething}) => {
    return (
        <div className="main-panel">
            <Navbar_ regDetails={regDetails} />
            <DashboardContent regDetails={regDetails} changeSomething={changeSomething} games={games} members={members} configs_={configs_}/>
            </div>
    )
}

export default DashboardBody
