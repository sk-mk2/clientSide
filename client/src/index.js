import _ from 'lodash';
import clock from './clock.js';
function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.appendChild(component());
