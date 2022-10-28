import React from 'react'
import SessionsBody from '../widgets/SessionsBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    members: any
    games: any
    scheduledCoaching: any
    scheduledTraining: any
    viewDetails: (module: string, modleid: string)=>void
    getUser: (userid: string)=>void
  }

const SessionsPage: React.FC<Props> = ({getUser, games, viewDetails, scheduledCoaching, scheduledTraining, regDetails, changeSomething, configs_, members}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <SessionsBody getUser={getUser} viewDetails={viewDetails} changeSomething={changeSomething} games={games} scheduledCoaching={scheduledCoaching} scheduledTraining={scheduledTraining} members={members} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default SessionsPage
