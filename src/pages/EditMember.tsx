import React from 'react'
import EditMembersBody from '../widgets/EditMembersBody'
import Sidebar from '../widgets/SideBar'
import EditMemberBody from '../widgets/EditMemberBody'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    selectedMemberDetails: any
    registrationDetails_: any
    getUser: (userid: string)=>void
  }

const EditMemberPage: React.FC<Props> = ({getUser, registrationDetails_, configs_, selectedMemberDetails, regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            {/* <EditMemberBody toggleAllowEdit={toggleAllowEdit} configs_={configs_} registrationDetails_={registrationDetails_} selectedMemberDetails={selectedMemberDetails} regDetails={regDetails} changeSomething={changeSomething}/> */}
        </div>
    )
}

export default EditMemberPage
