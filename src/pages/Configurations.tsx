import React from 'react'
import ConfigurationsBody from '../widgets/ConfigurationsBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    getConfigDetails_: ()=>void
    getMember: (userid: string)=>void
    essentials: any
  }

const ConfigurationsPage: React.FC<Props> = ({essentials, getMember, regDetails, changeSomething, configs_, getConfigDetails_}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething}/>
            <ConfigurationsBody getMember={getMember} getConfigDetails_={getConfigDetails_} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default ConfigurationsPage
