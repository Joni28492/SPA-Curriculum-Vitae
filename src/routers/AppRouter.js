import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
} from "react-router-dom";
import { AboutScreen } from '../components/AboutScreen';
import { CursosListScreen } from '../components/CursosListScreen';
import { DatosPersonales } from '../components/DatosPersonales';
import { ExperienciaScreen } from '../components/ExperienciaScreen';
import { FormacionScreen } from '../components/FormacionScreen';
import { HomeScreen } from '../components/HomeScreen';
import { Navbar } from '../ui/Navbar';



    //TODO::Modal para tarjeta personal
    //TODO::Componente para formacion
    //TODO::Componente con mas datos sobre mi hobbys y algo mas sobre mi
    //TODO::Componente cursos extra online etc... con enlace a los certificados o imagen
    

export const AppRouter = () => {
    
    return (
      <>
        
        <Router>
            <div>
            <Navbar />

            

              <Switch>
                <Route exact path="/home" component={HomeScreen} />
                <Route exact path="/formacion" component={FormacionScreen} />
                <Route exact path="/experiencia" component={ExperienciaScreen} />
                <Route exact path="/cursos" component={CursosListScreen} />
                <Route exact path="/about" component={AboutScreen} />
                <Redirect to="/home" />
              </Switch>
            </div>
        </Router>
        <DatosPersonales />
      </>

      
    );
}
