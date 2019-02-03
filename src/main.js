import './less/normalize.less'
import './less/main.less'

import printMe from './print.js'
import defineReactive from './utils/defineReactive.js'

var data = {
  scrollingLock: false
}
const url = 'https://nicholas-profile.oss-cn-shenzhen.aliyuncs.com/'
const imgs = [
  'a.jpg',
  'b.jpg',
  'c.jpg',
  'd.jpg',
  'e.jpg'
]
var photos = document.getElementsByClassName('photo')
var random1 = Math.floor(Math.random()*5)
var random2 = Math.floor(Math.random()*5)
while (random1 == random2){
  var random2 = Math.floor(Math.random()*5)
}
photos[0].src = url + imgs[random1]
photos[1].src = url + imgs[random2]
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



