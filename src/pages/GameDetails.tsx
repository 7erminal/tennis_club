import React from 'react'
import SessionsBody from '../widgets/SessionsBody'
import Sidebar from '../widgets/SideBar'
import ViewGameDetails from '../widgets/ViewGameDetails'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    selectedGameDetails: any
    getUser: (userid: string)=>void
  }

const GameDetails: React.FC<Props> = ({getUser, viewDetails, selectedGameDetails, regDetails, changeSomething, configs_}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <ViewGameDetails getUser={getUser} selectedGameDetails={selectedGameDetails} regDetails={regDetails} changeSomething={changeSomething} configs_={configs_} viewDetails={viewDetails} />
        </div>
    )
}

export default GameDetails
