import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    members: any
  }

const AddPaymentsContent: React.FC<Props> = ({viewDetails, members, changeSomething, regDetails, configs_}) => {
    const [viewType, setViewType] = useState('update')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const [receivedBy, setReceivedBy] = useState('')
    const [sentTo, setSentTo] = useState('')

    const selectInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        switch(e.target.value){
            case "cash":
				setType(e.target.value)
				break;
            case "momo":
                setType(e.target.value)
                break;
            default:
                return null
        }
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const params = {

        }
    }

    return (
        <div className="contentCustom-session">
            <div className='session-content-ab'>
                <Card body>
                    <Form.Select aria-label="Default select example">
                        <option>Select Mode of payment</option>
                        <option value='cash'>Cash</option>
                        <option value='momo'>Momo</option>
                    </Form.Select>
                    {
                        type == 'cash' ?
                        <Form>
                            <Table bordered hover>
                                <tr>
                                    <td>Amount</td>
                                    <td>Received By</td>
                                    <td><Button className='btn btn-primary' type='button'>Generate receipt</Button></td>
                                </tr>
                                <tr>
                                    <td><Form.Control type="text" placeholder="Enter amount" /></td>
                                    <td>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select User</option>
                                            {
                                                members ? members.map((member: any, i: any)=>{
                                                    <option value={member.id}>{member.first_name} {member.last_name}</option>
                                                }) : ''
                                            }
                                        </Form.Select>
                                    </td>
                                    <td></td>
                                </tr>
                            </Table>
                        </Form> :
                        <Form>
                            <Table bordered hover>
                                <tr>
                                    <td>Amount</td>
                                    <td>Momo sent from</td>
                                    <td>Momo sent to</td>
                                    <td><Button className='btn btn-primary' type='button'>Generate receipt</Button></td>
                                </tr>
                                <tr>
                                    <td><Form.Control type="text" placeholder="Enter amount" /></td>
                                    <td>
                                        <Form.Control type="text" placeholder="Enter amount" />
                                    </td>
                                    <td>
                                        <Form.Control type="text" placeholder="Enter amount" />
                                    </td>
                                    <td></td>
                                </tr>
                            </Table>
                        </Form>
                    }
                </Card>
            </div>
        </div>
    )
}

export default AddPaymentsContent
