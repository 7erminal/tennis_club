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
  }

const CoachingDetails: React.FC<Props> = ({viewDetails, selectedCoachingDetails, regDetails, changeSomething, configs_}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <ViewCoachingBody selectedCoachingDetails={selectedCoachingDetails} regDetails={regDetails} changeSomething={changeSomething} />
        </div>
    )
}

export default CoachingDetails
