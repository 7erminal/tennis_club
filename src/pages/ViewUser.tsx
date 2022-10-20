import React from 'react'
import EditMembersBody from '../widgets/EditMembersBody'
import Sidebar from '../widgets/SideBar'
import ViewUser from '../widgets/ViewUserBody'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    selectedUserDetails: any
  }

const ViewUserPage: React.FC<Props> = ({configs_, selectedUserDetails, regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <ViewUser selectedUserDetails={selectedUserDetails} regDetails={regDetails} changeSomething={changeSomething}/>
        </div>
    )
}

export default ViewUserPage
