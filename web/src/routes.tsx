import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanageContato from './pages/OrphanageContato';
import OrphanageMap from './pages/OrphanageMap';

function Routes(){
    return(
        <BrowserRouter>
            {/* Switch usado para executar uma unica
            rota por vez */}
            <Switch>
                {/* o route faz com a gente tenha
                a facilidade de colocar o caminho da rota
                através do path. exemplo: http:locahost:3000'/app' */}
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrphanageMap}/>

                <Route path="/orphanages/create" component={CreateOrphanage}/>
                <Route path="/orphanages/:id" component={Orphanage}/>

                <Route path="/contato/:id" component={OrphanageContato}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;