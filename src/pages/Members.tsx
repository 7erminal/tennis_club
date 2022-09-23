import React from 'react'
import MembersBody from '../widgets/MembersBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
  }

const MembersPage: React.FC<Props> = ({regDetails}) => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <MembersBody regDetails={regDetails} />
        </div>
    )
}

export default MembersPage
