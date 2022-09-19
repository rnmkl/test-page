class Notification {
  constructor(name, options) {
    this.name = name;
    this.options = options
    console.log('name=', name);
    console.log('opt =', options);
    try {
      Android.pass(this);
    } catch (e){
      console.log(e)
    }
  }
  requestPermission() {
    return "granted";
  }
  requestPermission(callback) {
    callback("granted");
  }
}
