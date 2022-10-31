import React from 'react'
import SessionsBody from '../widgets/SessionsBody'
import Sidebar from '../widgets/SideBar'
import ViewCoachingBody from '../widgets/ViewCoachingDetails'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    selectedCoachingDetails: any
    getMember: (userid: string)=>void
    essentials: any
  }

const CoachingDetails: React.FC<Props> = ({essentials, getMember, viewDetails, selectedCoachingDetails, regDetails, changeSomething, configs_}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething}/>
            <ViewCoachingBody getMember={getMember} selectedCoachingDetails={selectedCoachingDetails} regDetails={regDetails} changeSomething={changeSomething} />
        </div>
    )
}

export default CoachingDetails
