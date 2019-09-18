import { proxyData } from './Utils.js';

/**
 * 监听者/劫持者
 * @description 监听对象属性值的变化
 */
class Observer {
  constructor(value) {
    this.value = value;
    this.run(value);
  }
  /**
   * 遍历数据对象的所有属性 + 监听所有属性变化
   */
  run(){
    Object.keys(value).forEach(key => proxyData(this.value, key, value[key]));
  }
}

export default Observer;