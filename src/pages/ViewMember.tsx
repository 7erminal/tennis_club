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
    getUser: (userid: string)=>void
  }

const ViewMemberPage: React.FC<Props> = ({getUser, registrationDetails_, configs_, selectedMemberDetails, regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <ViewMemberBody getUser={getUser} registrationDetails_={registrationDetails_} configs_={configs_} selectedMemberDetails={selectedMemberDetails} regDetails={regDetails} changeSomething={changeSomething}/>
        </div>
    )
}

export default ViewMemberPage
