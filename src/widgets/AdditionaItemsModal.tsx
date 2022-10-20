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
    name_: string
    formFor: string
    configs_: any
  }

const AdditionalItems: React.FC<Props> = ({show, handleClose, name_, formFor, configs_}) => {

    const [description, setDescription] = useState('')
    const [subType, setSubType] = useState([''])
    const [gameSubType, setGameSubType] = useState([''])
    const [subMatchTypes, setSubMatchTypes] = useState('')
    const [subGameTypes, setSubGameTypes] = useState('')
    const [groupID, setGroupID] = useState('')
    

    const selectInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value)

		switch(e.target.getAttribute('name')){
			case "group_id":
				setGroupID(e.target.value)
				break;
            // case "court":
            //     setCourt(e.target.value)
            //     break;
            // case "matchup":
            //     setMatchup(e.target.value)
            //     break;
            // case "matchtype":
            //     setMatchtype(e.target.value)
            //     break;
			default:
				return null
		}

		console.log(e.target.getAttribute('name'))
    }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)

		console.log(e.target.getAttribute('name'))

        let finalSubMatchTypeString = ''

		switch(e.target.getAttribute('name')){
			case 'description':
				setDescription(e.target.value)
				break;
            case 'sub_match_type_name':
                console.log("sub types...")
                console.log(e.target.value)
                console.log(document.getElementsByName('sub_match_type_name'))
                
                // const subTypes_ = Array.from(document.getElementsByName('sub_match_type_name'))
                Array.from(document.getElementsByName('sub_match_type_name')).map((element_,i)=>{
                    console.log("element value is ")
                    console.log((element_ as HTMLInputElement).value)
                    if((element_ as HTMLInputElement).value != ''){
                        if(finalSubMatchTypeString==''){
                            finalSubMatchTypeString = (element_ as HTMLInputElement).value
                        } else {
                            finalSubMatchTypeString = finalSubMatchTypeString+','+(element_ as HTMLInputElement).value
                        }
                        
                    }
                })

                console.log("Final string is ")
                console.log(finalSubMatchTypeString)
                setSubMatchTypes(finalSubMatchTypeString)
                break;
            case 'sub_game_type_name':
                console.log("sub types...")
                console.log(e.target.value)
                console.log(document.getElementsByName('sub_game_type_name'))
                
                // const subTypes_ = Array.from(document.getElementsByName('sub_match_type_name'))
                Array.from(document.getElementsByName('sub_game_type_name')).map((element_,i)=>{
                    console.log("element value is ")
                    console.log((element_ as HTMLInputElement).value)
                    if((element_ as HTMLInputElement).value != ''){
                        if(finalSubMatchTypeString==''){
                            finalSubMatchTypeString = (element_ as HTMLInputElement).value
                        } else {
                            finalSubMatchTypeString = finalSubMatchTypeString+','+(element_ as HTMLInputElement).value
                        }
                        
                    }
                })

                console.log("Final string is ")
                console.log(finalSubMatchTypeString)
                setSubGameTypes(finalSubMatchTypeString)
                    break;
			default:
				return null;

		}
    }

    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()

        let params = {}
        if(formFor=="group"){
            params = {group_name: name_, description: description}

            new Api().add_group(params).then(response=>{
                console.log("Getting data")
                console.log(response)
                console.log(response.status)
    
                if(response.status == 202){
    
                    console.log("successful")
    
                    console.log(response)
                    console.log(response.data.user_id)
    
                    setDescription('')
                    
                    handleClose()
                }
    
            }).catch(error => {
                console.log("Error returned is ... ")
                console.log(error)
            })

        } else if(formFor=="court"){
            params = {court_name: name_, description: description}

            new Api().add_court(params).then(response=>{
                console.log("Getting data")
                console.log(response)
                console.log(response.status)
    
                if(response.status == 202){
    
                    console.log("successful")
    
                    console.log(response)
                    console.log(response.data.user_id)
    
                    setDescription('')
                    
                    handleClose()
                }
    
            }).catch(error => {
                console.log("Error returned is ... ")
                console.log(error)
            })
        } else if(formFor=="match_type"){

            params = {match_type_name: name_, description: description, sub_type: subMatchTypes}

            new Api().add_match_type(params).then(response=>{
                console.log("Getting data")
                console.log(response)
                console.log(response.status)
    
                if(response.status == 202){
    
                    console.log("successful")
    
                    console.log(response)
                    console.log(response.data.user_id)
    
                    setDescription('')
                    setSubType([''])
                    setSubMatchTypes('')
                    handleClose()
                }
    
            }).catch(error => {
                console.log("Error returned is ... ")
                console.log(error)
            })
        } else if(formFor=="game_type"){

            params = {game_type_name: name_, description: description, sub_type: subGameTypes}

            new Api().add_game_type(params).then(response=>{
                console.log("Getting data")
                console.log(response)
                console.log(response.status)
    
                if(response.status == 202){
    
                    console.log("successful")
    
                    console.log(response)
                    console.log(response.data.user_id)
    
                    setDescription('')
                    setGameSubType([''])
                    setSubGameTypes('')
                    handleClose()
                }
    
            }).catch(error => {
                console.log("Error returned is ... ")
                console.log(error)
            })
        } else if(formFor=="coaching_type"){

            params = {coaching_type_name: name_, group_id: groupID}

            new Api().add_coaching_type(params).then(response=>{
                console.log("Getting data")
                console.log(response)
                console.log(response.status)
    
                if(response.status == 202){
    
                    console.log("successful")
    
                    console.log(response)
                    console.log(response.data.user_id)
    
                    handleClose()
                }
    
            }).catch(error => {
                console.log("Error returned is ... ")
                console.log(error)
            })
        } else if(formFor=="level_name"){

            params = {level_name: name_}

            new Api().add_player_level(params).then(response=>{
                console.log("Getting data")
                console.log(response)
                console.log(response.status)
    
                if(response.status == 202){
    
                    console.log("successful")
    
                    console.log(response)
                    console.log(response.data.user_id)
    
                    handleClose()
                }
    
            }).catch(error => {
                console.log("Error returned is ... ")
                console.log(error)
            })
        }
    }

    const addMoreSubTypes = () => {
        setSubType([...subType, ''])
    }

    const addMoreGameSubTypes = () => {
        setGameSubType([...gameSubType, ''])
    }


    return (
        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={submitForm}>
            <Modal.Body>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter description</Form.Label>
                    {
                        formFor == 'coaching_type' || formFor == 'level_name' ?
                        <Form.Control value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} as="textarea" name="description" rows={2} disabled/> :
                        <Form.Control value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} as="textarea" name="description" rows={2} />
                    }
                </Form.Group>
                {
                    formFor == 'match_type' ? 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sub Type</Form.Label>
                    {
                        subType.map((sub_,i)=>{
                            return <Row className="mt-1" key={i}>
                            <Col>
                                <Form.Control type="text" placeholder="Enter sub match type" name="sub_match_type_name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} /> 
                            </Col>
                            <Col>
                                {i==0 ? <BsPlusCircle size={30} onClick={addMoreSubTypes}/> : ''}
                            </Col>
                        </Row>
                        })
                    }
                </Form.Group> : formFor == 'game_type' ? 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sub Type</Form.Label>
                {
                    gameSubType.map((sub_,i)=>{
                        return <Row className="mt-1" key={i}>
                        <Col>
                            <Form.Control type="text" placeholder="Enter sub game type" name="sub_game_type_name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} /> 
                        </Col>
                        <Col>
                            {i==0 ? <BsPlusCircle size={30} onClick={addMoreGameSubTypes}/> : ''}
                        </Col>
                    </Row>
                    })
                }
            </Form.Group>
                : formFor == 'coaching_type' ?
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Select Group</Form.Label>
                    <Form.Select size='sm' aria-label="Default select example" name="group_id" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                            <option value=""></option>
                            {
                                configs_ ? configs_.Group.map((group_: any, i: any)=>{
                                    return <option key={i} value={group_.id}>{group_.group_name}</option>
                                }) : ''
                            }
                            
                    </Form.Select>
                </Form.Group>
                : ''
                }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    )
}

export default AdditionalItems
