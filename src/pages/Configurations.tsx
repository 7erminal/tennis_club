import React from 'react'
import ConfigurationsBody from '../widgets/ConfigurationsBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    getConfigDetails_: ()=>void
    getUser: (userid: string)=>void
  }

const ConfigurationsPage: React.FC<Props> = ({getUser, regDetails, changeSomething, configs_, getConfigDetails_}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <ConfigurationsBody getUser={getUser} getConfigDetails_={getConfigDetails_} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default ConfigurationsPage
