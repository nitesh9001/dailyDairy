import React, { Component } from "react";
import CardNotes from "../Common/CardNotes";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Tooltip } from "@material-ui/core";
import moment from "moment";
import Swal from "sweetalert";
// import ReactQuill from "react-quill";

export default class Landing extends Component {
  state = {
    openAdd: false,
    sortType:'',
    dataToedit:'',
    editData: "",
    id: "",
    title: "",
    remarks: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    favrouite: false,
    remarks_dairy: [
      {
        id: 1,
        title: "Daily update",
        remarks:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        leaveType: "Emergency",
        fromDate: "2021-03-17",
        toDate: "2021-03-20",
        leaveCountRem:10,
        CreatedAt: "1619515835",
        favrouite: true,
      },
      {
        id: 2,
        title: "Daily update 2",
        remarks:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        leaveType: "Medical",
        fromDate: "2021-03-17",
        toDate: "2021-03-20",
        leaveCountRem:9,
        CreatedAt: "1609515814",
        favrouite: false,
      },
      {
        id: 3,
        title: "Daily update 3",
        remarks:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        leaveType: "Personal",
        fromDate: "2021-03-17",
        leaveCountRem:8,
        toDate: "2021-03-20",
        CreatedAt: "1619015835",
        favrouite: true,
      },
      
    ],
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.fromDate)
  };
  componentDidMount(){
    localStorage.setItem('n',3)
    localStorage.setItem('le',8)
  }
  saveData = (e) => {
    e.preventDefault();
    const date= new Date()
    var unixTimestamp = moment(date, "YYYY.MM.DD").unix();
    console.log(unixTimestamp)
    
    const data = {
      id:localStorage.getItem('n')+1,
      title: this.state.title,
      remarks: this.state.remarks,
      leaveType: this.state.leaveType,
      fromDate: this.state.fromDate,
      toDate: this.state.toDate,
      favrouite: false,
      leaveCountRem:localStorage.getItem('le')-1,
      CreatedAt: unixTimestamp,
    };
    console.log(data)
    this.setState({
      remarks_dairy: [...this.state.remarks_dairy, data],
      openAdd: false,
      sortType:''
    });
    Swal({
      title: "Added Successfully.!",
      icon: 'success',
      text: "",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok"
    })
   localStorage.setItem('n',data.id)
   localStorage.setItem('n',data.leaveCountRem)
  };
 
  
  Delete(id){
    console.log(id)
    this.setState({
      remarks_dairy:this.state.remarks_dairy.filter(item => item.id !== id)
    })
  }
  handleSOrting = e =>{
    e.preventDefault()
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  render() {
    
    return (
      <div>
        <Header />
        <div className="landing-page-conatiner">
          <div className="center-heading">Daily Leave App</div>
          <div className="remarks-alignment">
            <div className="action-center-header">
              <div>
                {this.state.openAdd ? (
                  <Tooltip title="Back" aria-label="add">
                    <button
                      className="btnless"
                      onClick={() => {
                        this.setState({
                          openAdd: false,
                        });
                      }}
                    >
                      <i
                        class="fa fa-arrow-left"
                        aria-hidden="true"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </button>
                  </Tooltip>
                ) : (
                  <Tooltip title="Add Notes" aria-label="add">
                    <button
                      className="btnless"
                      onClick={() => {
                        this.setState({
                          openAdd: true,
                        });
                      }}
                    >
                      <i
                        class="fa fa-plus"
                        aria-hidden="true"
                        style={{ cursor: "pointer" }}
                      ></i> {" "} <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        ADD
                      </span>
                    </button>
                  </Tooltip>
                )}
              </div>
            </div>
            {this.state.openAdd ? (
              <div
                  className="remarks-alignment-conatiner"
                  style={{ display: "block", margin: "60px" ,paddingBottom:'40px' }}
                >
                
                  <div className="input-box-style">
                    <div className="lable">
                      <label>Leave type :</label>
                    </div>
                    {" "}
                    <select
                      onChange={this.handleChange}
                      value={this.state.leaveType}
                      name="leaveType"
                    >
                      <option value={""}>Select Leave Type</option>
                      <option value={"Emergency"}>Emergency</option>
                      <option value={"Medical"}>Medical</option>
                      <option value={"Half"}>Half day</option>
                      <option value={"Personal"}>Personal Work</option>
                      <option value={"Party"}>Party</option>
                    </select>
                  </div>
                  <div className="input-box-style">
                    <div className="lable">
                      <label>Subject of leave :</label>
                    </div>{" "}
                    <input
                      type="text"
                      placeholder="Subject of Leave"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                 
                  <div className="input-box-style">
                    <div className="lable">
                      <label>From  Date :</label>
                    </div>{" "}
                    <input
                      type="date"
                      placeholder="From"
                      name="fromDate"
                      value={this.state.fromDate}
                      onChange={this.handleChange}
                    />
                      <div className="lable">
                      <label>To  Date :</label>
                    </div>{" "}
                    <input
                      type="date"
                      placeholder="To"
                      name="toDate"
                      value={this.state.fromDate}
                      onChange={this.handleChange}
                    />
                  </div>  
                 
                  <div className="input-box-style">
                    <div className="lable">
                      <label>Remarks :</label>
                    </div>{" "}
                    <textarea
                      rows={3}
                      cols={40}
                      className="form-control"
                      onChange={this.handleChange}
                      name="remarks"
                      placeholder="Remarks"
                      value={this.state.remarks}
                    />
                  </div>
                 
                  <button
                    className="tn_save"
                    onClick={this.saveData.bind(this)}
                  >
                    <i className="fa fa-save" style={{ margin: "0 5px" }}></i>
                    Save
                  </button>
                  <button
                    className="tn_cancel"
                    onClick={this.props.close}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
              <>
                
                <div className="remarks-alignment-conatiner">
                  {this.state.remarks_dairy.map((data, i) => (
                    <CardNotes
                      key={i}
                      data={data}
                      onEdit={(id) => {
                        this.edit(id);
                      }}
                      onDelete={(id)=>{
                        this.Delete(id)
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
