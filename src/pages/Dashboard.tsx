import React from 'react'
import DashboardBody from '../widgets/DashboardBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
  }

const DashboardPage: React.FC<Props> = ({regDetails}) => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <DashboardBody regDetails={regDetails} />
        </div>
    )
}

export default DashboardPage
