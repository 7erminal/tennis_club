import React from 'react'
import DashboardBody from '../widgets/DashboardBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    games: any
    scheduledCoaching: any
    scheduledTraining: any
    members: any
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    getMember: (userid: string)=>void
    essentials: any
  }

const DashboardPage: React.FC<Props> = ({essentials, getMember, viewDetails, games, scheduledTraining, scheduledCoaching, members, configs_, regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething} />
            <DashboardBody getMember={getMember} viewDetails={viewDetails} regDetails={regDetails} scheduledCoaching={scheduledCoaching} scheduledTraining={scheduledTraining} changeSomething={changeSomething} games={games} members={members} configs_={configs_}  />
        </div>
    )
}

export default DashboardPage
