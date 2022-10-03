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
import AddProTraining from "./AddProTrainingModal"

type Props = {
    regDetails: ()=>void
    configs_: any
    members: any
    changeSomething: (changeParam: string)=>void
    scheduledTraining: any
  }

const SessionsProtraining: React.FC<Props> = ({regDetails, scheduledTraining, configs_, changeSomething, members}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const action_ = () => {
        regDetails()
        handleShow()
    }

    return (
            <div className='membersContentDiv'>
                <AddProTraining members={members} changeSomething={changeSomething} show={show} handleClose={handleClose}/>
                <div className='sessionTableContent'>
                    <Container className="add-member-button-pane">
                        <Row>
                            <Col>
                                <a onClick={action_} className='add-member-button'>
                                    <BsPlusCircle size={50} /> <span style={{fontSize: '22px'}} >Book Training</span>
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
                            <th>Professional</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            scheduledTraining ? scheduledTraining.map((training: any, i: any)=>{
                                return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{training.start_time}</td>
                                    <td>{training.end_time}</td>
                                    <td>{training.professional_first_name} {training.professional_last_name}</td>
                                    <td></td>
                                </tr>
                            }) : ''
                           }
                        </tbody>
                    </Table>
                </div>
            </div>
    )
}

export default SessionsProtraining
