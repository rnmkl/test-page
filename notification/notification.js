class Notification {
  constructor(name, options) {
    this.name = name;
    this.options = options
    console.log('name=', name);
    console.log('opt =', options);
    let n = this;
    Android.pass(JSON.stringify(n));
  }
  requestPermission() {
    return "granted";
  }
  requestPermission(callback) {
    callback("granted");
  }
}
