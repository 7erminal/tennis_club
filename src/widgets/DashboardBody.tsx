import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Navbar_ from './NavBar';
import DashboardContent from './DashboardContent';


const DashboardBody: React.FC = () => {
    return (
        <div className="main-panel">
            <Navbar_ />
            <DashboardContent />
            </div>
    )
}

export default DashboardBody
