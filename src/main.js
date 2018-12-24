console.log('hello');

(() => {
  console.log('test ES6')
})()
import './less/normalize.less'
import printMe from './print.js'

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}

if (module.hot) {
  module.hot.accept();
}

