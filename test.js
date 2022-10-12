(function(){
    console.log('LOADED')    
})()

function msisdnClick(mob) {
    console.log('mob=' + mob)
    return true
}

function codeClick(fill, code) {
    console.log('fill=' + fill)
    console.log('code=' + code)
    return false
}

class Notification {
  constructor(name, options) {
    this.name = name;
    this.options = options
    console.log(this)
    Android.pass(this);
  }
}
