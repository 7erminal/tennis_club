import React from 'react'
import EditMembersBody from '../widgets/EditMembersBody'
import Sidebar from '../widgets/SideBar'
import ViewUser from '../widgets/ViewUserBody'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    selectedUserDetails: any
    getMember: (memberid: string)=>void
    getUser: (userid: string)=>void
    essentials: any
  }

const ViewUserPage: React.FC<Props> = ({essentials, getUser, getMember, configs_, selectedUserDetails, regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething}/>
            <ViewUser getMember={getMember} getUser={getUser} selectedUserDetails={selectedUserDetails} regDetails={regDetails} changeSomething={changeSomething}/>
        </div>
    )
}

export default ViewUserPage
