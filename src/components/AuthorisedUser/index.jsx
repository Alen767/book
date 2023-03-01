import React, {useState} from "react";
import "./style.css";

export default ({curUser, setCurUser}) => {
    return <>
    <h1>fff</h1>
        <div>{curUser}</div>
        <button className="auth_logout" onClick={() => {}}>Выйти</button>
    </>
}