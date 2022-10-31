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
    getMember: (userid: string)=>void
    essentials: any
  }

const SessionsPage: React.FC<Props> = ({essentials, getMember, games, viewDetails, scheduledCoaching, scheduledTraining, regDetails, changeSomething, configs_, members}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething}/>
            <SessionsBody getMember={getMember} viewDetails={viewDetails} changeSomething={changeSomething} games={games} scheduledCoaching={scheduledCoaching} scheduledTraining={scheduledTraining} members={members} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default SessionsPage
