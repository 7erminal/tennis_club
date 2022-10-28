import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Navbar_ from './NavBar';
import AllMembersContent from './AllMembersContent';

type Props = {
    regDetails: ()=>void
    members: any
    getMember: (memberid: string)=>void
    registrationDetails_: any
    configs_: any
    changeSomething: (changeParam: string)=>void
    getUser: (userid: string)=>void
  }

const AllMembersBody: React.FC<Props> = ({getUser, changeSomething, regDetails, members, getMember, configs_, registrationDetails_}) => {
    return (
        <div className="main-panel">
            <Navbar_ getUser={getUser} regDetails={regDetails} />
            <AllMembersContent changeSomething={changeSomething} getMember={getMember} members={members} regDetails={regDetails} registrationDetails_={registrationDetails_} configs_={configs_} />
            </div>
    )
}

export default AllMembersBody
