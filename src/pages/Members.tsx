import React from 'react'
import MembersBody from '../widgets/MembersBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    members: any
  }

const MembersPage: React.FC<Props> = ({regDetails, members, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <MembersBody regDetails={regDetails} members={members} />
        </div>
    )
}

export default MembersPage
