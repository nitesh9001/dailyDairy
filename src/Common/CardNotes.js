import React, { Component } from 'react'
import{Tooltip} from '@material-ui/core';
import moment from "moment";

export default class CardNotes extends Component {
    state={
        dateCreatedAt:''
    }
    dateCreatedAt(id){
    const date=moment.unix(id).format('dddd, MMMM Do, YYYY h:mm:ss A')
     return date
    }
    
    render() {
        return (
            <div className="card-main-conatiner">
               <div className="card-header">
                  <div className="card-header-left">
                     {this.props.data.title}
                  </div>
                  <div className="card-header-right">
                  <Tooltip title="Edit" aria-label="add">
                    <button className="btnless" onClick={()=>{
                        this.props.onEdit(this.props.data.id)
                    }}>
                    <i class="fa fa-edit" aria-hidden="true" style={{cursor:'pointer'}}></i>
                    </button>
                    </Tooltip>
                    <Tooltip title="Delete" aria-label="add">
                    <button className="btnless" onClick={()=>this.props.onDelete(this.props.data.id)} >
                    <i class="fa fa-trash-o" aria-hidden="true" style={{cursor:'pointer'}}></i>
                    </button>
                    </Tooltip>
                    <Tooltip title="Favourite" aria-label="add">
                    <button className="btnless">
                    {this.props.data.favrouite?<i class="fa fa-heart" aria-hidden="true" style={{cursor:'pointer',color:'red'}} onClick={()=>{
                        this.props.data.favrouite=!this.props.data.favrouite
                    }}></i>
                    : <i class="fa fa-heart-o" aria-hidden="true" style={{cursor:'pointer'}}></i>
                    }
                    </button>
                    </Tooltip>
                  </div>
               </div>
               <div className="Priority">
                  <span>Priority :</span><span style={{color:'red'}}>{this.props.data.priority} </span>
               </div>
               <div className="Priority">
                  <span>Important Link :</span><span style={{color:'blue'}}><a href='www.google.com' target='_blank' >
                  {this.props.data.importantLink}
                  </a> </span>
               </div>
               <div className="Priority">
                  <span>Important Date :</span><span style={{color:'blue'}}>
                  {this.props.data.importantDate}
                  </span>
               </div>
               <div className="content">
               {this.props.data.notes}
               </div>
               <div className="content datetime">
               {this.dateCreatedAt(this.props.data.CreatedAt)}
               </div>
            </div>
        )
    }
}