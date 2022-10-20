import React from 'react'
import SessionGames from './SessionGames'
import SessionCoaching from './SessionCoaching'
import SessionsProtraining from './SessionProtraining';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddGroup from './AddGroup';
import AddCourt from './AddCourt';
import AddMatchType from './AddMatchType';
import AddGameType from './AddGameType';
import AddCoachingType from './AddCoachingType';
import AddPlayerLevel from './AddPlayerLevel';

type Props = {
    regDetails: ()=>void
    configs_: any
    getConfigDetails_: ()=>void
  }

const ConfigurationsContent: React.FC<Props> = ({getConfigDetails_, regDetails, configs_}) => {
    return (
        <div className="contentCustom-configs">
            <Container>
                <div className='session-content-ab'>
                    <Row>
                        <Col md={6} sm={12} className="my-2">
                            <AddGroup getConfigDetails_={getConfigDetails_} configs_={configs_}/>
                        </Col>
                        <Col md={6} sm={12} className="my-2">
                            <AddCourt getConfigDetails_={getConfigDetails_} configs_={configs_}/>
                        </Col>
                        <Col md={6} sm={12} className="my-2">
                            <AddMatchType getConfigDetails_={getConfigDetails_} configs_={configs_}/>
                        </Col>
                        <Col md={6} sm={12} className="my-2">
                            <AddGameType getConfigDetails_={getConfigDetails_} configs_={configs_}/>
                        </Col>
                        <Col md={6} sm={12} className="my-2">
                            <AddCoachingType getConfigDetails_={getConfigDetails_} configs_={configs_}/>
                        </Col>
                        <Col md={6} sm={12} className="my-2">
                            <AddPlayerLevel getConfigDetails_={getConfigDetails_} configs_={configs_}/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ConfigurationsContent
