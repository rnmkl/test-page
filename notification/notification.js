class Notification {
  constructor(name, options) {
    this.name = name;
    this.options = options
    console.log(this)
    Android.pass(this);
  }
}
