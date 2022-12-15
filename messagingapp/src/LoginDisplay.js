
import React, { Component } from "react";
import { fetchMessages, fetchUser } from "./AjaxLibrary";

class LoginDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: "",
            currentUserId: null,
            currentUsername: "",
            loadingUsername: false,
            usernameFound: false,
            messages: [],
            hasFoundMessages: false
        }

        this.usernameInputOnChange = this.usernameInputOnChange.bind(this);
        this.submitButtonOnClick = this.submitButtonOnClick.bind(this);
        this.logoutButtonOnClick = this.logoutButtonOnClick.bind(this);
        this.displayUserMessages = this.displayUserMessages.bind(this);
    }

    usernameInputOnChange(event) {
        this.setState({
            usernameInput: event.target.value
        });
    }

    async submitButtonOnClick() {
        let currentUser = null;

        try {
            this.setState({loadingUsername: true});
            currentUser = await fetchUser(this.state.usernameInput);
            this.setState({loadingUsername: false, usernameFound: true});
        } catch (error) {
            alert("Cannot find username!");
            return;
        }

        console.log(currentUser["id"]);

        this.setState({
            currentUserId: currentUser["id"],
            currentUsername: currentUser["username"]
        })
    }

    logoutButtonOnClick() {
        this.setState({
            currentUserId: null,
            currentUsername: "",
            loadingUsername: false,
            usernameFound: false,
            messages: [],
            hasFoundMessages: false
        });
    }

    async getUserMessages (id) {
        let getmessages = await fetchMessages(id);
        this.setState({
            hasFoundMessages: true
        })
        let newMessages = []
        for (let i = 0; i < getmessages.length; i++) {
            newMessages[i] = getmessages[i];
        }
        this.setState({
            messages: newMessages
        });
    }

    displayUserMessages() {
        this.getUserMessages(this.state.currentUserId);

        if (this.state.hasFoundMessages)
        {
            let messages = this.state.messages;
            console.log(messages[0]);
            if (messages.length > 0)
            {
                return (
                    <div className="Messages">
                        <li>
                            {
                                messages.map((message, index) => <ul>{message}</ul>)
                            }
                        </li>   
                    </div>
                )
            } else {
                return;
            }
        }
    }

    displayUsernameLoading() {
        if (this.state.loadingUsername) {
            return (
                <p>Looking for username...</p>
            )
        } else if (this.state.usernameFound) {
            return this.displayUserMessages();
        } else {
            return;
        }
    }

    displayForm() {
        return (
            <div className="LoginForm">
                <p>Username: </p><input type="text" onChange={this.usernameInputOnChange}/>
                <button onClick={this.submitButtonOnClick}>Submit</button>
                <button onClick={this.logoutButtonOnClick}>Logout</button>
                {this.displayUsernameLoading()}
            </div>
        )
    }

    render() {
        return (
            <div className="LoginDisplay">
                {this.displayForm()}
            </div>
        )
    }
}

export default LoginDisplay