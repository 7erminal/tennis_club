import React from 'react'
import AddPaymentBody from '../widgets/AddPaymentBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    members: any
    getUser: (userid: string)=>void
  }

const AddPaymentsPage: React.FC<Props> = ({getUser, viewDetails, regDetails, changeSomething, configs_, members}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething}/>
            <AddPaymentBody getUser={getUser} members={members} viewDetails={viewDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default AddPaymentsPage
