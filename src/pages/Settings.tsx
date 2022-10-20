import React from 'react'
import SettingsBody from '../widgets/SettingsBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    users: any
    getUser: (userid: string)=>void
  }

const SettingsPage: React.FC<Props> = ({users, getUser, regDetails, changeSomething, configs_}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething} />
            <SettingsBody users={users} getUser={getUser} configs_={configs_} regDetails={regDetails} changeSomething={changeSomething} />
        </div>
    )
}

export default SettingsPage
