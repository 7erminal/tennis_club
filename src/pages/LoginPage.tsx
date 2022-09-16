import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom"

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loader_, setLoader_] = useState(false)
    const [error_, setError_] = useState('')
    const [showError_, setShowError_] = useState(false)

    const users = [['super-admin','admin']]

    const login_ = () => {

        users.map((user,i)=>{
            console.log("comparing "+username+" and password "+password)
            console.log("with "+user[0]+" : "+user[1])
            user[0] == username ? user[1] == password ? navigate('/dashboard') : showError('Invalid credentials') : showError('Username does not exist')
        }) 
    }

    const showError = (serror: React.SetStateAction<string>) => {
        setShowError_(true)
        setError_(serror)
    }

    return (
        <div className='loginDiv'>
            <div className='loginFormDiv centerDiv'>
                <div style={{justifyContent: 'center', display: 'flex'}}>
                    <Container>
                        <Row>
                            <Col lg={6} md={6}><h1 style={{float:'right'}}>Tennis</h1></Col>
                            <Col lg={6} md={6}></Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={6}></Col>
                            <Col lg={6} md={6}><h1>Club</h1></Col>
                        </Row>
                    </Container>
                </div>
                <Card className='loginCard'>
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
        </div>
    )
}

export default LoginPage
