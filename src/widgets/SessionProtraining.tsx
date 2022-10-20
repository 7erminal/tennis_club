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
import moment from 'moment'

type Props = {
    regDetails: ()=>void
    configs_: any
    members: any
    changeSomething: (changeParam: string)=>void
    scheduledTraining: any
    viewDetails: (module: string, modleid: string)=>void
  }

const SessionsProtraining: React.FC<Props> = ({viewDetails, regDetails, scheduledTraining, configs_, changeSomething, members}) => {
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
                            <th>View details</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            scheduledTraining ? scheduledTraining.map((training: any, i: any)=>{
                                return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{moment(training.start_time).format("YYYY-MM-DD HH:mm:ss")}</td>
                                    <td>{moment(training.end_time).format("YYYY-MM-DD HH:mm:ss")}</td>
                                    <td>{training.professional_first_name} {training.professional_last_name}</td>
                                    <td></td>
                                    <td>
                                        <Link className='btn btn-success btn-sm' to='/get-training-schedule' onClick={()=>viewDetails('training',training.id)}>
                                            View Details
                                        </Link>
                                    </td>
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
