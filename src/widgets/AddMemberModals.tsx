import moment from 'moment'
import React, {useState, ChangeEvent, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Api from './../resources/api'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom"

type Props = {
    // regDetails: ()=>void
    showDetails: boolean
    detailsValidated: boolean
    handleDetailsShow: ()=>void
    handleDetailsClose: ()=>void
    configs_: any
    registrationDetails_: any
    changeSomething: (changeParam: string)=>void
    set_detailsValidated: ()=>void
    toggleShowSuccess: ()=>void
    members: any
    showPaymentUpdate: boolean
    handlePaymentUpdateClose: ()=>void
    selectedMemberDetails: any
  }

const AddMemberModals: React.FC<Props> = ({selectedMemberDetails, handlePaymentUpdateClose, members, showPaymentUpdate, toggleShowSuccess, set_detailsValidated, detailsValidated, showDetails, handleDetailsShow, handleDetailsClose, changeSomething, configs_, registrationDetails_}) => {
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
    const [subscriptionStartDate, setSubscriptionStartDate] = useState(moment(new Date()).format('L'))
    const [subscriptionDuration, setSubscriptionDuration] = useState('')

    const [picture, setPicture] = useState<any>(null);
    const [imgData, setImgData] = useState<any>(null);

    const [showPreferences, setShowPreferences] = useState(false);
    const [showMedicalHistory, setShowMedicalHistory] = useState(false);
    const [showPaymentMode, setShowPaymentMode] = useState(false);

    const [preferencesValidated, setPreferencesValidated] = useState(false)

    const navigate = useNavigate();

    // useEffect(()=>{
    //     setReceiver(selectedMemberDetails.id)
    //     setPlan(selectedMemberDetails.plan_id)
    // },[])

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
            case 'em_name':
                setEmergencyName(e.target.value)
                break;
            case 'em_number':
                setEmergencyNumber(e.target.value)
                break;
            case 'em_address':
                setEmergencyAddress(e.target.value)
                break;
            case 'medical_condition':
                setMedicalConditionDescription(e.target.value)
                break;
            case 'receiver':
                setReceiver(e.target.value)
                break;
            case "cost":
                setAmount(e.target.value)
                break;
            case "amount_paid":
                setAmountPaid(e.target.value)
                break;
            case "sender":
                setSender(e.target.value)
                break;
            case "subscription_date":
                setSubscriptionStartDate(e.target.value)
                break;
			default:
				return null;

		}
    }

    const selectInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value)

        console.log("Select input ..")
        let trueChecker = false;

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
            case "hearProblem":
                trueChecker = (e.target.value === '1')
                setHeartProblem(trueChecker)
                break;
            case "heartProblemHistory":
                trueChecker = (e.target.value === '1')
                setHeartProblemHistory(trueChecker)
                break;
            case "respiratoryProblem":
                trueChecker = (e.target.value === '1')
                setRespiratoryProblem(trueChecker)
                break;
            case "breathShortnessHistory":
                trueChecker = (e.target.value === '1')
                setBreathShortnessHistory(trueChecker)
                break;
            case "allowedStrenousExercise":
                trueChecker = (e.target.value === '1')
                setAllowedStrenousExercise(trueChecker)
                break;
            case "boneInjury":
                trueChecker = (e.target.value === '1')
                setBoneInjury(trueChecker)
                break;
            case "otherMedicalConditions":
                trueChecker = (e.target.value === '1')
                setOtherMedicalConditions(trueChecker)
                break;
            case "mode_of_payment":
                console.log(e.target.value)
                setModeOfPayment(e.target.value)
                break;
            case "receiver":
                setReceiver(e.target.value)
                break;
            case "duration":
                setSubscriptionDuration(e.target.value)
                break;
			default:
				return null
		}

		console.log(e.target.getAttribute('name'))
    }

    const onChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files![0]) {
          console.log("picture: ", e.target.files);
          setPicture(files![0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(files![0]);
        }
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
            heart_problem: heartProblem,
            heart_problem_in_family_hist: heartProblemHistory,
            respiratory_problem: respiratoryProblem,
            respiratory_problem_in_family_hist: breathShortnessHistory,
            strenous_exercise_advice: allowedStrenousExercise,
            bone_or_joint_injury: boneInjury,
            tennis_preventing_injury: otherMedicalConditions,
            other_injury_description: medicalConditionDescription,
            picture: picture,
            emergency_contact_name: emergencyName,
            emergency_contact_number: emergencyNumber,
            emergency_contact_address: emergencyAddress,
            address: residentialaddress,
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
                setSelectAccount(false)
                setResidentialaddress('')
                setGender('n')
                setGametype('')
                setTimeofplay('')
                setLevel('')

                changeSomething('members')

                handleMedicalHistoryClose()
                toggleShowSuccess()
                handlePaymentModeShow()

                setSavedUser(response.data)

                // navigate('/add-payment')
            }

        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }



    const submitPayment = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let s_plan = plan
        let s_receiver = receiver

        console.log("Saved user received")
        console.log(savedUser)

        savedUser!== 'undefined' && savedUser.length > 0 ? s_plan = plan : plan == '' || plan == 'undefined' || plan == null ? s_plan = selectedMemberDetails.plan_id : s_plan = plan 
        savedUser!== 'undefined' && savedUser.length > 0 ? s_receiver = savedUser.id : receiver == '' || receiver == 'undefined' || receiver == null ? s_receiver = selectedMemberDetails.id : s_receiver = receiver 
        
        savedUser!== 'undefined' && savedUser.length > 0 ?  console.log("passed") : ''

        console.log("payment data submitted ... ")
        console.log(savedUser.id)
        console.log(s_receiver)
        console.log(savedUser.length)
        console.log(plan)
        const params = {
            payment_for: s_receiver,
            sender: sender,
            receiver: s_receiver,
            amount: amount,
            amount_paid: amountPaid,
            mode_of_payment: modeOfPayment,
            subscription_start_date: subscriptionStartDate,
            subscription_duration: subscriptionDuration,
            plan: s_plan, 
        }

        console.log(params)
        console.log(selectedMemberDetails)

        // new Api().add_payment(params).then(response=>{
        //     console.log("Getting data")
        //     console.log(response)
        //     console.log(response.status)

        //     if(response.status == 202){
        //         toggleShowSuccess()
        //         setPlan('')
        //         setAmount('')
        //         setSubscriptionStartDate(moment(new Date()).format('L'))

        //         // navigate('/add-payment')

        //         setSavedUser([])
        //         handlePaymentModeClose()
        //         setReceiver('')
        //     }

        // }).catch(error => {
        //     console.log("Error returned is ... ")
        //     console.log(error)
        // })
    }

    const goToPreferences = (event: React.FormEvent<HTMLFormElement>) => {
     
        const form = event.currentTarget;

        event.preventDefault()
        event.stopPropagation();

        console.log("Validating...")

        if (form.checkValidity() === true) {
            console.log("Valid")

            handleDetailsClose()
            handlePreferencesShow() 
            setPreferencesValidated(false);
        } else {
            set_detailsValidated()
        }

        console.log("Invalid")
    }

    const goToMedicalHistory = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget;

        if (form.checkValidity() === true) {

            handlePreferencesClose()
            handleMedicalHistoryShow()
          } else {
            setPreferencesValidated(true);
          }
    }

    const proceedToPayment = () => {
        handlePaymentUpdateClose()
        handlePaymentModeShow()
    }

    const handlePreferencesClose = () => setShowPreferences(false);
    const handlePreferencesShow = () => setShowPreferences(true);

    const handleMedicalHistoryClose = () => setShowMedicalHistory(false);
    const handleMedicalHistoryShow = () => setShowMedicalHistory(true);
    
    const handlePaymentModeClose = () => setShowPaymentMode(false);
    const handlePaymentModeShow = () => setShowPaymentMode(true);

    return (<>
        <Modal style={{backgroundColor: 'white'}} fullscreen={true} show={showDetails} onHide={handleDetailsClose}>
            <Modal.Header closeButton style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Modal.Title>Enter Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Col lg={7} md={9} sm={11} xs={11}>
                        <Form onSubmit={goToPreferences} noValidate validated={detailsValidated}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control value={surname} type="text" placeholder="Enter Surname" name="surname" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                                {/* <Form.Text className="text-muted">
                                    We will never share your email with anyone else.
                                </Form.Text> */}
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                <Form.Control.Feedback type="invalid">
                                    Please enter your surname.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control value={firstname} type="text" placeholder="Enter First Name" name="firstname" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                                {/* <Form.Text className="text-muted">
                                    We will never share your email with anyone else.
                                </Form.Text> */}
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                <Form.Control.Feedback type="invalid">
                                    Please enter first name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Other Names</Form.Label>
                                <Form.Control value={othernames} type="text" placeholder="Enter Other names" name="othernames" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                                {/* <Form.Text className="text-muted">
                                    We will never share your email with anyone else.
                                </Form.Text> */}
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control value={dob} type="date" placeholder="Select Date of Birth" name="dob" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                                {/* <Form.Text className="text-muted">
                                    We will never share your email with anyone else.
                                </Form.Text> */}
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                <Form.Control.Feedback type="invalid">
                                    Please enter date of birth.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select aria-label="Default select example" name="gender" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)} required>
                                    <option value={gender}>Select Gender</option>
                                    <option value="m">Male</option>
                                    <option value="f">Female</option>
                                    <option value="n">Other</option>
                                </Form.Select>
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                <Form.Control.Feedback type="invalid">
                                    Please select a gender.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control value={mobilenumber} type="text" placeholder="Enter mobile number" name="mobilenumber" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                                {/* <Form.Text className="text-muted">
                                    We will never share your email with anyone else.
                                </Form.Text> */}
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                <Form.Control.Feedback type="invalid">
                                    Please enter a mobile number.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={email} type="email" placeholder="Enter email" name="email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                                {/* <Form.Text className="text-muted">
                                    We will never share your email with anyone else.
                                </Form.Text> */}
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                <Form.Control.Feedback type="invalid">
                                    Please enter an email address.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Residential Address with GPS Code</Form.Label>
                                <Form.Control value={residentialaddress} type="text" placeholder="Enter Residential Address" name="residentialaddress" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                                {/* <Form.Text className="text-muted">
                                    We will never share your email with anyone else.
                                </Form.Text> */}
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formFileSm" className="mb-3">
                                <Form.Label>Upload a picture</Form.Label>
                                <input type="file" name="picture" onChange={onChangePicture} />
                            </Form.Group>
                            <div className="previewProfilePic">
                                <img className="playerProfilePic_home_tile" src={imgData} />
                            </div>
                            <hr/>
                            <div id="check-container">
                            <Form.Group className="mb-3">
                                <Form.Label>Membership Type</Form.Label>
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
                                                    required
                                                />
                                    }) : ''
                                }
                                </div>
                                {/* <Form.Text className="text-muted">
                                    We will never share your email with anyone else.
                                </Form.Text> */}
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                <Form.Control.Feedback type="invalid">
                                    Please select a plan.
                                </Form.Control.Feedback>
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
                                <Form.Label>Emergency Contact</Form.Label>
                                <Form.Control size='sm' value={emergencyName} type="text" placeholder="Enter Contact Name" name="em_name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                                <Form.Control size='sm' className="mt-1" value={emergencyNumber} type="text" placeholder="Enter Contact Number" name="em_number" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                                <Form.Control size='sm' className="mt-1" value={emergencyAddress} type="text" placeholder="Enter Contact Address" name="em_address" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            </Form.Group>
                        
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                            <Button variant="primary" type="submit">
                                Next
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
      </Modal>


      <Modal fullscreen={true} show={showPreferences} onHide={handlePreferencesClose}>
        <Modal.Header closeButton style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Modal.Title>What are their preferences?</Modal.Title>
            </Modal.Header>
         <Modal.Body>
            <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Col lg={7} md={9} sm={11} xs={11}>
                    <Form onSubmit={goToMedicalHistory} noValidate validated={preferencesValidated}>
                        <Form.Group className="my-3" controlId="formBasicEmail">
                            <Form.Label>Select Level</Form.Label>
                            <Form.Select required aria-label="Default select example" name="level" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value="">Select Level</option>
                                {
                                    configs_.PlayerLevels && configs_ ? configs_.PlayerLevels.map((level_: any, i: any) => {
                                        return <option key={i} value={level_.id}>{ level_.level_name }</option>
                                    }) : ''
                                }
                            </Form.Select>
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            <Form.Control.Feedback type="invalid">
                                Please select a level.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Select Game Type</Form.Label>
                            <Form.Select required aria-label="Default select example" name="game_type" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value="">Select Game Type</option>
                                {
                                    configs_.GameTypes && configs_ ? configs_.GameTypes.map((gameType: any, i: any) => {
                                        return <option key={i} value={gameType.id}>{ gameType.game_type_name }</option>
                                    }) : ''
                                }
                            </Form.Select>
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            <Form.Control.Feedback type="invalid">
                                Please select game type.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Select Preferred Time of Play</Form.Label>
                            <Form.Select required aria-label="Default select example" name="timeofplay" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value="">Time of Play</option>
                                <option value="morning">Morning</option>
                                <option value="afternoon">Afternoon</option>
                                <option value="evening">Evening</option>
                            </Form.Select>
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            <Form.Control.Feedback type="invalid">
                                Please select time of play.
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                            Next
                        </Button>
                    </Form>
                </Col>
            </Row>
         </Modal.Body>
      </Modal>


      <Modal fullscreen={true} show={showMedicalHistory} onHide={handleMedicalHistoryClose}>
        <Modal.Header closeButton>
            <Modal.Title>Medical History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Col lg={7} md={9} sm={11} xs={11}>
                    <Form onSubmit={submitForm}>
                        <Form.Group>
                            <Form.Label>Any heart problem?</Form.Label>
                            <Form.Select aria-label="Default select example" name="hearProblem" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)} required>
                                <option value="">Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>History of Heart Problem in the family?</Form.Label>
                            <Form.Select aria-label="Default select example" name="heartProblemHistory" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)} required>
                                <option value="">Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Any respiratory problem?</Form.Label>
                            <Form.Select aria-label="Default select example" name="respiratoryProblem" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)} required>
                                <option value="">Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Any history of breath shortness in the family?</Form.Label>
                            <Form.Select aria-label="Default select example" name="breathShortnessHistory" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)} required>
                                <option value="">Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ever been adviced not to do strenous exercise?</Form.Label>
                            <Form.Select aria-label="Default select example" name="allowedStrenousExercise" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)} required>
                                <option value="">Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Any bone or thigh injury?</Form.Label>
                            <Form.Select aria-label="Default select example" name="boneInjury" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)} required>
                                <option value="">Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Any Other medical conditions?</Form.Label>
                            <Form.Select aria-label="Default select example" name="otherMedicalConditions" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)} required>
                                <option value="">Select</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What is this medical condition?</Form.Label>
                            {
                                otherMedicalConditions == true ?
                                <Form.Control as="textarea" name="medical_condition" value={medicalConditionDescription} rows={2} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                                :
                                <Form.Control as="textarea" name="medical_condition" value={medicalConditionDescription} rows={2} disabled />
                            }
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
        </Modal.Body>
      </Modal>

      <Modal show={showPaymentMode} onHide={handlePaymentModeClose} backdrop="static" centered>
        <Modal.Header closeButton>
            <Modal.Title>Select Mode of Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={submitPayment}>
                <Form.Select name='mode_of_payment' aria-label="Default select example" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                    <option value="">Select Mode of payment</option>
                    <option value='cash'>Cash</option>
                    <option value='momo'>Momo</option>
                </Form.Select>
                {
                    modeOfPayment == 'cash' ?
                    <>
                    <Form.Group className="my-3" >
                        <Form.Select aria-label="Default select example" name="receiver" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                            <option value={savedUser.id ? savedUser.id : receiver}>{savedUser.first_name ? savedUser.first_name : selectedMemberDetails.first_name} {savedUser.last_name ? savedUser.last_name : selectedMemberDetails.last_name}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Duration</Form.Label>
                            <Form.Select aria-label="Default select example" name="duration" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)} required>
                                <option value="">Select duration</option>
                                <option value={1}>1 Month</option>
                                <option value={2}>2 Months</option>
                                <option value={3}>3 Months</option>
                                <option value={4}>4 Months</option>
                                <option value={5}>5 Months</option>
                                <option value={6}>6 Months</option>
                                <option value={12}>1 Year</option>
                                <option value={24}>2 Years</option>
                                <option value={36}>3 Years</option>
                                <option value={48}>4 Years</option>
                            </Form.Select>
                        </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Charge</Form.Label>
                        <Form.Control value={amount} type="text" placeholder="Enter cost" name="cost" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                        {/* <Form.Text className="text-muted">
                            We will never share your email with anyone else.
                        </Form.Text> */}
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Amount paid</Form.Label>
                        <Form.Control value={amountPaid} type="text" placeholder="Enter amount" name="amount_paid" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                        {/* <Form.Text className="text-muted">
                            We will never share your email with anyone else.
                        </Form.Text> */}
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Subscription Start Date</Form.Label>
                        <Form.Control value={subscriptionStartDate} type="date" placeholder="Enter subscription start date" name="subscription_date" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                        {/* <Form.Text className="text-muted">
                            We will never share your email with anyone else.
                        </Form.Text> */}
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Button className="btn btn-primary" type="submit">Submit</Button>
                    </> : modeOfPayment == 'momo' ?
                        <>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Duration</Form.Label>
                            <Form.Select aria-label="Default select example" name="duration" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)} required>
                                <option value="">Select duration</option>
                                <option value={1}>1 Month</option>
                                <option value={2}>2 Months</option>
                                <option value={3}>3 Months</option>
                                <option value={4}>4 Months</option>
                                <option value={5}>5 Months</option>
                                <option value={6}>6 Months</option>
                                <option value={12}>1 Year</option>
                                <option value={24}>2 Years</option>
                                <option value={36}>3 Years</option>
                                <option value={48}>4 Years</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Charge</Form.Label>
                            <Form.Control value={amount} type="text" placeholder="Enter charge" name="cost" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Sent from</Form.Label>
                            <Form.Control value={sender} type="text" placeholder="Sender" name="sender" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Paid by</Form.Label>
                            <Form.Select aria-label="Default select example" name="receiver" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                <option value={savedUser.id ? savedUser.id : receiver}>{selectedMemberDetails.first_name} {selectedMemberDetails.last_name}</option>
                            </Form.Select>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Amount Paid</Form.Label>
                            <Form.Control value={amountPaid} type="text" placeholder="Amount paid" name="amount_paid" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Subscription Start Date</Form.Label>
                            <Form.Control value={subscriptionStartDate} type="date" placeholder="Enter subscription start date" name="subscription_date" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                            {/* <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text> */}
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Button className="btn btn-primary" type="submit">Submit</Button>
                        </>
                    : ''
                }
            </Form>
        </Modal.Body>
    </Modal>

    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showPaymentUpdate}
      onHide={handlePaymentUpdateClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Subscription
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Name</h5>
        <p>
            {selectedMemberDetails.first_name} {selectedMemberDetails.last_name}
        </p>
        <h5>Account Number</h5>
        <p>
        {selectedMemberDetails.account_number}
        </p>
        <h5>Date Joined</h5>
        <p>
            {moment(selectedMemberDetails.created_at).format('DD-MM-YYYY')}
        </p>
        <h5>Current Membership start date</h5>
        <p>
            {selectedMemberDetails.subscription_start_date}
        </p>
        <h5>Current Membership end date</h5>
        <p>
            {selectedMemberDetails.subscription_end_date}
        </p>
        <Button type="button" className="btn btn-info" onClick={proceedToPayment}>Proceed</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handlePaymentUpdateClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>)
}

export default AddMemberModals
