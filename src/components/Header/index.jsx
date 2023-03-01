import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import {Ctx} from "../../App";

export default () => {
    const {curUser, setCurUser, setAuthModalState, setView} = useContext(Ctx);
    
    return <header>
        <Link to="/">
            <div className="logo">Book</div>
        </Link>

        <div className="profile">
                {
                curUser ? 
                (
                    <div className="authorised_user">

                        <Link to="/profile">
                            <div>Привет👋 {curUser}</div> 
                        </Link>

                        <Link to="/">
                            <button 
                                className="auth_login" 
                                onClick={()=> {localStorage.setItem("curUser", ""); setCurUser("");}}>
                                    Выйти
                            </button>
                        </Link>
                    </div>
                ) :
                (
                    <Link to="/">
                        <button 
                            className="auth_login" 
                            onClick={()=> {setAuthModalState(true); setView("login")}}>
                                Войти
                        </button>
                    </Link>
                )}
        </div>
    </header>
}