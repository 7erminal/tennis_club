import React from 'react'
import EditMembersBody from '../widgets/EditMembersBody'
import Sidebar from '../widgets/SideBar'
import ViewMemberBody from '../widgets/ViewMemberBody'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    selectedMemberDetails: any
    registrationDetails_: any
    getMember: (userid: string)=>void
    essentials: any
  }

const ViewMemberPage: React.FC<Props> = ({essentials, getMember, registrationDetails_, configs_, selectedMemberDetails, regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething}/>
            <ViewMemberBody getMember={getMember} registrationDetails_={registrationDetails_} configs_={configs_} selectedMemberDetails={selectedMemberDetails} regDetails={regDetails} changeSomething={changeSomething}/>
        </div>
    )
}

export default ViewMemberPage
