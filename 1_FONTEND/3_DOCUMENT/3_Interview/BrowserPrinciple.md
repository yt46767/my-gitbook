<!-- toc -->
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
<!-- endtoc -->