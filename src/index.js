//CommonJS 모듈을 가져오는 방법 require => import
var _ =require('lodash');
import './style.css';
import './hello.scss';
//es6 named import
import {area} from './js/circle';
//es6 defalt import, 이름을 바꿀수 있다.
import volume from './js/cube';


function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!12323'], ' ');

  return element;
}

document.body.appendChild(component());
console.log(area(5));
console.log(volume(5));