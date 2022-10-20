import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Navbar_ from './NavBar';
import MembersContent from './MembersContent';

type Props = {
    regDetails: ()=>void
    members: any
    getMember: (memberid: string)=>void
  }

const MembersBody: React.FC<Props> = ({regDetails, members, getMember}) => {
    return (
        <div className="main-panel">
            <Navbar_ regDetails={regDetails} />
            <MembersContent getMember={getMember} members={members} regDetails={regDetails} />
            </div>
    )
}

export default MembersBody
