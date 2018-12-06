import React from 'react';
import {Route} from 'react-router-dom';

import Countries from './components/Countries/countries';
import CountriesList from './components/CountriesList/countriesList';
const BaseRouter = () => (
    <div>
        <Route exact path='/question1' component={Countries}/>
        <Route exac path='/question3' component={CountriesList}/>
    </div>
);

export default BaseRouter;