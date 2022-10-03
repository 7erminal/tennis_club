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

const AddMatchType: React.FC<Props> = ({getConfigDetails_, configs_}) => {
    const [show, setShow] = useState(false);
    const [match_type_name, setMatch_type_name] = useState('');

    const handleClose = () => {setShow(false); getConfigDetails_(); setMatch_type_name('')}
    const handleShow = () => setShow(true);

    const action_ = () => {
        handleShow()
    }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        console.log("Configs are")
        console.log(configs_)
        switch(e.target.getAttribute('name')){
            case 'match_type_name':
                setMatch_type_name(e.target.value)
                break;
            default:
                break;
        }
             
    }

    const validata = () => {
        if(match_type_name!=''){
            handleShow()
        }
    }

    return (
            <div className='configsContentDiv'>
                <AdditionalItems configs_={configs_} formFor="match_type" name_={match_type_name} show={show} handleClose={handleClose}/>
                <div className='configsContent'>
                    <Container className="add-member-button-pane">
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Add Match Type</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control value={match_type_name} type="text" placeholder="Enter Match Type Name" name="match_type_name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} /> 
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
                            configs_ ? configs_.MatchTypes.map((matchType: any,i: React.Key | null | undefined)=>{
                                return <ListGroup.Item key={i}>
                                    <span style={{fontSize: '23px'}}>{matchType.match_type_name}</span>
                                    <br/>
                                    <small>{matchType.description}</small>
                                    <br />
                                    <small>
                                        <ul>
                                            {
                                                matchType.sub_type.split(',').map((sub_: string,i: React.Key | null | undefined)=>{
                                                    return <li key={i}>{sub_}</li>
                                                })
                                            }
                                        </ul>
                                    </small>
                                </ListGroup.Item>
                            }) : ''
                        }
                    </ListGroup>
                </div>
            </div>
    )
}

export default AddMatchType
