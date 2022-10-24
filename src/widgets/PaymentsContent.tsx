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
import SessionGames from './SessionGames'
import { BsPlusCircle } from "react-icons/bs";
import SessionCoaching from './SessionCoaching'
import SessionsProtraining from './SessionProtraining';

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
  }

const PaymentsContent: React.FC<Props> = ({viewDetails, changeSomething, regDetails, configs_}) => {
    const [viewType, setViewType] = useState('update')

    return (
        <div className="contentCustom-session">
            <div className='session-content-ab'>
                
            </div>
        </div>
    )
}

export default PaymentsContent
