import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar_ from './NavBar';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import moment from 'moment'

type Props = {
    changeSomething: (changeParam: string)=>void
    regDetails: ()=>void
    selectedCoachingDetails: any
    getUser: (userid: string)=>void
  }

const ViewCoachingBody: React.FC<Props> = ({getUser, selectedCoachingDetails, regDetails, changeSomething}) => {
    return (
        <div className="main-panel">
            <Navbar_ getUser={getUser} regDetails={regDetails}/>
            <Container className="view-member-body">
                {/* <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'right', flexDirection: 'column', textAlign: 'right' }}>
                    <span>edit</span>
                </Row> */}
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
                                        {moment(selectedCoachingDetails.start_time).format("YYYY-MM-DD HH:mm:ss")}
                                    </td>
                                    <td>
                                        {moment(selectedCoachingDetails.end_time).format("YYYY-MM-DD HH:mm:ss")}
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
                            <ListGroup.Item><b>Member Number: </b>{selectedCoachingDetails.professional_member_number}</ListGroup.Item>
                            <ListGroup.Item><b>Name: </b>{selectedCoachingDetails.professional_first_name} {selectedCoachingDetails.professional_last_name}</ListGroup.Item>
                            <ListGroup.Item><b>Gender: </b>{selectedCoachingDetails.professional_gender == 'm' ? 'Male' : selectedCoachingDetails.professional_gender == 'f' ? 'Female' : 'Other'}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={12} md={2} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        
                    </Col>
                    <Col xs={12} md={5}>
                        <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <h4>Learner</h4>
                        </Row>
                        <ListGroup>
                            <ListGroup.Item><b>Member Number: </b>{selectedCoachingDetails.member_number}</ListGroup.Item>
                            <ListGroup.Item><b>Name: </b>{selectedCoachingDetails.first_name} {selectedCoachingDetails.last_name}</ListGroup.Item>
                            <ListGroup.Item><b>Gender: </b>{selectedCoachingDetails.gender == 'm' ? 'Male' : selectedCoachingDetails.gender == 'f' ? 'Female' : 'Other'}</ListGroup.Item>
                            <ListGroup.Item><b>Group: </b>{selectedCoachingDetails.group_name}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ViewCoachingBody
