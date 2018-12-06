import React from 'react';
import {Route} from 'react-router-dom';

import Countries from './components/Countries/countries';
import CountriesList from './components/CountriesList/countriesList';
import Slots from './components/Slots/slots';

const BaseRouter = () => (
    <div>
        <Route exact path='/question1' component={Countries}/>
        <Route exact path='/question3' component={CountriesList}/>
        <Route exact path='/question4' component={Slots}/>
    </div>
);

export default BaseRouter;