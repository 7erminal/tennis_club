import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Api from './../resources/api'

import moment from 'moment';

type Props = {
    regDetails: ()=>void
    configs_: any
    changeSomething: (changeParam: string)=>void
}

const AddUserForm: React.FC<Props> = ({changeSomething, configs_, regDetails}) => {

    const [surname, setSurname] = useState('')
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [adminUser, setAdminUser] = useState('')

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)

		console.log(e.target.getAttribute('name'))

		switch(e.target.getAttribute('name')){
			case 'email':
				setEmail(e.target.value)
				break;
			case 'password':
				setPassword(e.target.value)
				break;
			case 'surname':
				setSurname(e.target.value)
				break;
            case 'firstname':
                setFirstname(e.target.value)
                break;
			default:
				return null;

		}
    }

    const selectInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value)

		switch(e.target.getAttribute('name')){
			case "admin":
				setAdminUser(e.target.value)
                console.log("admin to be saved is ")
                console.log(adminUser)
				break;
			default:
				return null
		}

		console.log(e.target.getAttribute('name'))
    }


    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const params = {
            email: email, 
            password: password,  
            first_name: firstname, 
            surname: surname, 
            is_superuser: adminUser,
        }

        console.log("sending ...")
        console.log(params)
        new Api().add_user(params).then(response=>{
            console.log("Getting data")
            console.log(response)
            console.log(response.status)

            if(response.status == 202){
                setSurname('')
                setFirstname('')
                setPassword('')
                setAdminUser('')
                setEmail('')
                regDetails()

                changeSomething('users')
            }

        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    return (
        <Container className='formContentDiv'>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={8} lg={7}>
                    <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control value={surname} type="text" placeholder="Enter Surname" name="surname" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control value={firstname} type="text" placeholder="Enter First Name" name="firstname" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} type="email" placeholder="Enter email" name="email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} type="password" placeholder="Enter Password" name="password" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Is Admin</Form.Label>
                            <Form.Select aria-label="Default select example" name="admin" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value="False">Select Option</option>
                                <option value="True">Yes</option>
                                <option value="False">No</option>
                            </Form.Select>
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddUserForm