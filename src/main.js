import './less/normalize.less'
import './less/main.less'

import printMe from './print.js'
import defineReactive from './utils/defineReactive.js'

var data = {
  scrollingLock: false
}

const imgUrl = []
// window.onload = (() => {
//   window.onmousewheel = e => {
//     e.stopPropagation()
//     e.preventDefault()
//     if (e.wheelDelta < -40) {
//       // data.scrollingLock = true
//       console.log(1)
//     }
//   }
// })()



