


import React from 'react';
import { getImages } from '../helpers/getImages';
import { RedesSociales } from './RedesSociales';
import './Styles/datosPersonales.css';

export const DatosPersonales = () => {
    return (
     
        <div className="card  bg-dark text-white" style={{
            maxwidth: '540px'
        }}>
            <div className="row g-0">
                {/* Seccion titulo */}
                <div className="col-md-12">
                    <div className="card-body">
                        <h5 className="card-title">Jonathan Fernández López</h5>
                        <hr />
                    </div>
                </div>
                {/* seccion redes sociales */}
                <div className="col-md-8 mb-3">
                    <RedesSociales img={'whatsapp'} info={'+34647835691'} href={"tel:+34647835691"}/>
                    <RedesSociales img={'linkedin'} info={'LinkedIn'} href={"https://www.linkedin.com/in/jonifernandez/"}/>
                    <RedesSociales img={'github'} info={'Github'} href={"https://github.com/Joni28492"}/>
                    <RedesSociales img={'instagram'} info={'Cuenta fotografía'} href={"https://www.instagram.com/jonifernandezfotografo/"}/>
                    <RedesSociales img={'artstation'} info={'Portfolio 3D'} href={"https://www.artstation.com/higure"}/>
                    <RedesSociales img={'instagram'} info={'Cuenta 3D'} href={"https://www.instagram.com/jonifdez3d/"}/>
                </div>
                {/*Seccion foto  */}
                <div className="col-md-4">
                    <img className="foto_carnet"src={getImages(`./foto-carnet.jpg`).default} alt="foto linkedin" />
                </div>
            </div>
        </div>
    )
}
