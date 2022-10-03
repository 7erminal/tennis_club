import React from 'react'
import SettingsBody from '../widgets/SettingsBody'
import Sidebar from '../widgets/SideBar'

type Props = {
    regDetails: ()=>void
    changeSomething: (changeParam: string)=>void
  }

const SettingsPage: React.FC<Props> = ({regDetails, changeSomething}) => {
    return (
        <div className='wrapper'>
            <Sidebar changeSomething={changeSomething} />
            <SettingsBody regDetails={regDetails} />
        </div>
    )
}

export default SettingsPage
