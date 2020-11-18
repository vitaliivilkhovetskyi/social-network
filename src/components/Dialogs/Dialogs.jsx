import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
    {id:1, name: 'Vitalii'},
        {id:1, name: 'Vitalii'},
        {id:2, name: 'Andriy'},
        {id:3, name: 'Vasya'},
        {id:4, name: 'Valera'},
        {id:5, name: 'Petya'},
        {id:6, name: 'igor'}
    ];
    let messages = [
        {id:1, message: 'Hi'},
        {id:1, message: 'Hello'},
        {id:2, message: 'Hyper Link'},
        {id:3, message: 'Hyper Link'},
        {id:4, message: 'Hyper Link'},
        {id:5, message: 'Hyper Link'},
    ];

    let dialogselements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    // [
    //     <DialogItem name={dialogs[0].name} id={dialogs[0].id} />,
    //     <DialogItem name={dialogs[1].name} id={dialogs[1].id} />,
    //     <DialogItem name={dialogs[2].name} id={dialogs[2].id} />,
    //     <DialogItem name={dialogs[3].name} id={dialogs[3].id} />,
    //     <DialogItem name={dialogs[4].name} id={dialogs[4].id} />,
    //     <DialogItem name={dialogs[5].name} id={dialogs[5].id} />
    // ];

    let messagesElements = messages.map ( message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogselements }
                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id} />*/}
                {/*<DialogItem name={dialogs[1].name} id={dialogs[1].id} />*/}
                {/*<DialogItem name={dialogs[2].name} id={dialogs[2].id} />*/}
                {/*<DialogItem name={dialogs[3].name} id={dialogs[3].id} />*/}
                {/*<DialogItem name={dialogs[4].name} id={dialogs[4].id} />*/}
                {/*<DialogItem name={dialogs[5].name} id={dialogs[5].id} />*/}

            </div>
            <div className={s.messages}>
                {messagesElements}

                {/*<Message message={messagesData[0].message}/>*/}
                {/*<Message message={messagesData[1].message}/>*/}
                {/*<Message message={messagesData[2].message}/>*/}
                {/*<Message message={messagesData[3].message}/>*/}
                {/*<Message message={messagesData[4].message}/>*/}
            </div>
        </div>
    )
}


export default Dialogs;