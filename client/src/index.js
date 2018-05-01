'use strict';

import _ from 'lodash';
import clock from './clock.js';
import time from './displayDate.js';
function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.appendChild(component());
