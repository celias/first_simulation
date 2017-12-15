import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import ShelfA from './components/ShelfA.js';
// import ShelfB from './components/ShelfB.js';
// import ShelfC from './components/ShelfC.js';
// import ShelfD from './components/ShelfD.js';


export default (
<Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/bins/1" component={ ShelfA } />
</Switch> 
)


