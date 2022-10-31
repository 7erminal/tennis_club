import React from 'react'
import SessionsBody from '../widgets/SessionsBody'
import Sidebar from '../widgets/SideBar'
import ViewTrainingBody from '../widgets/ViewTrainingDetails'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    selectedTrainingDetails: any
    getMember: (userid: string)=>void
    essentials: any
  }

const TrainingDetails: React.FC<Props> = ({essentials, getMember, viewDetails, selectedTrainingDetails, regDetails, changeSomething, configs_}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething}/>
            <ViewTrainingBody getMember={getMember} selectedTrainingDetails={selectedTrainingDetails} regDetails={regDetails} changeSomething={changeSomething} />
        </div>
    )
}

export default TrainingDetails
