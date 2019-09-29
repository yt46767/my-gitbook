import { observeData } from 'Utils.js';
import Watcher from './Watcher.js';
/**
 * @param options 所有数据
 */
class Vue {
  constructor(options = {}) {
    // 简化了$options的处理
    this.$options = options;
    /**
     * 简化了对data的处理
     * 作用：
     *  既声明内部属性(_data)又定义内部变量(data)
     * 等价于: 
     *  this._data = this.$options.data;
     *  let data = this._data;
     */
    let data = (this._data = this.$options.data);
    // 将data代理到Vue实例上的_data上
    Object.keys(data).forEach(key => this._proxy(key));
    // 监听数据
    observeData(data);
  }
  /**
   * @param {*} subedData 被订阅的数据
   * @param {*} cb 回调函数
   * @description 
   * 1.对外暴露，调用订阅者的接口
   * 2.内部，主要在指令中使用订阅者 
   */
  $watch(subedData, cb) {
    new Watcher(this, subedData, cb);
  }
  // 数据劫持
  _proxy(key) {
    Object.defineProperty(this, key, {
      configurable: true,
      enumerable: true,
      get: () => this._data[key],
      set: val => {
        this._data[key] = val;
      },
    });
  }
}