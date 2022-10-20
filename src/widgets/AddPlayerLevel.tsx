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

const AddPlayerLevel: React.FC<Props> = ({getConfigDetails_, configs_}) => {
    const [show, setShow] = useState(false);
    const [level_name, setLevel_name] = useState('');

    const handleClose = () => {setShow(false); getConfigDetails_(); setLevel_name('')}
    const handleShow = () => setShow(true);

    const action_ = () => {
        handleShow()
    }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        console.log("Configs are")
        console.log(configs_)
        switch(e.target.getAttribute('name')){
            case 'level_name':
                setLevel_name(e.target.value)
                break;
            default:
                break;
        }
             
    }

    const validata = () => {
        if(level_name!=''){
            handleShow()
        }
    }

    return (
            <div className='configsContentDiv'>
                <AdditionalItems configs_={configs_} formFor="level_name" name_={level_name} show={show} handleClose={handleClose}/>
                <div className='configsContent'>
                    <Container className="add-member-button-pane">
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Add Player Level</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control value={level_name} type="text" placeholder="Enter Player Level" name="level_name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} /> 
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
                            configs_ ? configs_.PlayerLevels.map((playerLevel: any,i: any)=>{
                                return <ListGroup.Item key={i}>
                                    <span style={{fontSize: '23px'}}>{playerLevel.level_name}</span>
                                </ListGroup.Item>
                            }) : ''
                        }
                    </ListGroup>
                </div>
            </div>
    )
}

export default AddPlayerLevel
