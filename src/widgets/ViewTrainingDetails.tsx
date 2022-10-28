import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar_ from './NavBar';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import moment from 'moment'

type Props = {
    changeSomething: (changeParam: string)=>void
    regDetails: ()=>void
    selectedTrainingDetails: any
    getUser: (userid: string)=>void
  }

const ViewTrainingBody: React.FC<Props> = ({getUser, selectedTrainingDetails, regDetails, changeSomething}) => {
    return (
        <div className="main-panel">
            <Navbar_ getUser={getUser} regDetails={regDetails}/>
            <Container className="view-member-body">
            <Row style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <Col md={8} xs={11}>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                <th>Start time</th>
                                <th>End Time</th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {moment(selectedTrainingDetails.start_time).format("YYYY-MM-DD HH:mm:ss")}
                                    </td>
                                    <td>
                                        {moment(selectedTrainingDetails.end_time).format("YYYY-MM-DD HH:mm:ss")}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row style={{paddingBottom: '25px'}}>
                    <Col xs={12} md={5}>
                        <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <h4>Coach</h4>
                        </Row>
                        <ListGroup>
                            <ListGroup.Item><b>Member Number: </b>{selectedTrainingDetails.professional_member_number}</ListGroup.Item>
                            <ListGroup.Item><b>Name: </b>{selectedTrainingDetails.professional_first_name} {selectedTrainingDetails.professional_last_name}</ListGroup.Item>
                            <ListGroup.Item><b>Gender: </b>{selectedTrainingDetails.professional_gender == 'm' ? 'Male' : selectedTrainingDetails.professional_gender == 'f' ? 'Female' : 'Other'}</ListGroup.Item>
                            <ListGroup.Item><b>Age: </b>{selectedTrainingDetails.opponent_1_dob}</ListGroup.Item>
                            <ListGroup.Item><b>Level: </b>{selectedTrainingDetails.opponent_1_level_name == '' || selectedTrainingDetails.opponent_1_level_name == null ? 'N/A' : selectedTrainingDetails.opponent_1_level_name}</ListGroup.Item>
                            <ListGroup.Item><b>Number of wins: </b>N/A</ListGroup.Item>
                            <ListGroup.Item><b>Number of Losses: </b>N/A</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={12} md={2} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        
                    </Col>
                    <Col xs={12} md={5}>
                        <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <h4>Learner</h4>
                        </Row>
                        <ListGroup>
                            <ListGroup.Item><b>Member Number: </b>{selectedTrainingDetails.member_number}</ListGroup.Item>
                            <ListGroup.Item><b>Name: </b>{selectedTrainingDetails.first_name} {selectedTrainingDetails.last_name}</ListGroup.Item>
                            <ListGroup.Item><b>Gender: </b>{selectedTrainingDetails.gender == 'm' ? 'Male' : selectedTrainingDetails.gender == 'f' ? 'Female' : 'Other'}</ListGroup.Item>
                            <ListGroup.Item><b>Mobile Number: </b>{selectedTrainingDetails.mobile_number}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ViewTrainingBody
