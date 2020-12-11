import React from 'react';
import d from './dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={d.user_style}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={d.active}>{props.name}</NavLink>
        </div>
    );
}

const Messages = (props) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.users}>
                <DialogItem name='Misha' id='1'/>
                <DialogItem name='Sasha' id='2'/>
                <DialogItem name='Petro' id='3'/>
                <DialogItem name='Nastya' id='4'/>
                <DialogItem name='Olya' id='5'/>
            </div>
            <div>
                <Messages message='helo vasia'/>
                <Messages message='helo stepan'/>
                <Messages message='how are you?'/>
                <Messages message='im fine and you?'/>
            </div>
        </div>
    );
}

export default Dialogs;