import React, { useState, useEffect } from 'react'
import Navbar_ from './NavBar';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from './../resources/api'

import moment from 'moment';

type Props = {
    changeSomething: (changeParam: string)=>void
    regDetails: ()=>void
    selectedMemberDetails: any
    registrationDetails_: any
    configs_: any
    toggleAllowEdit: ()=>void
  }

const EditMemberBody: React.FC<Props> = ({toggleAllowEdit, configs_, registrationDetails_, regDetails, selectedMemberDetails, changeSomething}) => {
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
    const [emergencyName, setEmergencyName] = useState('')
    const [emergencyNumber, setEmergencyNumber] = useState('')
    const [emergencyAddress, setEmergencyAddress] = useState('')
    const [heartProblem, setHeartProblem] = useState(false)
    const [heartProblemHistory, setHeartProblemHistory] = useState(false)
    const [respiratoryProblem, setRespiratoryProblem] = useState(false)
    const [breathShortnessHistory, setBreathShortnessHistory] = useState(false)
    const [allowedStrenousExercise, setAllowedStrenousExercise] = useState(false)
    const [boneInjury, setBoneInjury] = useState(false)
    const [otherMedicalConditions, setOtherMedicalConditions] = useState(false)
    const [medicalConditionDescription, setMedicalConditionDescription] = useState('')
    const [savedUser, setSavedUser] = useState<any>([])
    const [modeOfPayment, setModeOfPayment] = useState('')
    const [receiver, setReceiver] = useState('')
    const [sender, setSender] = useState('')
    const [amount, setAmount] = useState('')
    const [amountPaid, setAmountPaid] = useState('')

    const [picture, setPicture] = useState<any>(null);
    const [imgData, setImgData] = useState<any>(null);

    const [showPreferences, setShowPreferences] = useState(false);
    const [showMedicalHistory, setShowMedicalHistory] = useState(false);
    const [showPaymentMode, setShowPaymentMode] = useState(false);

    const [preferencesValidated, setPreferencesValidated] = useState(false)

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

    useEffect(()=>{
        setSurname(selectedMemberDetails.last_name)
        setFirstname(selectedMemberDetails.first_name)
        setOthernames(selectedMemberDetails.other_names)
        setDob(selectedMemberDetails.dob)
        setGender(selectedMemberDetails.gender)
        setMobilenumber(selectedMemberDetails.mobile_number)
        setEmail(selectedMemberDetails.email)
        setResidentialaddress(selectedMemberDetails.address)
        setPlan(selectedMemberDetails.plan)
        setAccount(selectedMemberDetails.account_number)
        setLevel(selectedMemberDetails.level_name)
        setGametype(selectedMemberDetails.gamet_type_name)
        setTimeofplay(selectedMemberDetails.time_of_play)
        setEmergencyName(selectedMemberDetails.emergency_contact_name)
        setEmergencyNumber(selectedMemberDetails.emergency_contact_number)
        setEmergencyAddress(selectedMemberDetails.emergency_contact_address)
        setHeartProblem(selectedMemberDetails.heart_problem)
        setHeartProblemHistory(selectedMemberDetails.heart_problem_in_family_hist)
        setRespiratoryProblem(selectedMemberDetails.respiratory_problem)
        setBreathShortnessHistory(selectedMemberDetails.respiratory_problem_in_family_hist)
        setAllowedStrenousExercise(selectedMemberDetails.strenous_exercise_advice)
        setBoneInjury(selectedMemberDetails.bone_or_joint_injury)
        setOtherMedicalConditions(selectedMemberDetails.tennis_preventing_injury)
        setMedicalConditionDescription(selectedMemberDetails.other_injury_description)
        setModeOfPayment(selectedMemberDetails.mode_of_payment)
        setReceiver(selectedMemberDetails.receiver)
        setSender(selectedMemberDetails.sender)
        setAmount(selectedMemberDetails.amount)
        setAmountPaid(selectedMemberDetails.amount_paid)
    },[toggleAllowEdit])

    return (<Container className='formContentDiv view-member-body'>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'right', flexDirection: 'column', textAlign: 'right' }}>
                    <span><Button className="btn btn-secondary" onClick={toggleAllowEdit}>Save</Button></span>
                </Row>
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
                                registrationDetails_.Plans ? registrationDetails_.Plans.map((plan_: any,i: any)=>{
                                    console.log("Reg details are ...")
                                    console.log(plan)
                                    return <Form.Check
                                                key={i}
                                                inline
                                                label={plan_.plan_name}
                                                name="plan"
                                                type='radio'
                                                value={plan}
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
                        <Form.Group>
                            <Form.Label>Emergency Contact Name</Form.Label>
                            <Form.Control size='sm' value={emergencyName} type="text" placeholder="Enter Contact Name" name="em_name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                            <Form.Label>Emergency Contact Number</Form.Label>
                            <Form.Control size='sm' className="mt-1" value={emergencyNumber} type="text" placeholder="Enter Contact Number" name="em_number" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                            <Form.Label>Emergency Contact Address</Form.Label>
                            <Form.Control size='sm' className="mt-1" value={emergencyAddress} type="text" placeholder="Enter Contact Address" name="em_address" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
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
                        <hr/>
                        <Form.Group>
                            <Form.Label>Any heart problem?</Form.Label>
                            <Form.Select aria-label="Default select example" name="hearProblem" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value={0}>Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>History of Heart Problem in the family?</Form.Label>
                            <Form.Select aria-label="Default select example" name="heartProblemHistory" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value={0}>Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Any respiratory problem?</Form.Label>
                            <Form.Select aria-label="Default select example" name="respiratoryProblem" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value={0}>Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Any history of breath shortness in the family?</Form.Label>
                            <Form.Select aria-label="Default select example" name="breathShortnessHistory" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value={0}>Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ever been adviced not to do strenous exercise?</Form.Label>
                            <Form.Select aria-label="Default select example" name="allowedStrenousExercise" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value={0}>Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Any bone or thigh injury?</Form.Label>
                            <Form.Select aria-label="Default select example" name="boneInjury" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value={0}>Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Any Other medical conditions?</Form.Label>
                            <Form.Select aria-label="Default select example" name="otherMedicalConditions" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value={0}>Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What is this medical condition?</Form.Label>
                            <Form.Control as="textarea" name="medical_condition" value={medicalConditionDescription} rows={2} />
                        </Form.Group>
                        <hr/>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>)
}

export default EditMemberBody 