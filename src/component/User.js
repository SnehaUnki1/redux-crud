import React, { Component } from 'react'
import UserItem from './UserItem';

export default class User extends Component {

    render(){
        // if(!this.props.user) return null;

        // with out sort
    const trItem = this.props.userList.map((item,key) => {
        return <UserItem key={key} user={item}  />
    });

    // with sorting (first)
    const sortTrItem = this.props.userList.sort((a,b) => a.first > b.first ? 1: -1).map(
        (item,key) => {
        return <UserItem key={key} user={ item } {...this.props} />
    });

    return (
            <React.Fragment>
                        { sortTrItem }
            </React.Fragment>
        )
    }
}
