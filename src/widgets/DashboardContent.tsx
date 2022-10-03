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

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    games: any
    members: any
    configs_: any
  }

const DashboardContent: React.FC<Props> = ({games, members, configs_, regDetails, changeSomething}) => {
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
                            <div className="centerDiv"><h1>0</h1></div>
                        </div>
                    </Col>
                    <Col xs md={4} className="mt-4">
                        <div className='dashboardInfoBlock'>
                            <span>Total Inactive Members</span>
                            <div className="centerDiv"><h1>0</h1></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <SessionGames viewType_={viewType} changeSomething={changeSomething} games={games} members={members} regDetails={regDetails} configs_={configs_} />
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xs md={4} className="mt-4">
                        <div className='dashboardInfoBlock'>
                            <span>No. of Scheduled Matches</span>
                            <div className="centerDiv"><h1>0</h1></div>
                        </div>
                    </Col>
                    <Col xs md={4} className="mt-4">
                        <div className='dashboardInfoBlock'>
                            <span>No. of Scheduled Training</span>
                            <div className="centerDiv"><h1>0</h1></div>
                        </div>
                    </Col>
                    <Col xs md={4} className="mt-4">
                        <div className='dashboardInfoBlock'>
                            <span>No. of Scheduled Coaching</span>
                            <div className="centerDiv"><h1>0</h1></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardContent
