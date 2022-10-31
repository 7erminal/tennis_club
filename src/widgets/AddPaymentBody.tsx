import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Navbar_ from './NavBar';
import AddPaymentsContent from './AddPaymentContent';

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    members: any
    getMember: (memberid: string)=>void
  }

const AddPaymentBody: React.FC<Props> = ({getMember, viewDetails, members, changeSomething, regDetails, configs_}) => {
    return (
        <div className="main-panel">
            <Navbar_ getMember={getMember} regDetails={regDetails} />
            <AddPaymentsContent members={members} viewDetails={viewDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default AddPaymentBody
