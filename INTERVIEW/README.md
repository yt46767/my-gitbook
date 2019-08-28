<!-- toc -->
## HTTP
### 状态码
### HTTP1、HTTP2版本区别<b style="color:#52ea5f;">[优化点]</b>
  HTTP2压缩消息头，减少带宽，提高传输速率
### 访问过程
## 算法
### 递归
### 二叉分法
### 冒泡法

## 前端原理
### javascript预解释
  + 读取var a
  + 查看当前作用域（集合）是否有当前变量声明
    + 没有，则当前作用域（集合）声明此变量
    + 有，则忽略    

## 浏览器原理
### 进程
### V8引擎（javascript引擎）
  + javascript执行
    + 读取a = 2
      + 查找当前作用域（集合）是否当前变量声明
        + 有，则赋值
        + 没有，则向上级作用域（集合）查找  
         
### 安全
  + 参考:     
  https://blog.csdn.net/qq_36367995/article/details/8027921
#### XSS攻击（跨站脚本攻击）
+ ##### 原理   
  <span style="display: inline-block;width:20px;"></span>利用html的一些漏洞来进行注入脚本
+ ##### 例子   
  ```
  （1）插入一个script标签<script>,或者直接进行页面弹窗
  （2）通过你的input植入脚本，获取数据库内容
  ```
+ ##### 防御<b style="color:#52ea5f;">[安全点]</b>
      + 输入过滤
        + 输入侧过滤  
          + 方法一   
            ```
            escape('XXXX')
            ```
          + 方法二   
            转义HTML   
            <span style="display: inline-block;width:20px;"></span>采用完善的转义库  
          + 结论    
            <span style="display: inline-block;width:20px;"></span>解决特定的XSS问题
      + 纯前端渲染   
        <span style="display: inline-block;width:20px;"></span>静态HTML、明确告诉浏览器设置的内容（比如：文本、样式、属性）不让浏览器被欺骗、不包含业务数据

#### CSRF攻击（跨站点伪造请求）
  + ##### 原理      
    <span style="display: inline-block;width:20px;"></span>攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己曾经认证过的网站并运行一些操作（如发邮件，发消息，甚至财产操作如转账和购买商品）。
  + ##### 例子   
    <span style="display: inline-block;width:20px;"></span>[【来源】](https://blog.csdn.net/ct_ts/article/details/89186077)假如一家银行用以运行转账操作的URL地址下： 
    ```
    http://www.examplebank.com/withdrawaccount=AccoutName&amount=1000&for=PayeeName    
    ```   
    <span style="display: inline-block;width:20px;"></span>那么，一个恶意攻击者可以在另一个网站上放置如下代码：
    ```
    <imgsrc="http://www.examplebank.com/withdrawaccount=Alice&amount=1000&for=Badman">
    ```
    <span style="display: inline-block;width:20px;"></span>如果有账户名为Alice的用户访问了恶意站点，而她之前刚访问过银行不久，登录信息尚未过期，那么她就会损失1000资金。
  + ##### 防御<b style="color:#52ea5f;">[安全点]</b>   
    （1）判断http的header中Referer字段，是否与目标地址同域。   
    （2）请求入参，增加token字段校验。token由账户+密码+时间戳+随机数组成，它具有时效性。 

#### SQL 注入
  + 原理
  + 解决   

## 主流框架
### vue  
#### 实现原理   
#### 数据双向绑定
  + 实现原理
### react   
  + 实现原理 
#### 数据单向绑定
  + 实现原理
### router
  + 实现原理
### 小程序
#### 微信小程序
#### 支付宝小程序
#### 头条小程序
#### 京东小程序
#### 百度小程序

## 状态管理器
### redux
  + 实现原理
### vuex
  + 实现原理

## 语言
### 前端
#### CSS
+ ##### 优先级
  1. 基本公式：  
  ```
  内联 > ID选择器 > 类选择器 > 标签选择器
  ```

  2. 复杂样式的计算方法：   
  ``` 
  A 的值等于 1 的前提是存在内联样式, 否则 A = 0   
  B 的值等于 ID选择器 出现的次数   
  C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数   
  D 的值等于 标签选择器 和 伪元素 出现的总次数
  ```  

  3. 计算出：
  ```
  {A,B,C,D}
  ```   

  4. 排序方法： 
  ```   
  A比较，谁大谁优先级高   
  A相等时，   
  B比较，谁大谁优先级高   
  B相等时，   
  C比较，谁大谁优先级高   
  C相等时，   
  D比较，谁大谁优先级高    
  D相等时，   
  谁位置靠后谁优先级高 
  ```

+ ##### 伪类、伪元素的区别
+ ##### 单位
  + ###### px
    + 概念：   
      <span style="display: inline-block;width:20px;"></span>精准像素
  + ###### em   
    + 概念：   
      <span style="display: inline-block;width:20px;"></span>相对单位
    + 计算：   
      <span style="display: inline-block;width:20px;"></span>基准点为父节点的字体大小，如果自身节点定义字体大小，则优先基于自身
  + ###### rem
    + 概念：     
      <span style="display: inline-block;width:20px;"></span>相对单位
    + 计算    
      <span style="display: inline-block;width:20px;"></span>基准点为根节点html的字体大小
    + 兼容   
      <span style="display: inline-block;width:20px;"></span>css3新增属性，支持chrome/firefox/IE9 

#### JavaScript
+ ##### ES6特性
+ ##### ES7特性
+ ##### ES8特性
+ ##### ES9特性
#### TypeScript

### 后端
#### NodeJS
+ ##### 模块
###### 异步编程【重点】
###### koa
  + 原理机制
###### co
  + 原理机制
###### async
  + 原理机制
+ ##### v8引擎
  + 特点
  + 好处
+ ##### 疑难点 
###### 性能、稳定性、内存瓶颈优化 
  + 描述    
    node.js以及V8的性能和稳定性优化，能对系统整体性能评估，解决内存瓶颈
###### 高并发解决方案

## 备注
### [伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)
  ```
  (常见) 
  ::before (:before)
  ::after (:after)      
  ::first-letter (:first-letter)    
  ::first-line (:first-line)      
  ::placeholder    
  ::selection   
  ::backdrop 
  (不常见) 
  ::grammar-error    
  ::marker  
  ::slotted()   
  ::spelling-error     
  ::cue (:cue)  
  ```
### [伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)
  ```
  (切换元素状态)
  :focus
  :hover
  :active
  :visited
  :link
  (元素位置)
  :first-child
  :last-child
  :nth-child()
  (元素状态)
  :checked
  :disabled
  :read-only
  :required
  :read-write
  (不常见)
  :nth-last-child()
  :any
  :default
  :dir()
  :empty
  :enabled
  :first
  :first-of-type
  :fullscreen
  :indeterminate
  :in-range
  :invalid
  :lang()
  :last-of-type
  :left
  :not()
  :nth-last-of-type()
  :nth-of-type()
  :only-child
  :only-of-type
  :optional
  :out-of-range
  :right
  :root
  :scope
  :target
  :valid
  ```
<!-- endtoc -->