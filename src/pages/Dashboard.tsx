import React from 'react'
import DashboardBody from '../widgets/DashboardBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    games: any
    members: any
    configs_: any
  }

const DashboardPage: React.FC<Props> = ({games, members, configs_, regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething} />
            <DashboardBody regDetails={regDetails} changeSomething={changeSomething} games={games} members={members} configs_={configs_}  />
        </div>
    )
}

export default DashboardPage
