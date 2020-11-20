import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {



    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = props.state.messages.map ( message => <Message message={message.message}/>);

    let newText = React.createRef();

    let addText = () => {
        let sentence = newText.current.value
        alert (sentence)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newText}></textarea>
            </div>
            <div>
                <button onClick={addText}>Add post</button>
            </div>
        </div>
    )
}


export default Dialogs;