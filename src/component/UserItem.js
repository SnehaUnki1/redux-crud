import React, { Component } from 'react'

export default class UserItem extends Component {

    constructor(props) {
        super(props);
        this.eFirst = React.createRef();
        this.eLast = React.createRef();
        this.eMail = React.createRef();
        this.eMobile = React.createRef();
        
        this.state = {
            isEdit: false
        };
        this.toggleHandler = this.toggleHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.delHandler = this.delHandler.bind(this);
    }

    toggleHandler() {
        this.setState((prevState,props) => ({
            isEdit: !prevState.isEdit
        }))
    }

    updateHandler(){
        const data = {
            id: this.props.user.id,
            first: this.eFirst.current.value,
            last: this.eLast.current.value,
            email: this.eMail.current.value,
            mobile: this.eMobile.current.value,
        }
        console.log("update data",data);
        this.props.edit(data);
        this.toggleHandler();

    }

    delHandler(){
        this.props.del(this.props.user.id);
        
    }

    render() {
        // if(!this.props.user) return null;

        const { first,last,email,mobile } = this.props.user;
        return  this.state.isEdit === true ? (
            <tr>
                <td><input type="text" defaultValue={first} ref={this.eFirst} className="form-control"/></td>
                <td><input type="text" defaultValue={last} ref={this.eLast} className="form-control"/></td>
                <td><input type="email" defaultValue={email} ref={this.eMail} className="form-control"/></td>
                <td><input type="tel" defaultValue={mobile} ref={this.eMobile} className="form-control"/></td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-sm btn-outline-warning" onClick={this.updateHandler}> 
                            <i className="fas fa-save"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger" onClick={this.toggleHandler} >
                            <i className="far fa fa-times"></i>
                        </button>
                    </div>
                </td>
            </tr>
        ) : (
            <tr>
                <td>{first}</td>
                <td> {last} </td>
                <td> {email} </td>
                <td> {mobile} </td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-outline-info btn-sm" onClick={this.toggleHandler} >
                            <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-outline-danger btn-sm" onClick={this.delHandler} >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}
