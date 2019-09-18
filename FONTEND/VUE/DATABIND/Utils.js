import Observer from './Observer.js';
import Subscriber from './Subscriber.js';

/**
 * 数据过滤 + 数据劫持
 */
function observeData(value) {
  // 当值不存在，或者不是复杂数据类型时，不再需要继续深入监听
  if (!value || typeof value !== 'object') {
    return;
  }
  return new Observer(value);
}

/**
 * 
 */
function proxyData(obj, key, val) {
  const Sub = new Subscriber();
  // 给当前属性值添加监听
  let chlidOb = observeData(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      /**
       * 1. 如果Subscriber类存在target属性，将其添加到Sub实例的subs数组中
       * 2. target指向一个Watcher实例，每个Watcher都是一个订阅者,
       * 3. Watcher实例在实例化过程中，会读取data中的某个属性（从而触发当前get方法）
       */
      if (Subscriber.target) {
        Sub.addWatch();
      }
      return val;
    },
    set: newVal => {
      // 判断是否变化
      if (val === newVal) return;
      val = newVal;
      // 对新值进行监听
      chlidOb = observeData(newVal);
      // 通知所有订阅者，数值被改变了
      Sub.notify();
    }
  });
}
export {
  observeData,
  proxyData
}