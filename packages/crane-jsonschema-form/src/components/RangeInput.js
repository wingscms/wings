import React from 'react';
import Input from './Input';
import { getRange } from './formUtils';

export default props => <Input type="range" {...props} {...getRange(props)} />;
