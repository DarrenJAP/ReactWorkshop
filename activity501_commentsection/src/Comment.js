
import React, { Component } from "react";
import "./Comment.css"

function getReply(name, image, text, time, comments) {
    if (comments == null) {
        return (
            <div className="replies">
                <Comment name={name} image={image} text={text} time={time}/>
            </div>
        )
    }

    return (
        <div className="replies">
            <Comment name={name} image={image} text={text} time={time} comments={comments}/>
        </div>
    )
}

function Comment(props) {
    if (props.comments) {
        return (
            <div className="commentChain">
                <div className="commentDiv">
                    <img src={props.image} className="commentImage"/>
                    <h3 className="commentName">{props.name}</h3>
                    <h5 className="commentTime">{props.time}</h5>
                    <p className="commentText">{props.text}</p>
                </div>
                <div className="replySection">
                    {
                        props.comments.map((reply, index) => getReply(props.comments[index].name, props.comments[index].image,
                            props.comments[index].text, props.comments[index].time,
                            Object.keys(props.comments[index]).includes("comments") ? props.comments[index].comments : null))
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="commentDiv">
                <img src={props.image} className="commentImage"/>
                <h3 className="commentName">{props.name}</h3>
                <h5 className="commentTime">{props.time}</h5>
                <p className="commentText">{props.text}</p>
            </div>
        )
    }
}

export default Comment