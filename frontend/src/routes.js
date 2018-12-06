import React from 'react';
import {Route} from 'react-router-dom';

import Countries from './components/Countries/countries';

const BaseRouter = () => (
    <div>
        <Route exact path='/question1' component={Countries}/>
    </div>
);

export default BaseRouter;