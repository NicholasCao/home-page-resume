import './less/normalize.less'
import './less/main.less'
import '../static/twitter.svg'
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

