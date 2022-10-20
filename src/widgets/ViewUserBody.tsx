import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar_ from './NavBar';
import ListGroup from 'react-bootstrap/ListGroup';

type Props = {
    changeSomething: (changeParam: string)=>void
    regDetails: ()=>void
    selectedUserDetails: any
  }

const ViewUser: React.FC<Props> = ({selectedUserDetails, regDetails, changeSomething}) => {
    return (
        <div className="main-panel">
            <Navbar_ regDetails={regDetails}/>
            <Container className="view-member-body">
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'right', flexDirection: 'column', textAlign: 'right' }}>
                    <span>edit</span>
                </Row>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '8px', flexDirection: 'column' }}>
                    <h3>{selectedUserDetails.first_name} {selectedUserDetails.last_name}</h3>
                </Row>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column' }}>
                    <div>{selectedUserDetails.is_active == 'True' || selectedUserDetails.is_active == true ? <span style={{color: 'green'}}>Active member</span> : <span style={{color: 'orange'}}>Inactive member</span>}</div>
                </Row>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Col md={8} sm={12} xs={12}>
                        <ListGroup>
                            <ListGroup.Item><b>First Name: </b>{selectedUserDetails.first_name}</ListGroup.Item>
                            <ListGroup.Item><b>Last Name: </b>{selectedUserDetails.last_name}</ListGroup.Item>
                            <ListGroup.Item><b>Email: </b>{selectedUserDetails.email}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ViewUser
