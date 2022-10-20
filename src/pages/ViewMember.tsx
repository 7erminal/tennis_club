import React from 'react'
import EditMembersBody from '../widgets/EditMembersBody'
import Sidebar from '../widgets/SideBar'
import ViewMemberBody from '../widgets/ViewMemberBody'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    selectedMemberDetails: any
  }

const ViewMemberPage: React.FC<Props> = ({configs_, selectedMemberDetails, regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <ViewMemberBody selectedMemberDetails={selectedMemberDetails} regDetails={regDetails} changeSomething={changeSomething}/>
        </div>
    )
}

export default ViewMemberPage
