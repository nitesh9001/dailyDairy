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
    diff(td,fd){
        var date1 = new Date(td);
        var date2 = new Date(fd);
          console.log(date1,date2)
        // To calculate the time difference of two dates
        var Difference_In_Time = date1.getTime() - date2.getTime();
          
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        console.log(Difference_In_Days)
        return Difference_In_Days
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
                  <span>Leave type :</span><span style={{color:'red'}}>{this.props.data.leaveType} </span>
               </div>
               <div className="Priority">
                  <span>From  :  {this.props.data.fromDate} </span>
                  <span>To  :  {this.props.data.toDate} </span>
                 
               </div>
               <div className="Priority">
                  <span>Date Count :</span><span style={{color:'blue'}}>
                  {this.diff(this.props.data.toDate,this.props.data.fromDate)}
                  </span>
               </div> 
               <div className="Priority">
                  <span>Leave Count Remaining :</span><span style={{color:'blue'}}>
                  {this.props.data.leaveCountRem}
                  </span>
               </div>
               <div className="content">
               {this.props.data.remarks}
               </div>
               <div className="content datetime">
               {this.dateCreatedAt(this.props.data.CreatedAt)}
               </div>
            </div>
        )
    }
}