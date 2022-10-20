import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsPlusCircle } from "react-icons/bs";
import AddGame from "./AddGameModal"
import { Link } from "react-router-dom"
import moment from 'moment'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    members: any
    games: any
    viewType_: string
    viewDetails: (module: string, modleid: string)=>void
  }

const SessionsGames: React.FC<Props> = ({viewDetails, viewType_, changeSomething, games, regDetails, configs_, members}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const action_ = () => {
        regDetails()
        handleShow()
    }

    return (
            <div className='membersContentDiv'>
                <AddGame changeSomething={changeSomething} members={members} configs_={configs_} show={show} handleClose={handleClose}/>
                <div className='sessionTableContent'>
                    {
                        viewType_ == 'update' ?
                        <Container className="add-member-button-pane">
                            <Row>
                                <Col>
                                    <a onClick={action_} className='add-member-button'>
                                        <BsPlusCircle size={50} /> <span style={{fontSize: '22px'}} >Add Game</span>
                                    </a>
                                </Col>
                            </Row>
                        </Container> : 
                        <Container>
                            <Row>
                                <Col>
                                    <h4>Upcoming Games</h4>
                                </Col>
                            </Row>
                        </Container>
                    }
                    
                    <Table bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Date and Time</th>
                            <th>Game</th>
                            <th>Match</th>
                            <th>Match Up</th>
                            <th>Status</th>
                            {
                                viewType_ == 'update' ?
                                <th>View details</th> :
                                ''
                            }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                games ? games.map((game: any, i: any)=>{
                                    return <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{moment(game.start_time).format("YYYY-MM-DD HH:mm:ss")}</td>
                                        <td>{game.game_type}</td>
                                        <td>{game.match_type}</td>
                                        <td>{game.opponent_1_first_name} {game.opponent_1_last_name} vs {game.opponent_2_first_name} {game.opponent_2_last_name}</td>
                                        <td>{game.played == 'True' ? 'Played' : 'Pending'}</td>
                                        {
                                            viewType_ == 'update' ?
                                            <td>
                                                <Link className='btn btn-success btn-sm' to='/view-game-details' onClick={()=>viewDetails('game',game.id)}>
                                                    View Details
                                                </Link>
                                            </td> :
                                            ''
                                        }
                                    </tr>
                                }) : <tr></tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
    )
}

export default SessionsGames
