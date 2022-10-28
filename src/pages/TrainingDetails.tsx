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
    getUser: (userid: string)=>void
  }

const TrainingDetails: React.FC<Props> = ({getUser, viewDetails, selectedTrainingDetails, regDetails, changeSomething, configs_}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <ViewTrainingBody getUser={getUser} selectedTrainingDetails={selectedTrainingDetails} regDetails={regDetails} changeSomething={changeSomething} />
        </div>
    )
}

export default TrainingDetails
