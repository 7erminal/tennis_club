import React from 'react'
import AddPaymentBody from '../widgets/AddPaymentBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
    configs_: any
    viewDetails: (module: string, modleid: string)=>void
    members: any
    getMember: (userid: string)=>void
    essentials: any
  }

const AddPaymentsPage: React.FC<Props> = ({essentials, getMember, viewDetails, regDetails, changeSomething, configs_, members}) => {
    return (
        <div className='wrapper'>
            <Sidebar essentials={essentials} changeSomething={changeSomething}/>
            <AddPaymentBody getMember={getMember} members={members} viewDetails={viewDetails} changeSomething={changeSomething} regDetails={regDetails} configs_={configs_} />
        </div>
    )
}

export default AddPaymentsPage
