import React from 'react'
import EditMembersBody from '../widgets/EditMembersBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    registrationDetails_: any
    changeSomething: (changeParam: string)=>void
    members: any
  }

const EditMembersPage: React.FC<Props> = ({regDetails, members, registrationDetails_, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <EditMembersBody members={members} registrationDetails_={registrationDetails_} regDetails={regDetails} />
        </div>
    )
}

export default EditMembersPage
