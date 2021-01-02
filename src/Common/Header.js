import React, { Component } from 'react';
import {Avatar,Tooltip} from '@material-ui/core';
class Header extends Component {
    constructor(){
        super();
        this.state={
            openDropDown:false
        }
    }
    openDrop=(e)=>{
     e.preventDefault()
     this.setState({
         openDropDown:!this.state.openDropDown
     })
    }
    render() {
        return (
            <div className="headerContiner">
                <div className='navigation-header'>
                   <div className="logo-name">
                   <span>
                    Dairy
                   </span>
                   </div>
                   <div className="profile-header">
                  
                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avtar-custom" onClick={this.openDrop}/>
                   <Tooltip title="Logout" aria-label="add">
                    <button className="btnless" >
                    <a href="/">
                    <i class="fa fa-sign-out" aria-hidden="true" style={{cursor:'pointer'}}></i>
                    </a>
                    </button>
                    </Tooltip>
                   {!this.state.openDropDown ?
                   '':<ul className="ui-profile-list">
                   <span> </span>
                       <li>Profile</li>
                   </ul>}
                   </div>
                </div>
            </div>
        );
    }
}

export default Header;
