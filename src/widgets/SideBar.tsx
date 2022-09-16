import React from 'react'
import DateDisplay from '../components/DateDisplay'

const Sidebar: React.FC = () => {
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
            <a href="./dashboard.html">
              <i className="nc-icon nc-bank"></i>
              <p>Overview</p>
            </a>
          </li>
          <li>
            <a href="./icons.html">
              <i className="nc-icon nc-diamond"></i>
              <p>Members</p>
            </a>
          </li>
          <li>
            <a href="./map.html">
              <i className="nc-icon nc-pin-3"></i>
              <p>Sessions</p>
            </a>
          </li>
          <li>
            <a href="./notifications.html">
              <i className="nc-icon nc-bell-55"></i>
              <p>Sales</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default Sidebar
