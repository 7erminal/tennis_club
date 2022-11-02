import React, { useState, useEffect } from 'react'
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
import ReactPaginate from 'react-paginate';

type Props = {
    regDetails: ()=>void
    members: any
    getMember: (memberid: string)=>void
    registrationDetails_: any
    configs_: any
    changeSomething: (changeParam: string)=>void
    selectedMemberDetails: any
  }

const MembersContent: React.FC<Props> = ({selectedMemberDetails, changeSomething, registrationDetails_, regDetails, members, getMember, configs_}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showPaymentUpdate, setShowPaymentUpdate] = useState(false);
    const [detailsValidated, setDetailsValidated] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [currentItems, setCurrentItems] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const toggleShowSuccess = () => setShowSuccess(!showSuccess);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(members.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(members.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % members.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    const showRegistrationModal = () => {
        regDetails()
        handleDetailsShow()
        setDetailsValidated(false)
    }

    const set_detailsValidated = () => {
        setDetailsValidated(true)
    }

    const showRenewDetailsModal = (memberid: string) =>{
        handlePaymentUpdateShow()
        getMember(memberid)
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
            <div className='dashboardPic'></div>
            <div className='membersContentDiv'>
                <div className='dashboardTableContent'>
                    <Container className="add-member-button-pane">
                        <Row>
                            <Col>
                                <span onClick={showRegistrationModal} className='add-member-button'>
                                    <BsPlusCircle size={50} /> <span style={{fontSize: '22px'}} >Add Member</span>
                                </span>
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
                            {
                                currentItems ? currentItems.map((member: any,i: number)=>{
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
                                            <Button className='mx-2 btn btn-info btn-sm' type="button" onClick={()=>showRenewDetailsModal(member.id)}>
                                                Renew
                                            </Button>
                                        </td>
                                    </tr>
                                }) : <tr></tr>
                            }
                        </tbody>
                    </Table>
                    <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="next >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel="< previous"
                                    // renderOnZeroPageCount={null}
                                    containerClassName="pagination"
                                    activeClassName="active"
                                  />
                    {/* <Container>
                        <Row>
                            <Col>
                                <Link to='/all-members' className="btn btn-primary">View all</Link>
                            </Col>
                        </Row>
                    </Container> */}
                </div>
            </div>
        </div>
    )
}

export default MembersContent
