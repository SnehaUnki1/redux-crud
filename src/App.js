import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser, updateUser, deleteUser } from './action/Action';
import User from './component/User';


class App extends Component {
  constructor(props) {
    super(props);
    this.first = React.createRef();
    this.last = React.createRef();
    this.email = React.createRef();
    this.mobile = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.deleteHndler =this.deleteHndler.bind(this);
  }


  submitHandler(e) {
    e.preventDefault();
    const data = {
      id: Math.max(...this.props.userList.map(x => {
        return x.id
      })) + 1,
      first: this.first.current.value,
      last: this.last.current.value,
      email: this.email.current.value,
      mobile: this.mobile.current.value
    };

    console.log('data', data);
    this.props.addUser(data); /* create method */
    this.clear();
    window.alert("Successfully Created New User Info");
  }

  clear() {
    this.first.current.value = this.last.current.value = this.email.current.value = this.mobile.current.value = "";
  }

  editHandler(data){
    console.log('new data', data);
    this.props.updateUser(data);
    window.alert("Successfully Updated..")
  }

  deleteHndler(id){
    console.log('delete id ', id);
    let dStatus = window.confirm("Do you want to delete user" , id);
        if (dStatus === true){
            this.props.deleteUser(id);
            window.alert("Successfully Deleted");
        } else{
          return false;
        }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 jumbotron text-center">
            <h1>State Management CRUD</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="table table-responsive">
              <table className="table table-dark table-hover table-bordered">
                <thead>
                  <tr>
                    <th colSpan="5">
                      <button className="btn btn-outline-success" data-toggle="modal" data-target="#myModal" >
                        Add New
                                  </button>
                    </th>
                  </tr>
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    (this.props.userList.length === null) ? (
                      <tr>
                        <td colSpan="5"> No Users found</td>
                      </tr>
                    ) : (
                        <User  {...this.props}  edit= {this.editHandler} del={this.deleteHndler}/>
                      )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            { /* modal code */}

            <div className="modal fade" id="myModal">
              <div className="modal-dialog modal-md">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title">Create User</h3>
                    <button type="button" className="close btn btn-sm btn-outline-warning" data-dismiss="modal">
                      <i className="far fa-times-circle"></i>
                    </button>
                  </div>

                  <div className="modal-body">
                    <form method="post" onSubmit={this.submitHandler}>
                      <div className="form-group">
                        <label htmlFor="first">First</label>
                        <input type="text" ref={this.first} className="form-control" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="last">Last</label>
                        <input type="text" ref={this.last} className="form-control" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={this.email} className="form-control" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="tel" ref={this.mobile} className="form-control" maxLength={10} required />
                      </div>

                      <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-outline-success" />
                      </div>
                    </form>
                  </div>

                  <div className="modal-footer">

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addUser: addUser,
      updateUser: updateUser,
      deleteUser: deleteUser

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
