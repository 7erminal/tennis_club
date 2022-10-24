import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar_ from './NavBar';
import ListGroup from 'react-bootstrap/ListGroup';

type Props = {
    changeSomething: (changeParam: string)=>void
    regDetails: ()=>void
    selectedMemberDetails: any
  }

const ViewMemberBody: React.FC<Props> = ({selectedMemberDetails, regDetails, changeSomething}) => {
    const image_source = 'http://35.181.154.76:8000/media/'+selectedMemberDetails.picture
    console.log("Image source is")
    console.log(image_source)
    return (
        <div className="main-panel">
            <Navbar_ regDetails={regDetails}/>
            <Container className="view-member-body">
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'right', flexDirection: 'column', textAlign: 'right' }}>
                    <span>edit</span>
                </Row>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="member-image-div"><img className="profile-image" src={image_source}/></div>
                </Row>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '8px', flexDirection: 'column' }}>
                    <h3>{selectedMemberDetails.first_name} {selectedMemberDetails.last_name}</h3>
                </Row>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column' }}>
                    <div><b>Member number: </b>{selectedMemberDetails.member_number}</div>
                </Row>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column' }}>
                    <div><b>Date of Birth: </b>{selectedMemberDetails.dob}</div>
                </Row>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column' }}>
                    <div>{selectedMemberDetails.gender == 'm' ? 'Male' : selectedMemberDetails.gender == 'f' ? 'Female' : 'Other'}</div>
                </Row>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column' }}>
                    <div>{selectedMemberDetails.is_active == 'True' ? <span style={{color: 'green'}}>Active member</span> : <span style={{color: 'orange'}}>Inactive member</span>}</div>
                </Row>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Col md={8} sm={12} xs={12}>
                        <ListGroup>
                            <ListGroup.Item><b>Mobile Number: </b>{selectedMemberDetails.mobile_number}</ListGroup.Item>
                            <ListGroup.Item><b>Email: </b>{selectedMemberDetails.email}</ListGroup.Item>
                            <ListGroup.Item><b>Plan: </b>{selectedMemberDetails.plan}</ListGroup.Item>
                            <ListGroup.Item><b>Preferred Game type: </b>{selectedMemberDetails.game_type_name}</ListGroup.Item>
                            <ListGroup.Item><b>Level: </b>{selectedMemberDetails.level_name}</ListGroup.Item>
                            <ListGroup.Item><b>Preferred time of play: </b>{selectedMemberDetails.time_of_play}</ListGroup.Item>
                        </ListGroup>
                        <hr/>
                        <h6>Medical History</h6>
                        <ListGroup>
                            <ListGroup.Item><b>Heart Problem: </b>{selectedMemberDetails.heart_problem == null ? 'No' : selectedMemberDetails.heart_problem == 'False' ? 'No' : 'Yes'}</ListGroup.Item>
                            <ListGroup.Item><b>Respiratory Problem: </b>{selectedMemberDetails.heart_problem_in_family_hist == null ? 'No' : selectedMemberDetails.heart_problem_in_family_hist == 'False' ? 'No' : 'Yes'}</ListGroup.Item>
                            <ListGroup.Item><b>Family history of short breath: </b>{selectedMemberDetails.respiratory_problem == null ? 'No' : selectedMemberDetails.respiratory_problem == 'False' ? 'No' : 'Yes'}</ListGroup.Item>
                            <ListGroup.Item><b>Advised not to do any strenous exercise: </b>{selectedMemberDetails.respiratory_problem_in_family_hist == null ? 'No' : selectedMemberDetails.respiratory_problem_in_family_hist == 'False' ? 'No' : 'Yes'}</ListGroup.Item>
                            <ListGroup.Item><b>Bone or joint injury: </b>{selectedMemberDetails.heart_problem == null ? 'No' : selectedMemberDetails.heart_problem == 'False' ? 'No' : 'Yes'}</ListGroup.Item>
                            <ListGroup.Item><b>Any medical condition that can hinder playing tennis: </b>{selectedMemberDetails.heart_problem == null ? 'No' : selectedMemberDetails.heart_problem == 'False' ? 'No' : 'Yes'}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ViewMemberBody
