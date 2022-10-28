import React from 'react'
import MembersBody from '../widgets/MembersBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    members: any
    getMember: (memberid: string)=>void
    registrationDetails_: any
    configs_: any
    getUser: (userid: string)=>void
  }

const MembersPage: React.FC<Props> = ({getUser, regDetails, getMember, members, changeSomething, configs_, registrationDetails_}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <MembersBody getUser={getUser} changeSomething={changeSomething} getMember={getMember} regDetails={regDetails} members={members} registrationDetails_={registrationDetails_} configs_={configs_}/>
        </div>
    )
}

export default MembersPage
