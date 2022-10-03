import React from 'react'
import ConfigurationsBody from '../widgets/ConfigurationsBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    getConfigDetails_: ()=>void
  }

const ConfigurationsPage: React.FC<Props> = ({regDetails, changeSomething, configs_, getConfigDetails_}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <ConfigurationsBody getConfigDetails_={getConfigDetails_} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default ConfigurationsPage
