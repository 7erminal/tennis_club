import React from 'react'
import PaymentsBody from '../widgets/PaymentsBody'
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
  }

const PaymentsPage: React.FC<Props> = ({games, viewDetails, scheduledCoaching, scheduledTraining, regDetails, changeSomething, configs_, members}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <PaymentsBody viewDetails={viewDetails} changeSomething={changeSomething} games={games} scheduledCoaching={scheduledCoaching} scheduledTraining={scheduledTraining} members={members} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default PaymentsPage
