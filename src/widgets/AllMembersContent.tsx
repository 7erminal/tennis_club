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
import AddMemberModals from './AddMemberModals';
import Toast from 'react-bootstrap/Toast';

type Props = {
    regDetails: ()=>void
    members: any
    getMember: (memberid: string)=>void
    registrationDetails_: any
    configs_: any
    changeSomething: (changeParam: string)=>void
    selectedMemberDetails: any
  }

const AllMembersContent: React.FC<Props> = ({selectedMemberDetails, changeSomething, registrationDetails_, regDetails, members, getMember, configs_}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [detailsValidated, setDetailsValidated] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showPaymentUpdate, setShowPaymentUpdate] = useState(false);

    const toggleShowSuccess = () => setShowSuccess(!showSuccess);

    const showRegistrationModal = () => {
        regDetails()
        handleDetailsShow()
        setDetailsValidated(false)
    }

    const set_detailsValidated = () => {
        setDetailsValidated(true)
    }

    const handleDetailsClose = () => setShowDetails(false);
    const handleDetailsShow = () => setShowDetails(true);

    const handlePaymentUpdateClose = () => setShowPaymentUpdate(false);
    const handlePaymentUpdateShow = () => setShowPaymentUpdate(true);

    return (
        <div className="contentCustom">
            <Toast show={showSuccess} onClose={toggleShowSuccess}>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">Success</strong>
                    {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>Details have been added successfully</Toast.Body>
                </Toast>
            <AddMemberModals selectedMemberDetails={selectedMemberDetails} handlePaymentUpdateClose={handlePaymentUpdateClose} showPaymentUpdate={showPaymentUpdate} members={members} toggleShowSuccess={toggleShowSuccess} set_detailsValidated={set_detailsValidated} detailsValidated={detailsValidated} showDetails={showDetails} handleDetailsShow={handleDetailsShow} handleDetailsClose={handleDetailsClose} changeSomething={changeSomething} registrationDetails_={registrationDetails_} configs_={configs_}  />
            <div className='allMembersPic'></div>
            <div className='membersContentDiv'>
                <div className='dashboardTableContent'>
                    {/* <Container className="add-member-button-pane">
                        <Row>
                            <Col>
                                <span onClick={showRegistrationModal} className='add-member-button'>
                                    <BsPlusCircle size={50} /> <span style={{fontSize: '22px'}} >Add Member</span>
                                </span>
                            </Col>
                        </Row>
                    </Container> */}
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
                            {
                                members ? members.map((member: any,i: number)=>{
                                    return <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{member.account_number}</td>
                                        <td>{member.member_number}</td>
                                        <td>{member.first_name} {member.last_name}</td>
                                        <td>{member.plan}</td>
                                        <td>{member.is_active == 'True' ? 'Active' : 'Inactive'}</td>
                                        <td>
                                            <Link className='btn btn-success btn-sm' to='/view-member' onClick={()=>getMember(member.id)}>
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                }) : <tr></tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default AllMembersContent
