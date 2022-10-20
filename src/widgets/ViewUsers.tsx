import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Api from './../resources/api'
import { AnyAaaaRecord } from 'dns';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom"

type Props = {
    regDetails: ()=>void
    users: any
    getUser: (userid: string)=>void
}

const ViewUsers: React.FC<Props> = ({users, getUser, regDetails}) => {


    return (
        <Container className='formContentDiv'>
            <Row style={{textAlign: 'center'}}>
                <h2>Select user to edit</h2>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={8} lg={7}>
                    <ListGroup>
                    {
                        users ? users.map((user: any, i: any)=>{
                            return <ListGroup.Item action key={i}>
                                    <Link className='fill-all' to='/view-user' onClick={()=>getUser(user.id)}>
                                                
                                    </Link>
                                    <span id='mname_list'>{user.username}</span>
                                    <br/>
                                    <small>{user.first_name} {user.last_name}</small>
                                </ListGroup.Item>
                        }) : ''
                    }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewUsers