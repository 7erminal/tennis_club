import React from 'react'
import Navbar_ from './NavBar';
import ConfigurationsContent from './ConfigurationsContent';

type Props = {
    regDetails: ()=>void
    configs_: any
    getConfigDetails_: ()=>void
    getUser: (userid: string)=>void
  }

const ConfigurationsBody: React.FC<Props> = ({getUser, regDetails, configs_, getConfigDetails_}) => {
    return (
        <div className="main-panel">
            <Navbar_ getUser={getUser} regDetails={regDetails} />
            <ConfigurationsContent getConfigDetails_={getConfigDetails_} regDetails={regDetails} configs_={configs_} />
            </div>
    )
}

export default ConfigurationsBody
