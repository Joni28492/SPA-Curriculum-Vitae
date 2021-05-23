


import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { getImages } from '../helpers/getImages';
import { uiContext } from './UiContext';
import '../components/Styles/navbar.css';


export const Navbar = () => {

    const store = useContext(uiContext);
    // console.log(store);
    const {colors} = store;
    
    // los colores los obtenemos del store
    const [colorNavbar, setColorNavbar] = useState(colors.red)
  
    //hook de reactRouter para acceder al url
    const {pathname} = useLocation();
    
    useEffect(() => {
        // console.log(pathname);
        (pathname === '/home') && setColorNavbar(colors.red); 
        (pathname === '/formacion') && setColorNavbar(colors.orange); 
        (pathname === '/experiencia') && setColorNavbar(colors.lime); 
        (pathname === '/cursos') && setColorNavbar(colors.blue); 
        (pathname === '/about') && setColorNavbar(colors.brown); 
       //no desestructuramos para no llenar las dependencias del useEffect
    }, [pathname, colors])

    return (
        <>
         
            <nav className="navbar navbar-expand-sm navbar-dark" style={{
                background: `${colorNavbar}`
            }}>
                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/home">
                            Inicio
                        </NavLink>
                        <NavLink activeClassName="active" className="nav-item nav-link"  exact to="/formacion">
                            formacion
                        </NavLink>
                        <NavLink activeClassName="active" className="nav-item nav-link"  exact to="/experiencia">
                            experiencia
                        </NavLink>
                        <NavLink activeClassName="active" className="nav-item nav-link"  exact to="/cursos">
                            Cursos
                        </NavLink>
                        <NavLink activeClassName="active" className="nav-item nav-link"  exact to="/about">
                            Sobre mi
                        </NavLink>

                        <div className="foto-navbar">
                            <img  src={getImages('./foto-carnet.jpg').default} alt="foto perfil navbar"/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
