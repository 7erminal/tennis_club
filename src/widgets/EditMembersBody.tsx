import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Navbar_ from './NavBar';
import SettingsContent from './SettingsContent';
import EditMembersTab from './EditMembersTab';

type Props = {
    regDetails: ()=>void
    registrationDetails_: any
    members: any
  }

const SettingsBody: React.FC<Props> = ({members, regDetails, registrationDetails_}) => {
    return (
        <div className="main-panel">
            <Navbar_ regDetails={regDetails}/>
            <EditMembersTab members={members} regDetails={regDetails} registrationDetails_={registrationDetails_} />
            {/* <SettingsContent /> */}
            </div>
    )
}

export default SettingsBody
