import './less/normalize.less'
import './less/main.less'

import printMe from './print.js'
import defineReactive from './utils/defineReactive.js'

data = {
  
}



if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}

if (module.hot) {
  module.hot.accept();
}

