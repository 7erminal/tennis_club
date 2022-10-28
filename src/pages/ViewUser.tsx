import React from 'react'
import EditMembersBody from '../widgets/EditMembersBody'
import Sidebar from '../widgets/SideBar'
import ViewUser from '../widgets/ViewUserBody'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    selectedUserDetails: any
    getUser: (userid: string)=>void
  }

const ViewUserPage: React.FC<Props> = ({getUser, configs_, selectedUserDetails, regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <ViewUser getUser={getUser} selectedUserDetails={selectedUserDetails} regDetails={regDetails} changeSomething={changeSomething}/>
        </div>
    )
}

export default ViewUserPage
