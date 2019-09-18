let uid = 0;

/**
 * 用于储存订阅者并发布消息
 */ 
class Subscriber {
  constructor() {
    /**
     * 设置id
     * 作用：
     *  用于区分新Watcher和只改变属性值后新产生的Watcher
     */
    this.id = uid++;
    // 储存订阅者监听内容的数组，其元素是监听者
    this.subs = [];
  }
  /**
   * 新增监听
   * 说明：
   *  触发target上Watcher的add方法，参数为Subscriber实例本身
   */
  addWatch() {
    Subscriber.target.add(this);
  }
  // 新增订阅者
  add(sub) {
    this.subs.push(sub);
  }
  // 通知订阅者
  notify() {
    // 通知所有的订阅者(Watcher)，触发订阅者的相应逻辑处理
    this.subs.forEach(sub => sub.update());
  }
}
// 为Subscriber类设置一个静态属性,默认为null,工作时指向当前的Watcher
Subscriber.target = null;

export default Subscriber;