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
import { BsPlusCircle } from "react-icons/bs";
import AddCoaching from "./AddCoachingModal"

type Props = {
    regDetails: ()=>void
    configs_: any
    changeSomething: (changeParam: string)=>void
    members: any
    scheduledCoaching: any
  }

const SessionsCoaching: React.FC<Props> = ({members, scheduledCoaching, changeSomething, regDetails, configs_}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const action_ = () => {
        regDetails()
        handleShow()
    }

    return (
            <div className='membersContentDiv'>
                <AddCoaching members={members} show={show} handleClose={handleClose} changeSomething={changeSomething} configs_={configs_}/>
                <div className='sessionTableContent'>
                    <Container className="add-member-button-pane">
                        <Row>
                            <Col>
                                <a onClick={action_} className='add-member-button'>
                                    <BsPlusCircle size={50} /> <span style={{fontSize: '22px'}} >Book Coach</span>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                    <Table bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Start time</th>
                            <th>End time</th>
                            <th>Type</th>
                            <th>Member</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            scheduledCoaching ? scheduledCoaching.map((coaching: any, i: any)=>{
                                return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{coaching.start_time}</td>
                                    <td>{coaching.end_time}</td>
                                    <td>{coaching.coaching_type}</td>
                                    <td>{coaching.first_name} {coaching.last_name}</td>
                                    <td>{coaching.status}</td>
                                </tr>
                            }) : ''
                           }
                        </tbody>
                    </Table>
                </div>
            </div>
    )
}

export default SessionsCoaching
