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
import SettingsTab from './SettingsTab';

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    users: any
    getUser: (userid: string)=>void
  }

const SettingsBody: React.FC<Props> = ({users, getUser, regDetails, changeSomething, configs_}) => {
    return (
        <div className="main-panel">
            <Navbar_ getUser={getUser} regDetails={regDetails}/>
            <SettingsTab getUser={getUser} users={users} configs_={configs_} regDetails={regDetails} changeSomething={changeSomething} />
            {/* <SettingsContent /> */}
            </div>
    )
}

export default SettingsBody
