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
import { AnyIfEmpty } from 'react-redux';

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    games: any
    members: any
    configs_: any
    scheduledCoaching: any
    scheduledTraining: any
    viewDetails: (module: string, modleid: string)=>void
  }

const DashboardContent: React.FC<Props> = ({viewDetails, games, scheduledTraining, scheduledCoaching, members, configs_, regDetails, changeSomething}) => {
    const [viewType, setViewType] = useState('view')
    return (
        <div className="DashboardContentCustom">
            <Container fluid className='dashboardContentDiv'>
                <Row>
                    <Col xs md={4} className="mt-4">
                        <div className='dashboardInfoBlock'>
                            <span>Total Members</span>
                            <div className="centerDiv"><h1>{members.length}</h1></div>
                        </div>
                    </Col>
                    <Col xs md={4} className="mt-4">
                        <div className='dashboardInfoBlock'>
                            <span>Total Active Members</span>
                            <div className="centerDiv"><h1>{members.filter((member: any)=>member.is_active=='True').length}</h1></div>
                        </div>
                    </Col>
                    <Col xs md={4} className="mt-4">
                        <div className='dashboardInfoBlock'>
                            <span>Total Inactive Members</span>
                            <div className="centerDiv"><h1>{members.filter((member: any)=>member.is_active=='False').length}</h1></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <SessionGames viewDetails={viewDetails} viewType_={viewType} changeSomething={changeSomething} games={games} members={members} regDetails={regDetails} configs_={configs_} />
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xs md={4} className="mt-4">
                        <div className='dashboardInfoBlock'>
                            <span>No. of Scheduled Matches</span>
                            <div className="centerDiv"><h1>{ games.length }</h1></div>
                        </div>
                    </Col>
                    <Col xs md={4} className="mt-4">
                        <div className='dashboardInfoBlock'>
                            <span>No. of Scheduled Training</span>
                            <div className="centerDiv"><h1>{scheduledTraining.length}</h1></div>
                        </div>
                    </Col>
                    <Col xs md={4} className="mt-4">
                        <div className='dashboardInfoBlock'>
                            <span>No. of Scheduled Coaching</span>
                            <div className="centerDiv"><h1>{scheduledCoaching.length}</h1></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardContent
