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
    essentials: any
    selectedMemberDetails: any
  }

const MembersPage: React.FC<Props> = ({selectedMemberDetails, essentials, getUser, regDetails, getMember, members, changeSomething, configs_, registrationDetails_}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething}/>
            <MembersBody selectedMemberDetails={selectedMemberDetails} getUser={getUser} changeSomething={changeSomething} getMember={getMember} regDetails={regDetails} members={members} registrationDetails_={registrationDetails_} configs_={configs_}/>
        </div>
    )
}

export default MembersPage
