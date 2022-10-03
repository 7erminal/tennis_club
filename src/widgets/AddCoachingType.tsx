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
import AddGame from "./AddGameModal"
import ListGroup from 'react-bootstrap/ListGroup';
import AdditionalItems from './AdditionaItemsModal';

type Props = {
    getConfigDetails_: ()=>void
    configs_: any
  }

const AddCoachingType: React.FC<Props> = ({getConfigDetails_, configs_}) => {
    const [show, setShow] = useState(false);
    const [coaching_type_name, setCoaching_type_name] = useState('');

    const handleClose = () => {setShow(false); getConfigDetails_(); setCoaching_type_name('')}
    const handleShow = () => setShow(true);

    const action_ = () => {
        handleShow()
    }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        console.log("Configs are")
        console.log(configs_)
        switch(e.target.getAttribute('name')){
            case 'coaching_type_name':
                setCoaching_type_name(e.target.value)
                break;
            default:
                break;
        }
             
    }

    const validata = () => {
        if(coaching_type_name!=''){
            handleShow()
        }
    }

    return (
            <div className='configsContentDiv'>
                <AdditionalItems configs_={configs_} formFor="coaching_type" name_={coaching_type_name} show={show} handleClose={handleClose}/>
                <div className='configsContent'>
                    <Container className="add-member-button-pane">
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Add Coaching Type</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control value={coaching_type_name} type="text" placeholder="Enter Coaching Type Name" name="coaching_type_name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} /> 
                                        </Col>
                                        <Col>
                                            <BsPlusCircle size={30} onClick={validata} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                    </Container>
                    <ListGroup>
                        {
                            configs_ ? configs_.CoachingTypes.map((coaching_type: any,i: React.Key | null | undefined)=>{
                                return <ListGroup.Item key={i}>
                                    <span style={{fontSize: '23px'}}>{coaching_type.coaching_type_name}</span>
                                </ListGroup.Item>
                            }) : ''
                        }
                    </ListGroup>
                </div>
            </div>
    )
}

export default AddCoachingType
