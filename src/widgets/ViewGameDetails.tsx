import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Navbar_ from './NavBar';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    selectedGameDetails: any
    getMember: (memberid: string)=>void
  }

const ViewGameDetails: React.FC<Props> = ({getMember, selectedGameDetails, viewDetails, changeSomething, regDetails, configs_}) => {
    return (
        <div className="main-panel">
            <Navbar_ getMember={getMember} regDetails={regDetails} />
            <Container className="view-member-body">
                <Row style={{color: 'grey'}}>
                    <h6>{selectedGameDetails.game_tag}</h6>
                </Row>
                <Row style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <h5>{selectedGameDetails.match_type}</h5>
                </Row>
                <Row style={{paddingBottom: '25px'}}>
                    <Col xs={12} md={5}>
                        <ListGroup>
                            <ListGroup.Item><b>Member Number: </b>{selectedGameDetails.opponent_1_member_number}</ListGroup.Item>
                            <ListGroup.Item><b>Name: </b>{selectedGameDetails.opponent_1_first_name} {selectedGameDetails.opponent_1_last_name}</ListGroup.Item>
                            <ListGroup.Item><b>Gender: </b>{selectedGameDetails.opponent_1_gender == 'm' ? 'Male' : selectedGameDetails.opponent_1_gender == 'f' ? 'Female' : 'Other'}</ListGroup.Item>
                            <ListGroup.Item><b>Age: </b>{selectedGameDetails.opponent_1_dob}</ListGroup.Item>
                            <ListGroup.Item><b>Level: </b>{selectedGameDetails.opponent_1_level_name == '' || selectedGameDetails.opponent_1_level_name == null ? 'N/A' : selectedGameDetails.opponent_1_level_name}</ListGroup.Item>
                            <ListGroup.Item><b>Number of wins: </b>N/A</ListGroup.Item>
                            <ListGroup.Item><b>Number of Losses: </b>N/A</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={12} md={2} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <b>VS</b>
                    </Col>
                    <Col xs={12} md={5}>
                        <ListGroup>
                            <ListGroup.Item><b>Member Number: </b>{selectedGameDetails.opponent_2_member_number}</ListGroup.Item>
                            <ListGroup.Item><b>Name: </b>{selectedGameDetails.opponent_2_first_name} {selectedGameDetails.opponent_2_last_name}</ListGroup.Item>
                            <ListGroup.Item><b>Gender: </b>{selectedGameDetails.opponent_2_gender == 'm' ? 'Male' : selectedGameDetails.opponent_2_gender == 'f' ? 'Female' : 'Other'}</ListGroup.Item>
                            <ListGroup.Item><b>Age: </b>{selectedGameDetails.opponent_1_dob}</ListGroup.Item>
                            <ListGroup.Item><b>Level: </b>{selectedGameDetails.opponent_2_level_name == '' || selectedGameDetails.opponent_2_level_name == null ? 'N/A' : selectedGameDetails.opponent_2_level_name}</ListGroup.Item>
                            <ListGroup.Item><b>Number of wins: </b>N/A</ListGroup.Item>
                            <ListGroup.Item><b>Number of Losses: </b>N/A</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <hr/>
                <Row style={{paddingTop: '15px'}}>
                    <Col>
                        <b>Status: </b>{selectedGameDetails.played == 'False' ? 'Not Played' : 'Played'}
                    </Col>
                </Row>
                <Row style={{paddingTop: '8px'}}>
                    <Col>
                        <b>Start time: </b>{moment(selectedGameDetails.start_time).format("YYYY-MM-DD HH:mm:ss")}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ViewGameDetails
