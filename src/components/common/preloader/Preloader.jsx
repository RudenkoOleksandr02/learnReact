import React from 'react';
import preloader from '../../../assets/images/1495.gif';

const Preloader = (props) => {
    return <div style={ {backgroundColor: 'white'} }>
        <img src={preloader}/>
    </div>
}

export default Preloader;