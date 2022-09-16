import React from 'react'
import DashboardBody from '../widgets/DashboardBody'
import Sidebar from '../widgets/SideBar'

const DashboardPage: React.FC = () => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <DashboardBody />
        </div>
    )
}

export default DashboardPage
