import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  changeSomething: (changeParam: string)=>void
  essentials: any
}

const Sidebar: React.FC<Props> = ({essentials, changeSomething}) => {
  const [dashboardActive, setDashboardActive] = useState(true)
  const [membersActive, setMembersActive] = useState(false)
  const [sessionsActive, setSessionsActive] = useState(false)
  const [salesActive, setSalesActive] = useState(false)
  const [configurationsActive, setConfigurationsActive] = useState(false)
  // const [dashboardActive, setDashboardActive] = useState(false)

  useEffect(()=>{
    setDashboardActive(false)
    setMembersActive(false)
    setSessionsActive(false)
    setSalesActive(false)
    setConfigurationsActive(false)

    switch(essentials.e_activeNav){
      case 'dashboard':
        setDashboardActive(true)
        break
      case 'members':
        setMembersActive(true)
        break
      case 'sessions':
        setSessionsActive(true)
        break
      case 'configs':
        setConfigurationsActive(true)
        break
      case 'sales':
        setSalesActive(true)
        break
      default:
        setDashboardActive(true)
        break
    }
  })
  
  const activeBar = (nav_: string) => {
    changeSomething(nav_)
  }

    return (
        <div className="sidebar" data-color="white" data-active-color="danger">
      <div className="logo">
        <a href="#" className="simple-text logo-mini">
          <div className="logo-image-small">
            <img src="logo-small.png" />
          </div>
        </a>
        <a href="#" className="simple-text logo-normal">
          Super Admin
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li>
            <Link to="/dashboard" style={{color: dashboardActive == true ? '#FF583E' : '#2C3E50'}} onClick={()=>activeBar('dashboard')}>
              <i className="nc-icon nc-bank"></i>
              <p>Overview</p>
            </Link>
          </li>
          <li>
            <Link to="/members" style={{color: membersActive == true ? '#FF583E' : '#2C3E50'}} onClick={()=>activeBar('members')}>
              <i className="nc-icon nc-diamond"></i>
              <p>Members</p>
            </Link>
          </li>
          <li>
            <Link to="/sessions" style={{color: sessionsActive == true ? '#FF583E' : '#2C3E50'}} onClick={()=>activeBar('sessions')}>
              <i className="nc-icon nc-pin-3"></i>
              <p>Sessions</p>
            </Link>
          </li>
          <li>
          <Link to="/configs" style={{color: salesActive == true ? '#FF583E' : '#2C3E50'}} onClick={()=>activeBar('sales')} >
              <i className="nc-icon nc-bell-55"></i>
              <p>Sales</p>
            </Link>
          </li>
          <li>
            <Link to="/configs" style={{color: configurationsActive == true ? '#FF583E' : '#2C3E50'}} onClick={()=>activeBar('configs')}>
              <i className="nc-icon nc-pin-3"></i>
              <p>Configurations</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default Sidebar
