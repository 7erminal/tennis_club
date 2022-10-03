import React from 'react'
import Navbar_ from './NavBar';
import ConfigurationsContent from './ConfigurationsContent';

type Props = {
    regDetails: ()=>void
    configs_: any
    getConfigDetails_: ()=>void
  }

const ConfigurationsBody: React.FC<Props> = ({regDetails, configs_, getConfigDetails_}) => {
    return (
        <div className="main-panel">
            <Navbar_ regDetails={regDetails} />
            <ConfigurationsContent getConfigDetails_={getConfigDetails_} regDetails={regDetails} configs_={configs_} />
            </div>
    )
}

export default ConfigurationsBody
