import React from 'react'
import EditMembersBody from '../widgets/EditMembersBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    registrationDetails_: any
    changeSomething: (changeParam: string)=>void
    getMember: (memberid: string)=>void
    members: any
    configs_: any
    selectedMemberDetails: any
  }

const EditMembersPage: React.FC<Props> = ({configs_, selectedMemberDetails, getMember, regDetails, members, registrationDetails_, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <EditMembersBody getMember={getMember} selectedMemberDetails={selectedMemberDetails} changeSomething={changeSomething} configs_={configs_} members={members} registrationDetails_={registrationDetails_} regDetails={regDetails} />
        </div>
    )
}

export default EditMembersPage
