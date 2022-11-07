import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom"
import Api from './../resources/api'

type Props = {
    setLoggedInUser_: (username_: string)=>void
}

const LoginPage: React.FC<Props> = ({setLoggedInUser_}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loader_, setLoader_] = useState(false)
    const [error_, setError_] = useState('')
    const [showError_, setShowError_] = useState(false)

    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showEnterCode, setShowEnterCode] = useState(false)
    const [showSetNewPassword, setShowSetNewPassword] = useState(false)

    const handleForgotPasswordClose = () => setShowForgotPassword(false);
    const handleForgotPasswordShow = () => setShowForgotPassword(true);

    const handleEnterCodeClose = () => setShowEnterCode(false);
    const handleEnterCodeShow = () => setShowEnterCode(true);

    const handleSetNewPasswordClose = () => setShowSetNewPassword(false);
    const handleSetNewPasswordShow = () => setShowSetNewPassword(true);

    
    const users = [['super-admin','admin']]

    const login_ = () => {

        // users.map((user,i)=>{
        //     console.log("comparing "+username+" and password "+password)
        //     console.log("with "+user[0]+" : "+user[1])
        //     user[0] == username ? user[1] == password ? navigate('/dashboard') : showError('Invalid credentials') : showError('Username does not exist')
        // }) 

        const params = {
            username: username, 
            password: password,  
        }

        new Api().login(params).then(response=>{
            console.log("Getting data")
            console.log(response)
            console.log(response.status)

            if(response.status == 202){
               console.log("Successful login")
               setLoggedInUser_(username)
               navigate('/dashboard')
            }

        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    const showError = (serror: React.SetStateAction<string>) => {
        setShowError_(true)
        setError_(serror)
    }

    return (
        <div className='loginDiv'>
            <div className='loginFormDiv centerDiv'>
                <div style={{justifyContent: 'center', display: 'flex', fontFamily: 'Copperplate'}}>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} xs={12} sm={12}><h1 style={{float:'right'}}>Reach</h1></Col>
                            <Col lg={6} md={6} xs={12} sm={12}></Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={6} xs={12} sm={12}></Col>
                            <Col lg={6} md={6} xs={12} sm={12}><h1>Tennis</h1></Col>
                        </Row>
                    </Container>
                </div>
                <Card className='loginCard'>
                    <Row style={{display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '10px', paddingBottom: '5px'}}>
                        <span>Login</span>
                    </Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            {/* <Form.Control type="username" placeholder="Enter username" /> */}
                            <input onChange={(e)=>setUsername(e.target.value)} type='text' className="loginTextBox" value={username}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            {/* <Form.Control type="password" placeholder="Password" /> */}
                            <input type='password' onChange={(e)=>setPassword(e.target.value)} className="loginTextBox" value={password}/>
                        </Form.Group>

                        <Row style={{paddingTop: '5px', paddingBottom: '5px'}}>
                            <small><Button variant="link" onClick={handleForgotPasswordShow}>Forgot password?</Button></small>
                        </Row>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}

                        {
                            showError_ ?
                            <div style={{paddingTop: '6px', paddingBottom: '5px'}}>
                                <span style={{color: 'red'}}>{error_}</span>
                            </div>
                            : ''
                        }
                        <Button variant="primary" onClick={login_}>
                            Submit
                        </Button>
                    </Form>
                </Card>
            </div>
            <div className='loginImageDiv'>
            </div>

            <Modal show={showForgotPassword} onHide={handleForgotPasswordClose}>
                <Modal.Header closeButton>
                <Modal.Title>Forgot password?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Please enter your email address. We would send you a code which you can use to reset your password.</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We will never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleForgotPasswordClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleForgotPasswordClose}>
                    Send Code
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEnterCode} onHide={handleEnterCodeClose}>
                <Modal.Header closeButton>
                <Modal.Title>Forgot password?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Please enter the code that was sent to your email address.</Form.Label>
                            <Form.Control type="text" placeholder="Enter code" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleEnterCodeClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEnterCodeClose}>
                    Send Code
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSetNewPassword} onHide={handleSetNewPasswordClose}>
                <Modal.Header closeButton>
                <Modal.Title>Set your new password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter your new password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Repeat password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password again" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleSetNewPasswordClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSetNewPasswordClose}>
                    Send Code
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LoginPage
