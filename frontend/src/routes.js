import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch> 
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/incidents/new" component={NewIncident} />
        </Switch>
        </BrowserRouter>
    )
}

/**
 * Switch: Apenas uma rota por vez, nunca vai chamar mais de uma rota
 * O exact da linha 11 serve para a primeira rota não atrapalhar as demais, pois o route path nao
 * verifica toda a url, apenas se tivesse / iria sempre cair na primeira, ent o exact serve para
 * dizer q a rota precisa ser exatamente / para cair na rota de Logon
 * 
 */