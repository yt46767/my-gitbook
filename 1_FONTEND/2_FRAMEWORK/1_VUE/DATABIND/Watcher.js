import Subscriber from './Subscriber.js';

class Watcher {
  constructor(vm, subedData, cb) {
    this.subIds = {}; // hash储存订阅者的id，避免重复的订阅者
    this.vm = vm; // vm指向当前Vue实例，并保存
    this.cb = cb; // 当数据更新时，想要做的事情
    this.subedData = subedData; // 被订阅的数据
    this.val = this.get(); // 储存更新之前的数据
  }
  // 用于在订阅的数据被更新时，由订阅者管理员(Subscriber)调用
  update() {
    const val = this.get(); //获取当前新值
    if (val !== this.val) {
      this.val = val;
      this.cb.call(this.vm, val);
    }
  }
  /**
   * @param {*} sub 当前订阅者对象
   */
  add(sub) {
    /**
     * 如果在subIds的hash中没有当前的id，可以判断是新Watcher，因此可以添加到sub的数组中储存
     * 此判断是避免同id的Watcher被多次储存
     */
    if (!this.subIds.hasOwnProperty(sub.id)) {
      sub.add(this); //管理监听者
      this.subIds[sub.id] = sub;
    }
  }
  get() {
    // 当前订阅者(Watcher)读取被订阅数据更新后的值时，通知订阅者管理员收集当前订阅者
    Subscriber.target = this; //工作时指向当前的Watcher
    const val = this.vm._data[this.subedData];
    // 置空，用于下一个Watcher使用
    Subscriber.target = null;
    return val;
  }
}

export default Watcher;