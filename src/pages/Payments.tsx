import React from 'react'
import PaymentsBody from '../widgets/PaymentsBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    getUser: (userid: string)=>void
  }

const PaymentsPage: React.FC<Props> = ({getUser, viewDetails, regDetails, changeSomething, configs_}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <PaymentsBody getUser={getUser} viewDetails={viewDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default PaymentsPage
