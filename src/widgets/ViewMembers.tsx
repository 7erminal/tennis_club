import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Api from './../resources/api'
import { AnyAaaaRecord } from 'dns';
import ListGroup from 'react-bootstrap/ListGroup';

type Props = {
    registrationDetails_: any
    regDetails: ()=>void
    members: any
}

const ViewMembers: React.FC<Props> = ({members, regDetails, registrationDetails_}) => {


    return (
        <Container className='formContentDiv'>
            <Row style={{textAlign: 'center'}}>
                <h2>Select member to edit</h2>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={8} lg={7}>
                    <ListGroup>
                    {
                        members ? members.map((member: any, i: any)=>{
                            return <ListGroup.Item action key={i}>
                                    <span id='mname_list'>{member.member_number}</span>
                                    <br/>
                                    <small>{member.first_name} {member.last_name}</small>
                                </ListGroup.Item>
                        }) : ''
                    }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewMembers