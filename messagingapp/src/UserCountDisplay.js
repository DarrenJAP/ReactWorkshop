
import React, { Component } from "react";
import { fetchUserCount } from "./AjaxLibrary";

class UserCountDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCount: 0,
            loading: true
        }
    }

    async componentDidMount() {
        let userCount = await fetchUserCount();
        this.setState({
            userCount: userCount,
            loading: false
        })
    }

    renderUserCount() {
        if (this.state.loading) {
            return (
                <p>Loading...</p>
            )
        }

        if (this.state.userCount && this.state.userCount > 0) {
            return (
                <p>Users in the app: {this.state.userCount}</p>
            )
        } else {
            return (
                <p>There are no users online right now.</p>
            )
        }
    }

    render() {
        return (
            <div className="UserCountDisplay">
                {this.renderUserCount()}                
            </div>
        )
    }
}

export default UserCountDisplay