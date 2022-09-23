import React from 'react'
import SettingsBody from '../widgets/SettingsBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
  }

const SettingsPage: React.FC<Props> = ({regDetails}) => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <SettingsBody regDetails={regDetails} />
        </div>
    )
}

export default SettingsPage
