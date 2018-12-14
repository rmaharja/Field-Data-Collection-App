import React from "react";

const Jumbotron = (props) => (
    <div
        style={{
        height: 300,
        clear: "both",
        paddingTop: 120,
        textAlign: "center"
        }}
        className="jumbotron">
            <h1>{props.children}</h1>
    </div>
);

export default Jumbotron;
