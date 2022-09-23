import React from 'react'
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

type Props = {
    regDetails: ()=>void
  }

const MembersContent: React.FC<Props> = ({regDetails}) => {
    return (
        <div className="contentCustom">
            <div className='dashboardPic'></div>
            <div className='membersContentDiv'>
                <div className='dashboardTableContent'>
                    <Container className="add-member-button-pane">
                        <Row>
                            <Col>
                                <Link to="/edit-members" onClick={regDetails} className='add-member-button'>
                                    <BsPlusCircle size={50} /> <span style={{fontSize: '22px'}} >Add Member</span>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Account Number</th>
                            <th>Member Number</th>
                            <th>Name (First and Last Name)</th>
                            <th>Plan</th>
                            <th>Account Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>123456</td>
                                <td>123435</td>
                                <td>Thomas</td>
                                <td>Couple</td>
                                <td>Active</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>123456</td>
                                <td>123435</td>
                                <td>Thomas</td>
                                <td>Couple</td>
                                <td>Active</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>123456</td>
                                <td>123435</td>
                                <td>Thomas</td>
                                <td>Couple</td>
                                <td>Active</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>123456</td>
                                <td>123435</td>
                                <td>Thomas</td>
                                <td>Couple</td>
                                <td>Active</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>123456</td>
                                <td>123435</td>
                                <td>Thomas</td>
                                <td>Couple</td>
                                <td>Active</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default MembersContent
