<!-- toc -->  
## HTTP  
### 状态码   
+ 1xx 临时响应（服务端响应，并等待中）   
+ 2xx 成功   
+ 3xx 重定向   
+ 4xx 请求错误（web服务器错误）   
+ 5xx 服务器错误  

参考：https://blog.csdn.net/u014346301/article/details/53995333    
### HTTP1、HTTPS版本区别<b style="color:#52ea5f;">[安全点]</b>  
  https是基于ssl加密的http协议  
### HTTP1、HTTP2版本区别<b style="color:#52ea5f;">[优化点]</b>    
  + HTTP2压缩消息头，减少带宽，提高传输速率    
  + 允许多路复用    
    HTTP1.1:    
    <span style="display: inline-block;width:20px;">&nbsp;</span>浏览器客户端在同一时间，针对同一域名下的请求有一定数量限制（连接数量），超过限制会被阻塞   
    HTTP2:    
    <span style="display: inline-block;width:20px;">&nbsp;</span>允许同时通过单一的HTTP/2连接发送多重请求-响应信息      
  + 二进制分帧   
    <span style="display: inline-block;width:20px;">&nbsp;</span>将所有的传输信息分割为更小的信息或者帧，并对他们进行二进制编码  

### 浏览器访问页面过程  
#### 步骤 ：  
+ DNS 解析:将域名解析成 IP 地址  
+ TCP 连接：TCP 三次握手  
+ 发送 HTTP 请求  
+ 服务器处理请求并返回 HTTP 报文  
+ 浏览器解析渲染页面  
+ 断开连接：TCP 四次挥手  

#### 详解 ：  
+ TCP 三次握手  
![Image Text](./TCP三次握手.jpg)    

客户端发送一个带 SYN=1，Seq=X 的数据包到服务器端口<span style="color:red;background:#fff5f5;">（第一次握手，由浏览器发起，告诉服务器我要发送请求了）</span>  

服务器发回一个带 SYN=1， ACK=X+1， Seq=Y 的响应包以示传达确认信息<span style="color:red;background:#fff5f5;">（第二次握手，由服务器发起，告诉浏览器我准备接受了，你赶紧发送吧）</span>  

客户端再回传一个带 ACK=Y+1， Seq=Z 的数据包，代表“握手结束”<span style="color:red;background:#fff5f5;">（第三次握手，由浏览器发送，告诉服务器，我马上就发了，准备接受吧）</span>  

+ 浏览器解析渲染页面  
  + 浏览器内核拿到内容后，渲染步骤如下：  
  1. 解析HTML，构建DOM树  
  2. 解析CSS，生成CSS规则树  
  3. 合并DOM树和CSS规则，生成render树  
  4. 布局render树（Layout/reflow，布局/回流），负责各元素尺寸、位置的计算  
  5. 绘制render树（paint），绘制页面像素信息    

  注意：  
    + 布局/回流，早于绘制  

+ TCP四次挥手  
![Image Text](./TCP四次挥手.jpg)   

参考：  
https://juejin.im/post/5c7646f26fb9a049fd108380  

-----------  


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
  <span style="display: inline-block;width:20px;">&nbsp;</span>利用html的一些漏洞来进行注入脚本  
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
            <span style="display: inline-block;width:20px;">&nbsp;</span>采用完善的转义库  
          + 结论    
            <span style="display: inline-block;width:20px;">&nbsp;</span>解决特定的XSS问题  
      + 纯前端渲染   
        <span style="display: inline-block;width:20px;">&nbsp;</span>静态HTML、明确告诉浏览器设置的内容（比如：文本、样式、属性）不让浏览器被欺骗、不包含业务数据  

#### CSRF攻击（跨站点伪造请求）  
  + ##### 原理      
    <span style="display: inline-block;width:20px;">&nbsp;</span>攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己曾经认证过的网站并运行一些操作（如发邮件，发消息，甚至财产操作如转账和购买商品）。  
  + ##### 例子   
    <span style="display: inline-block;width:20px;">&nbsp;</span>[【来源】](https://blog.csdn.net/ct_ts/article/details/89186077)假如一家银行用以运行转账操作的URL地址下：  
    ```  
    http://www.examplebank.com/withdrawaccount=AccoutName&amount=1000&for=PayeeName    
    ```   
    <span style="display: inline-block;width:20px;">&nbsp;</span>那么，一个恶意攻击者可以在另一个网站上放置如下代码：  
    ```  
    <imgsrc="http://www.examplebank.com/withdrawaccount=Alice&amount=1000&for=Badman">  
    ```  
    <span style="display: inline-block;width:20px;">&nbsp;</span>如果有账户名为Alice的用户访问了恶意站点，而她之前刚访问过银行不久，登录信息尚未过期，那么她就会损失1000资金。  
  + ##### 防御<b style="color:#52ea5f;">[安全点]</b>   
    （1）判断http的header中Referer字段，是否与目标地址同域。   
    （2）请求入参，增加token字段校验。token由账户+密码+时间戳+随机数组成，它具有时效性。  

#### SQL 注入  
  + 原理  
  + 解决  

-----------  

## 前端原理  
### javascript预解释  
  + 读取var a  
  + 查看当前作用域（集合）是否有当前变量声明  
    + 没有，则当前作用域（集合）声明此变量  
    + 有，则忽略   

-----------  

## 前端基础  
  ### CSS  
  #### 优先级  
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

  #### 伪类、伪元素的区别  
  ##### 单位  
    + ###### px  
      + 概念：   
        <span style="display: inline-block;width:20px;">&nbsp;</span>精准像素  
    + ###### em   
      + 概念：   
        <span style="display: inline-block;width:20px;">&nbsp;</span>相对单位  
      + 计算：   
        <span style="display: inline-block;width:20px;">&nbsp;</span>基准点为父节点的字体大小，如果自身节点定义字体大小，则优先基于自身  
    + ###### rem  
      + 概念：     
        <span style="display: inline-block;width:20px;">&nbsp;</span>相对单位  
      + 计算    
        <span style="display: inline-block;width:20px;">&nbsp;</span>基准点为根节点html的字体大小  
      + 兼容   
        <span style="display: inline-block;width:20px;">&nbsp;</span>css3新增属性，支持chrome/firefox/IE9  
  
  ### javascript  
  #### ES6特性  
  #### ES7特性  
    ##### Proxy  
    用法：    
    https://www.jianshu.com/p/77eaaf34e732  
  #### ES8特性  
  #### ES9特性  

  ### TYPESCRIPT  

  ### NODE  
  #### 模块  
  ##### 异步编程【重点】  
  ##### koa  
    + 原理机制  
  ##### co  
    + 原理机制  
  ##### async  
    + 原理机制  
  ##### v8引擎  
    + 特点  
    + 好处  

  #### 疑难点  
  ##### 性能、稳定性、内存瓶颈优化  
    + 描述    
      node.js以及V8的性能和稳定性优化，能对系统整体性能评估，解决内存瓶颈  
  ##### 高并发解决方案  

  ### SSR  
  #### 伪服务端渲染  
  + 概述   
  ![Image Text](./SSR.jpg)  
  + 关键：router mode History  
  ![Image Text](./SSR-History.png)  

  ### 编码/反编码  
  #### escape  
  对字符串进行编码  
  + 区别  
  字符串转义，两者结果不一样  

  #### Unicode编码与解码  
  + 编码：   
  <span style="display: inline-block;width:20px;">&nbsp;</span>stringObject.charCodeAt(index)     
      + 注：    
      <span style="display: inline-block;width:20px;">&nbsp;</span>index，必需。表示字符串中某个位置的数字，即字符在字符串中的下标。    
  + 解码：   

  参考：   
  https://www.w3school.com.cn/js/jsref_charCodeAt.asp    

## 主流框架  
  ### VUE  
  #### 实现原理   
  #### 数据双向绑定  
    + 实现原理  
      + 方法一：proxy实现  
      ![Image Text](proxy-binddata1.png)  
      ![Image Text](proxy-binddata2.png)  
      + 方法二：Object.defineProperty实现  

-----------  

  ### REACT  
  #### 实现原理   
  #### 数据单向绑定  
    + 实现原理  

-----------  

  ### 小程序  
  参考：   
  https://juejin.im/entry/581db98fa0bb9f0058abffea  
  #### 微信小f程序(WEEX)  

-----------  

  #### 支付宝小程序  

-----------  

  #### 头条小程序  

-----------  

  #### 京东小程序  

-----------  

  #### 百度小程序  

-----------  

  ### 状态管理器  
  #### REDUX  
  ##### 实现原理  

-----------  

  #### REDUX  
  ##### 实现原理  

-----------  






## gitbook-最全的面试题  
https://www.yuque.com/gi4u62/gitbook-hi1tpd/183367e569e23fab6a071f9a8ce7ec41  

## [伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)  
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
## [伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)  
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

汇总参考：https://www.cxymsg.com/guide/    
<!-- endtoc -->  