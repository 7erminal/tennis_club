import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'
import debounce from "lodash/debounce"
import Api from '../resources/api'

type Props = {
  regDetails: ()=>void
  getMember: (memberid: string)=>void
}

const Navbar_: React.FC<Props> = ({regDetails, getMember}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<Array<any>>([])
  const [showDropdown, setShowDropdown] = useState(false)


   const firstUpdate = useRef(true);

    const navDropdownTitle = (<i className='nc-icon nc-bell-55'></i>);

    useLayoutEffect(()=>{
      // start search

      console.log("Search started")
      if (firstUpdate.current) {
         firstUpdate.current = false;
         return;
      }

      // startSearch()
   },[searchTerm])

   const searchChange = (e: any) => {
      setSearchTerm(e.target.value)
      // searchTermFunc(e.target.value)
      startSearch(e.target.value)
      setShowDropdown(true)
   }

   const sendToApi = (inputValue: string) => {
      console.log("about to go search data")

      const params = {search_word: inputValue}

      new Api().searchAll(params)
                .then(response => {
                    console.log('response from story selected is ')
                     console.log(response)

                     if(response.status == 202){
                      console.log("setting search response")
                      setSearchResults(response.data)
                     }
                    });
   }

   const startSearch = useCallback(debounce(sendToApi,500),[])

   const outFocus_ = () => {
    const delayInMilliseconds = 500; //1 second

    setTimeout(function() {
      setShowDropdown(false)
    }, delayInMilliseconds); 
   }
    return (
        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a className="navbar-brand" href="javascript:;">Reach Tennis</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <form>
              <div className="input-group no-border">
                <input 
                  type="text" 
                  value={searchTerm} 
                  className="form-control" 
                  placeholder="Search..." 
                  onChange={searchChange}
                  onBlur={outFocus_}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <i className="nc-icon nc-zoom-split"></i>
                  </div>
                </div>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link btn-magnify" href="javascript:;">
                  <i className="nc-icon nc-layout-11"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Stats</span>
                  </p>
                </a>
              </li>
              <li className="nav-item btn-rotate dropdown">
                <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown">
                    {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action/3.4">
                        <Link to='/'>Log out</Link>
                    </NavDropdown.Item>
            </NavDropdown>
              </li>
              <li className="nav-item">
                <Link to="/settings" onClick={regDetails} className="nav-link btn-rotate">
                  <i className="nc-icon nc-settings-gear-65"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          {
            showDropdown == false ? '' : 
            <Dropdown.Menu show className="searchDropDown" >
               <ListGroup>
              {
                searchResults ? searchResults.map((result: any, i: any)=>{
                  return <ListGroup.Item action key={i}>
                            <Link className='fill-all' to='/view-member' onClick={()=>getMember(result.id)}>
                                        
                            </Link>
                            {/* <span id='mname_list'>{result.username}</span>
                            <br/> */}
                            <small>{result.first_name} {result.last_name}</small>
                        </ListGroup.Item>
                }) : <div>No results found</div>
              }
              </ListGroup>
            </Dropdown.Menu>
          }
        </div>
      </nav>
    )
}

export default Navbar_
