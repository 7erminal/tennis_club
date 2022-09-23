import React from 'react'
import EditMembersBody from '../widgets/EditMembersBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void,
    registrationDetails_: any
  }

const EditMembersPage: React.FC<Props> = ({regDetails, registrationDetails_}) => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <EditMembersBody registrationDetails_={registrationDetails_} regDetails={regDetails} />
        </div>
    )
}

export default EditMembersPage
