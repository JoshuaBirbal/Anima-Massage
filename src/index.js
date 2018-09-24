import _ from 'lodash';
import style from './style.css';
import Icon from './icon.png';


function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
  }

  document.body.appendChild(component());
