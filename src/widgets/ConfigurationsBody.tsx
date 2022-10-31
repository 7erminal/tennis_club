import React from 'react'
import Navbar_ from './NavBar';
import ConfigurationsContent from './ConfigurationsContent';

type Props = {
    regDetails: ()=>void
    configs_: any
    getConfigDetails_: ()=>void
    getMember: (memberid: string)=>void
  }

const ConfigurationsBody: React.FC<Props> = ({getMember, regDetails, configs_, getConfigDetails_}) => {
    return (
        <div className="main-panel">
            <Navbar_ getMember={getMember} regDetails={regDetails} />
            <ConfigurationsContent getConfigDetails_={getConfigDetails_} regDetails={regDetails} configs_={configs_} />
            </div>
    )
}

export default ConfigurationsBody
