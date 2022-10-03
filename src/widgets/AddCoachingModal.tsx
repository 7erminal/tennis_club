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

const AddCoaching: React.FC<Props> = ({configs_, changeSomething,show, handleClose, members}) => {

    const [starttime, setStarttime] = useState('')
    const [endtime, setEndtime] = useState('')
    const [type, setType] = useState('')
    const [days, setDays] = useState('')
    const [group, setGroup] = useState('')
    const [weeks, setWeeks] = useState('')
    const [user_id, setUser_id] = useState('')
    const [notify, setNotify] = useState(false)
    
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
            case "days":
                setDays(e.target.value)
                break;
			default:
				return null;
		}
    }

    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()

        const params = {coaching_type: type, user_id: user_id, start_time: starttime, end_time: endtime, group: group, days: days, weeks: weeks, notify: notify}
        
        console.log('sending ...')
        console.log(params)
        new Api().schedule_coach(params).then(response=>{
            console.log("Getting data")
            console.log(response)
            console.log(response.status)

            if(response.status == 202){

                console.log("successful")

                console.log(response)
                setType('')
                setDays('')
                setGroup('')
                setWeeks('')
                setStarttime('')
                setEndtime('')
                setNotify(false)
                
                handleClose()
                changeSomething('sessions')
            }

        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    const selectInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value)

		switch(e.target.getAttribute('name')){
			case "type":
				setType(e.target.value)
				break;
            case "group":
                setGroup(e.target.value)
                break;
            case "weeks":
                setWeeks(e.target.value)
                break;
            case "user_id":
                setUser_id(e.target.value)
                break;
			default:
				return null
		}

		console.log(e.target.getAttribute('name'))
    }


    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book yourself a coach</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitForm}>
        <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Member</Form.Label>
                        <Form.Select size='sm' aria-label="Default select example" name="user_id" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                            <option value="">Select Member</option>
                            {
                                members ? members.map((member: any, i: any)=>{
                                    return <option key={i} value={member.id}>{member.first_name} {member.last_name}</option>
                                }) : ''
                            }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control value={starttime} type="datetime-local" placeholder="Select start time" name="starttime" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control value={endtime} type="datetime-local" placeholder="Select end time" name="endtime" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Type</Form.Label>
                        <Form.Select size='sm' aria-label="Default select example" name="type" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                            <option value="">Select coaching type</option>
                            {
                                configs_ ? configs_.CoachingTypes.map((coaching_type: any, i: any)=>{
                                    return <option key={i} value={coaching_type.coaching_type_name}>{coaching_type.coaching_type_name}</option>
                                }) : ''
                            }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Choose Days</Form.Label>
                        
                    <Form.Check
                        inline
                        label="Monday"
                        name="days"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                    />
                    <Form.Check
                        inline
                        label="Tuesday"
                        name="days"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                    />
                    <Form.Check
                        inline
                        label="Wednesday"
                        name="days"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                    />
                    <Form.Check
                        inline
                        label="Thursday"
                        name="days"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                    />
                    <Form.Check
                        inline
                        label="Friday"
                        name="days"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                    />
                    <Form.Check
                        inline
                        label="Saturday"
                        name="days"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                    />
                    <Form.Check
                        inline
                        label="Sunday"
                        name="days"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Select group</Form.Label>
                        <Form.Select size='sm' aria-label="Default select example" name="group" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                            <option value="Saturday">Select group</option>
                            {
                                configs_ ? configs_.Group.map((group_: any, i: any)=>{
                                    return <option key={i} value={group_.group_name}>{group_.group_name}</option>
                                }) : ''
                            }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Select Number of Weeks</Form.Label>
                        <Form.Select size='sm' aria-label="Default select example" name="weeks" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                            <option value="">Select Number of Weeks</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='6'>6</option>
                            <option value='8'>8</option>
                    </Form.Select>
                </Form.Group>
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Send Notification in 1 hour"
                />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    )
}

export default AddCoaching
