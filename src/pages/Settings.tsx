import React from 'react'
import SettingsBody from '../widgets/SettingsBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    users: any
    getMember: (memberid: string)=>void
    getUser: (userid: string)=>void
    essentials: any
  }

const SettingsPage: React.FC<Props> = ({essentials, getUser, users, getMember, regDetails, changeSomething, configs_}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething} />
            <SettingsBody getUser={getUser} users={users} getMember={getMember} configs_={configs_} regDetails={regDetails} changeSomething={changeSomething} />
        </div>
    )
}

export default SettingsPage
