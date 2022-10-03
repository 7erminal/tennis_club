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
import Modal from 'react-bootstrap/Modal';
import Api from '../resources/api'

type Props = {
    // regDetails: ()=>void
    show: boolean
    handleClose: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    members: any
  }

const AddGame: React.FC<Props> = ({changeSomething, show, handleClose, configs_, members}) => {

    const [type, setType] = useState('')
    const [court, setCourt] = useState('')
    const [matchup, setMatchup] = useState('')
    const [starttime, setStarttime] = useState('')
    const [endtime, setEndtime] = useState('')
    const [matchtype, setMatchtype] = useState('')
    const [opponet_1, setOpponet_1] = useState('')
    const [opponet_2, setOpponet_2] = useState('')
    const [opponet_3, setOpponet_3] = useState('')
    const [opponet_4, setOpponet_4] = useState('')
    

    const selectInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value)

		switch(e.target.getAttribute('name')){
			case "type":
				setType(e.target.value)
				break;
            case "court":
                setCourt(e.target.value)
                break;
            case "matchup":
                setMatchup(e.target.value)
                break;
            case "opponent_1":
                setOpponet_1(e.target.value)
                break;
            case "opponent_2":
                setOpponet_2(e.target.value)
                break;
            case "opponent_3":
                setOpponet_3(e.target.value)
                break;
            case "opponent_4":
                setOpponet_4(e.target.value)
                break;
            case "matchtype":
                setMatchtype(e.target.value)
                break;
			default:
				return null
		}

		console.log(e.target.getAttribute('name'))
    }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)

		console.log(e.target.getAttribute('name'))

		switch(e.target.getAttribute('name')){
			case 'starttime':
				setStarttime(e.target.value)
				break;
			case 'endtime':
				setEndtime(e.target.value)
				break;
			default:
				return null;

		}
    }

    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()

        const params = {game_type: type, court: court, start_time: starttime, end_time: endtime, opponet_1: opponet_1, opponet_2: opponet_2, opponet_3: opponet_3, opponet_4: opponet_4, match_type: matchtype}
        
        console.log('sending ...')
        console.log(params)
        new Api().add_game(params).then(response=>{
            console.log("Getting data")
            console.log(response)
            console.log(response.status)

            if(response.status == 202){

                console.log("successful")

                console.log(response)
                setType('')
                setCourt('')
                setMatchup('')
                setOpponet_1('')
                setOpponet_2('')
                setOpponet_3('')
                setOpponet_4('')
                setMatchtype('')
                
                handleClose()
                changeSomething('sessions')
            }

        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }


    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Game</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitForm}>
        <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Select Game type</Form.Label>
                        <Form.Select size='sm' aria-label="Default select example" name="type" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                            <option value="">Select Game Type</option>
                            {
                                configs_ ? configs_.GameTypes.map((gameType: any,i: any)=>{
                                    return <option key={i} value={gameType.game_type_name}>{gameType.game_type_name}</option>
                                }) : ''
                            }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Choose Court</Form.Label>
                        <Form.Select size='sm' aria-label="Default select example" name="court" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                            <option value="">Select Court</option>
                            {
                                configs_ ? configs_.Courts.map((court: any,i: any)=>{
                                    return <option key={i} value={court.id}>{court.court_name}</option>
                                }) : ''
                            }
                    </Form.Select>
                </Form.Group>
                <Row>
                    <Col sm={5} md={5}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Select Match Up</Form.Label>
                                <Form.Select size='sm' aria-label="Default select example" name="opponent_1" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                    <option value="">Select Opponent</option>
                                    <option value="visitor">Visitor</option>
                                    {
                                        members ? members.map((member: any, i: any)=>{
                                            return <option key={i} value={member.id}>{member.first_name} {member.last_name}</option>
                                        }) : ''
                                    }
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col sm={1} md={2}>Vs</Col>
                    <Col sm={5} md={5}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Select Match Up</Form.Label>
                                <Form.Select size='sm' aria-label="Default select example" name="opponent_2" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                    <option value="">Select Opponent</option>
                                    <option value="visitor">Visitor</option>
                                    {
                                        members ? members.map((member: any, i: any)=>{
                                            return <option key={i} value={member.id}>{member.first_name} {member.last_name}</option>
                                        }) : ''
                                    }
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                {
                    type == 'Doubles' ? 
                    <Row>
                        <Col sm={5} md={5}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Select Match Up</Form.Label>
                                    <Form.Select size='sm' aria-label="Default select example" name="opponent_3" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                        <option value="">Select Opponent</option>
                                        <option value="visitor">Visitor</option>
                                        {
                                            members ? members.map((member: any, i: any)=>{
                                                return <option key={i} value={member.id}>{member.first_name} {member.last_name}</option>
                                            }) : ''
                                        }
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col sm={1} md={2}>Vs</Col>
                        <Col sm={5} md={5}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Select Match Up</Form.Label>
                                    <Form.Select size='sm' aria-label="Default select example" name="opponent_4" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                        <option value="">Select Opponent</option>
                                        <option value="visitor">Visitor</option>
                                        {
                                            members ? members.map((member: any, i: any)=>{
                                                return <option key={i} value={member.id}>{member.first_name} {member.last_name}</option>
                                            }) : ''
                                        }
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row> : ''
                }
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Start time</Form.Label>
                            <Form.Control value={starttime} type="datetime-local" name="starttime" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>End time</Form.Label>
                            <Form.Control value={endtime} type="datetime-local" name="endtime" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Select Match Type</Form.Label>
                        <Form.Select size='sm' aria-label="Default select example" name="matchtype" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                            <option value="none">Select Match Type</option>
                            {
                                configs_ ? configs_.MatchTypes.map((matchType: any,i: any)=>{
                                    return <option key={i} value={matchType.match_type_name}>{matchType.match_type_name}</option>
                                }) : ''
                            }
                    </Form.Select>
                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type='submit' onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    )
}

export default AddGame
