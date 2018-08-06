import React from 'react';

import './_cameraCard.scss';

const date = new Date()

const CameraCard = (props) => (
<div className="card">
    <div className="card-body">
        <p className="card-date">{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</p>
        <h5 className="card-title">{props.location}</h5>
    </div>
    <img className="img-fluid w-100 mw-100 card-img-top" src={props.data.cams[props.selectedCameras[0]].url} alt="Camera view"/>
    <img className="img-fluid w-100 mw-100 card-img-top" src={props.data.cams[props.selectedCameras[1]].url} alt="Camera view"/>
</div>
);

export default CameraCard;