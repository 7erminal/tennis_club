import React from 'react'
import MembersBody from '../widgets/MembersBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    members: any
    getMember: (memberid: string)=>void
  }

const MembersPage: React.FC<Props> = ({regDetails, getMember, members, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <MembersBody getMember={getMember} regDetails={regDetails} members={members} />
        </div>
    )
}

export default MembersPage
