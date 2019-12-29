import _ from 'lodash'
import './style.css';
import './style.scss';
import logo from './e-town0010-s1024_town0010_11-480x302.jpg'

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');
const image = new Image()
image.src = logo
document.body.appendChild(image);