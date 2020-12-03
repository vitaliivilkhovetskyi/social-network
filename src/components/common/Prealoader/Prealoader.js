import React from 'react';
import prealoader from "../../../assets/images/prealoader.svg";

let Prealoader = (props) => {
    return <div style= { {backgroundColor: 'black'} }>
        <img src={prealoader} alt='loader'/>
    </div>
}

export default Prealoader;