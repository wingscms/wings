import React from 'react';
import { Elements } from 'react-stripe-elements';

export default Comp => props => <Elements><Comp {...props} /></Elements>;
