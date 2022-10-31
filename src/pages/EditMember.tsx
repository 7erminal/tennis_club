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
    getMember: (userid: string)=>void
    essentials: any
  }

const EditMemberPage: React.FC<Props> = ({essentials, getMember, registrationDetails_, configs_, selectedMemberDetails, regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething}/>
            {/* <EditMemberBody toggleAllowEdit={toggleAllowEdit} configs_={configs_} registrationDetails_={registrationDetails_} selectedMemberDetails={selectedMemberDetails} regDetails={regDetails} changeSomething={changeSomething}/> */}
        </div>
    )
}

export default EditMemberPage
