import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  changeSomething: (changeParam: string)=>void
}

const Sidebar: React.FC<Props> = ({changeSomething}) => {
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
          <li className="active ">
            <Link to="/dashboard">
              <i className="nc-icon nc-bank"></i>
              <p>Overview</p>
            </Link>
          </li>
          <li>
            <Link to="/members" onClick={()=>changeSomething('members')}>
              <i className="nc-icon nc-diamond"></i>
              <p>Members</p>
            </Link>
          </li>
          <li>
            <Link to="/sessions" onClick={()=>changeSomething('sessions')}>
              <i className="nc-icon nc-pin-3"></i>
              <p>Sessions</p>
            </Link>
          </li>
          <li>
            <a href="./notifications.html">
              <i className="nc-icon nc-bell-55"></i>
              <p>Sales</p>
            </a>
          </li>
          <li>
            <Link to="/configs" onClick={()=>changeSomething('configs')}>
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
