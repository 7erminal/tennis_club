import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Api from './../resources/api'

import moment from 'moment';

type Props = {
    registrationDetails_: any
    regDetails: ()=>void
    configs_: any
    changeSomething: (changeParam: string)=>void
}

const AddMemberForm: React.FC<Props> = ({changeSomething, configs_, regDetails, registrationDetails_}) => {

    const [surname, setSurname] = useState('')
    const [firstname, setFirstname] = useState('')
    const [othernames, setOthernames] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('n')
    const [mobilenumber, setMobilenumber] = useState('')
    const [email, setEmail] = useState('')
    const [residentialaddress, setResidentialaddress] = useState('')
    const [plan, setPlan] = useState('')
    const [account, setAccount] = useState('none')
    const [selectAccount, setSelectAccount] = useState(false)
    const [level, setLevel] = useState('')
    const [gametype, setGametype] = useState('')
    const [timeofplay, setTimeofplay] = useState('')

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
                console.log("plan checked is ")
                console.log(e.target.value)
                if(e.target.value=='01'){
                    setSelectAccount(false)
                    setAccount('none')
                } else {
                    setSelectAccount(true)
                }
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
                console.log("gender to be saved is ")
                console.log(gender)
				break;
            case "account":
                setAccount(e.target.value)
                break;
            case "level":
                setLevel(e.target.value)
                break;
            case "game_type":
                setGametype(e.target.value)
                break;
            case "timeofplay":
                setTimeofplay(e.target.value)
                break;
			default:
				return null
		}

		console.log(e.target.getAttribute('name'))
    }

    const dataCleanUp = () => {
        console.log("clean up data ")

        if(moment(dob, 'dd/mm/yyyy hh24:mi:ss').isValid()){
            console.log("valid")
        } else {
            console.log("date is invalid")
        }
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        dataCleanUp()

        const params = {
            email: email, 
            dob: dob, 
            gender: gender, 
            first_name: firstname, 
            surname: surname, 
            other_names: othernames, 
            mobile_number: mobilenumber, 
            plan: plan, 
            account: account,
            level: level,
            game_type: gametype,
            time_of_play: timeofplay,
        }

        console.log("sending ...")
        console.log(params)
        new Api().add_member(params).then(response=>{
            console.log("Getting data")
            console.log(response)
            console.log(response.status)

            if(response.status == 202){
                setSurname('')
                setFirstname('')
                setAccount('')
                setDob('')
                setEmail('')
                setMobilenumber('')
                setOthernames('')
                setPlan('')
                setSelectAccount(false)
                setResidentialaddress('')
                setGender('n')
                setGametype('')
                setTimeofplay('')
                regDetails()
                setLevel('')

                changeSomething('members')
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
                            <Form.Label>Other Names</Form.Label>
                            <Form.Control value={othernames} type="text" placeholder="Enter Other names" name="othernames" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control value={dob} type="date" placeholder="Select Date of Birth" name="dob" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select aria-label="Default select example" name="gender" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value={gender}>Select Gender</option>
                                <option value="m">Male</option>
                                <option value="f">Female</option>
                                <option value="n">Other</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control value={mobilenumber} type="text" placeholder="Enter mobile number" name="mobilenumber" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
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
                            <Form.Label>Residential Address with GPS Code</Form.Label>
                            <Form.Control value={residentialaddress} type="text" placeholder="Enter Residential Address" name="residentialaddress" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <div id="check-container">
                        <Form.Group className="mb-3">
                            <Form.Label>Select Plan</Form.Label>
                            <div className="mb-3">
                            {
                                registrationDetails_.Plans ? registrationDetails_.Plans.map((plan: any,i: any)=>{
                                    console.log("Reg details are ...")
                                    console.log(plan)
                                    return <Form.Check
                                                key={i}
                                                inline
                                                label={plan.plan_name}
                                                name="plan"
                                                type='radio'
                                                value={plan.plan_id}
                                                id={`inline-radio-${i}`}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)}
                                            />
                                }) : ''
                            }
                            </div>
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        </div>
                        <Form.Group className="my-3" controlId="formBasicEmail">
                            <Form.Label>Select Account</Form.Label>
                            <Form.Select aria-label="Default select example" name="account" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value="none">Select Account</option>
                                {
                                    registrationDetails_.Accounts && selectAccount ? registrationDetails_.Accounts.map((accountD: any, i: any) => {
                                        return <option key={i} value={accountD.account_number}>{ accountD.account_number }</option>
                                    }) : ''
                                }
                            </Form.Select>
                        </Form.Group>
                        <hr/>
                        <Form.Group className="my-3" controlId="formBasicEmail">
                            <Form.Label>Select Level</Form.Label>
                            <Form.Select aria-label="Default select example" name="level" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value="none">Select Level</option>
                                {
                                    configs_.PlayerLevels && configs_ ? configs_.PlayerLevels.map((level_: any, i: any) => {
                                        return <option key={i} value={level_.id}>{ level_.level_name }</option>
                                    }) : ''
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Select Game Type</Form.Label>
                            <Form.Select aria-label="Default select example" name="game_type" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value="none">Select Game Type</option>
                                {
                                    configs_.GameTypes && configs_ ? configs_.GameTypes.map((gameType: any, i: any) => {
                                        return <option key={i} value={gameType.id}>{ gameType.game_type_name }</option>
                                    }) : ''
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Select Preferred Time of Play</Form.Label>
                            <Form.Select aria-label="Default select example" name="timeofplay" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value="">Time of Play</option>
                                <option value="morning">Morning</option>
                                <option value="afternoon">Afternoon</option>
                                <option value="evening">Evening</option>
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

export default AddMemberForm