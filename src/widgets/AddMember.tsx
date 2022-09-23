import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Api from './../resources/api'

type Props = {
    registrationDetails_: any
}

const AddMemberForm: React.FC<Props> = ({registrationDetails_}) => {

    const [surname, setSurname] = useState('')
    const [firstname, setFirstname] = useState('')
    const [othernames, setOthernames] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [mobilenumber, setMobilenumber] = useState('')
    const [email, setEmail] = useState('')
    const [residentialaddress, setResidentialaddress] = useState('')
    const [plan, setPlan] = useState('')

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)

		console.log(e.target.getAttribute('name'))

		switch(e.target.getAttribute('name')){
			case 'email':
				setEmail(e.target.value)
				break;
			case 'dob':
				setDob(e.target.value)
				break;
			case 'gender':
				setGender(e.target.value)
				break;
			case 'surname':
				setSurname(e.target.value)
				break;
            case 'firstname':
                setFirstname(e.target.value)
                break;
            case 'othernames':
                setOthernames(e.target.value)
                break;
            case 'mobilenumber':
                setMobilenumber(e.target.value)
                break;
			case 'residentialaddress':
				setResidentialaddress(e.target.value)
				break;
            case 'plan':
                setPlan(e.target.value)
                break;
			default:
				return null;

		}
    }

    const selectInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value)

		switch(e.target.getAttribute('name')){
			case "gender":
				setGender(e.target.value)
				break;
			default:
				return null
		}

		console.log(e.target.getAttribute('name'))
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const params = {email: email, dob: dob, gender: gender, first_name: firstname, surname: surname, other_names: othernames, mobile_number: mobilenumber, plan: plan}

        console.log("sending ...")
        console.log(params)
        new Api().add_member(params).then(response=>{
            console.log("Getting data")
            console.log(response)
            console.log(response.status)

            // if(response.status == 200){


            // }

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
                            <Form.Control type="text" placeholder="Enter Surname" name="surname" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" name="firstname" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Other Names</Form.Label>
                            <Form.Control type="text" placeholder="Enter Other names" name="othernames" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Select Date of Birth" name="dob" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Gender</Form.Label>
                            <select aria-label="Default select example" name="gender" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option defaultValue="n">Select Gender</option>
                                <option value="m">Male</option>
                                <option value="f">Female</option>
                                <option value="n">Other</option>
                            </select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter mobile number" name="mobilenumber" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Residential Address with GPS Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter Residential Address" name="residentialaddress" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Select Plan</Form.Label>
                            <div key={`inline-radio`} className="mb-3">
                            {
                                registrationDetails_.map((regD: any,i: any)=>{
                                    console.log("Reg details are ...")
                                    console.log(regD)
                                    return <Form.Check
                                                key={i}
                                                inline
                                                label={regD.plan_name}
                                                name="plan"
                                                type='radio'
                                                id={`inline-radio-1`}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)}
                                            />
                                })
                            }
                            </div>
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
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

export default AddMemberForm