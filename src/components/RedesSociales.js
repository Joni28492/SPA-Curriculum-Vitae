

import React from 'react';
import { getImages } from '../helpers/getImages';
import './Styles/datosPersonales.css';

export const RedesSociales = ({img, info, href}) => {
    return (
        <div className="redes_sociales">
            <img  src={getImages(`./${img}.png`).default} alt={`icono de ${img}`}/>
            <a href={href} className="col-md-8 ml-2">{info}</a>
        </div>
        // TODO:: Proptypes
    )
}
