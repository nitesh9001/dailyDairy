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
    notes: "",
    priority: "",
    importantDate: "",
    importantLink: "",
    favrouite: false,
    notes_dairy: [
      {
        id: 1,
        title: "Daily update",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        priority: "high",
        importantDate: "12-01-2021",
        importantLink: "www.google.com",
        CreatedAt: "1619515835",
        favrouite: true,
      },
      {
        id: 2,
        title: "Daily update 2",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        priority: "Medium",
        importantDate: "12-01-2021",
        importantLink: "www.google.com",
        CreatedAt: "1609515814",
        favrouite: false,
      },
      {
        id: 3,
        title: "Daily update 3",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        priority: "low",
        importantDate: "12-01-2021",
        importantLink: "www.google.com",
        CreatedAt: "1619015835",
        favrouite: true,
      },
      {
        id: 4,
        title: "Daily update 4",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        priority: "high",
        importantDate: "12-01-2021",
        importantLink: "www.google.com",
        CreatedAt: "1612500835",
        favrouite: false,
      },
    ],
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  saveData = (e) => {
    e.preventDefault();
    const date= new Date()
    var unixTimestamp = moment(date, "YYYY.MM.DD").unix();
    console.log(unixTimestamp)
    const data = {
      id: this.state.id,
      title: this.state.title,
      notes: this.state.notes,
      priority: this.state.priority,
      importantDate: this.state.importantDate,
      importantLink: this.state.importantLink,
      favrouite: false,
      CreatedAt: unixTimestamp,
    };
    console.log(data)
    this.setState({
      notes_dairy: [...this.state.notes_dairy, data],
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
   
  };
  edit(id) {
    this.setState({
      openAdd: true
    });
    console.log(id)
    var d = this.state.notes_dairy.filter(item => item.id === id)
    this.setState({
      id:d.id,
      title:d.title,
      notes:d.notes,
      priority:d.priority,
      importantDate:d.importantDate,
      importantLink:d.importantLink,
    })
  }
  
  Delete(id){
    console.log(id)
    this.setState({
      notes_dairy:this.state.notes_dairy.filter(item => item.id !== id)
    })
  }
  handleSOrting = e =>{
    e.preventDefault()
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  render() {
    const {notes_dairy,sortType}=this.state;
        const sortedNotes=sortType ? notes_dairy.sort((a,b)=>{
        const isReversed= (sortType === 'ascend') ? 1:-1;
        return isReversed * a.CreatedAt.toString().localeCompare(b.CreatedAt.toString())
    }): notes_dairy
    return (
      <div>
        <Header />
        <div className="landing-page-conatiner">
          <div className="center-heading">Daily Dairy</div>
          <div className="notes-alignment">
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
                      ></i>
                    </button>
                  </Tooltip>
                )}
              </div>
            </div>
            {this.state.openAdd ? (
              <>
                <div
                  className="notes-alignment-conatiner"
                  style={{ display: "block", margin: "60px" }}
                >
                  <div className="input-box-style">
                    <div className="lable">
                      <label>ID :</label>
                    </div>{" "}
                    <input
                      type="number"
                      placeholder="ID"
                      name="id"
                      value={this.state.id}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-box-style">
                    <div className="lable">
                      <label>Title :</label>
                    </div>{" "}
                    <input
                      type="text"
                      placeholder="Title"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-box-style">
                    <div className="lable">
                      <label>Important Link :</label>
                    </div>{" "}
                    <input
                      type="text"
                      placeholder="important Link"
                      name="importantLink"
                      value={this.state.importantLink}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-box-style">
                    <div className="lable">
                      <label>Important Date :</label>
                    </div>{" "}
                    <input
                      type="date"
                      placeholder="Important Date"
                      name="importantDate"
                      value={this.state.importantDate}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-box-style">
                    <div className="lable">
                      <label>Priority :</label>
                    </div>{" "}
                    <select
                      onChange={this.handleChange}
                      value={this.state.priority}
                      name="priority"
                    >
                      <option value={""}>Select Priority</option>
                      <option value={"Urgent"}>Urgent</option>
                      <option value={"High"}>High</option>

                      <option value={"Medium"}>Medium</option>

                      <option value={"Low"}>Low</option>
                    </select>
                  </div>
                  <div className="input-box-style">
                    <div className="lable">
                      <label>Description :</label>
                    </div>{" "}
                    <textarea
                      rows={3}
                      cols={40}
                      className="form-control"
                      onChange={this.handleChange}
                      name="notes"
                      placeholder="Notes"
                      value={this.state.notes}
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
                    onClick={() => {
                      this.setState({
                        openAdd: false,
                      });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="sorting-filtering-action">
                  <div className="sorting">
                    <select onChange={this.handleSOrting} value={this.state.sortType} name="sortType">
                      <option value={""}>Sort Notes</option>
                      <option value={"decend"}>Newest First</option>
                      <option value={"ascend"}>Oldest First</option>
                    </select>
                  </div>
                  <div className="filtering">
                    <select onChange={this.handleFilter} value={this.state.filter} name="filter">
                      <option>Filter DateWise</option>
                      <option>This Week</option>
                      <option>This Month</option>
                      <option>This Year</option>
                    </select>
                  </div>
                </div>
                <div className="notes-alignment-conatiner">
                  {sortedNotes.map((data, i) => (
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
