import React from 'react'
import PaymentsBody from '../widgets/PaymentsBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    getMember: (userid: string)=>void
    essentials: any
  }

const PaymentsPage: React.FC<Props> = ({essentials, getMember, viewDetails, regDetails, changeSomething, configs_}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething}/>
            <PaymentsBody getMember={getMember} viewDetails={viewDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default PaymentsPage
