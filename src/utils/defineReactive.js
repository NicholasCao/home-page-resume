function defineReactive (obj, key, val, cb) {
  Object.defineProperty(obj, key, {
    get: function () {
      return val
    },
    set: function (newValue) {
      if (newValue == val) return
      val = newValue
      cb()
    }
  })
}