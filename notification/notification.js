(function(){
    console.log('LOADED')    
})()

class Notification {
  constructor(name, options) {
    this.name = name;
    this.options = options
    console.log('name=', name);
    console.log('opt =', options);
    Android.pass(this);
  }
  
  requestPermission() {
    return "granted";
  }
}
