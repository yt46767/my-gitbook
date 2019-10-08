## Spring MVC

### 1. spring
    - 描述
      - 非侵入式
        - 描述
          - 非侵入式是指Spring框架的API不会在业务逻辑上出现，我们的业务逻辑应该是纯净的
      - 容器
        - 描述
          - 可以写一个配置文件（通常是xml文件）
          - 在上面定义对象的名字，是否是单例，以及设置与其他对象的依赖关系
          - 在容器启动之后，这些对象就被实例化好了，你直接去用就好了，而且依赖关系也建立好了
          - 注：
            - xml文件，是一个容器
            - 单例
              - 描述
            　　- 1、单例类只能有一个实例。
            　　- 2、单例类必须自己创建自己的唯一实例。
            　　- 3、单例类必须给所有其他对象提供这一实例。
                - 单例模式确保某个类只有一个实例，而且自行实例化并向整个系统提供这个实例
        - 概述
          - 通过xml文件容器配置，java启动读取，实现容器的价值
      - IOC（控制反转）
      - 依赖注入
        - 描述
          - 建立对象与对象之间依赖关系的实现
          - 构造注入、set注入
      - AOP（面向方面编程）
        - 描述
          - 把日志、安全、事务管理等服务（或功能）理解成一个“方面”，完全可以剥离出来做到复用，将“方面”动态的插入到业务逻辑中
    - doc
      http://blog.163.com/jiqiang_1984/blog/static/156664820102190325615/

### 2. 整体思路
      一个前端控制器统一接收和解析请求，再根据的URL，将请求分发到 Controller

### 3. 前端控制器（FrontController）
    - 描述：
      - 1. 实现了对应接口的DispatcherServlet
      - 2. 通过 RequestMapping 和 Controller 注解标识映射规则，无需通过接口依赖实现控制i器
      - 3. 通过 internalResourceViewResolver 根据URL和视图名称查找视图，核心接口是 ViewResolver

### 4. 开发
    - （1）Spring MVC 初始化
      - （没有这步骤）
      - 注：
        - 采用注解映射 URL 和 Controller ，因此没有对应的步骤
        - 需要我们配置 DispatcherServlet 以及其对应的 URL ，来达到接管所有请求的目的
        - Spring 已经利用 Servlet3.0 定义的 ServletContainerInitializer 机制，为我们提供了默认的 AbstractAnnotationConfigDispatcherServletInitializer
        - 只需要像继承 HttpApplication 的 MvcApplication 一样，写一个 MyWebApplicationInitializer
    - （2）URL 和 View 的映射
      - 实现：
          package s4s;

          import org.springframework.context.annotation.ComponentScan;
          import org.springframework.context.annotation.Configuration;
          import org.springframework.web.servlet.config.annotation.DelegatingWebMvcConfiguration;
          import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
          import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
          import org.springframework.web.servlet.view.InternalResourceViewResolver;

          public class MyWebApplicationInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

              @Override
              protected Class<?>[] getRootConfigClasses() {
                  return new Class[] { AppConfig.class };
              }

              @Override
              protected Class<?>[] getServletConfigClasses() {
                  return new Class[] { AppConfig.class };
              }

              @Override
              protected String[] getServletMappings() {
                  return new String[] { "/" };
              }

          }

          @Configuration
          @ComponentScan
          class AppConfig extends DelegatingWebMvcConfiguration {

              @Override //重写
              protected void configureViewResolvers(ViewResolverRegistry registry) {
                  InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
                  viewResolver.setPrefix("/WEB-INF/views/");
                  viewResolver.setSuffix(".jsp");
                  registry.viewResolver(viewResolver);
              }
          }
      - 注：
        - Spring MVC 的 internalResourceViewResolver 没有提供默认值，因此，我们如果不定义 Path 和扩展名，只需要 MyWebApplicationInitializer 即可。
        - （实践操作）一般我们会指定将 View 放置在统一的视图目录中，使用特定的扩展名。
        - Spring 同样提供了 DelegatingWebMvcConfiguration ，我们只需写一个自己的 AppConfig 继承它，重写 configureViewResolvers 方法即可。
    - （3）URL 和 Controller 的映射
      - 两个注解：Controller 和 RequestMapping
      - 注:
        - 我们简单的定义一个 POJO MyController 以及其简单的Home方法.
        - 并应用上述注解：
                              package s4s;

                              import org.springframework.stereotype.Controller;
                              import org.springframework.web.bind.annotation.RequestMapping;

                              @Controller
                              public class MyController {

                                  @RequestMapping("/")
                                  public String Home() {
                                      return "home";
                                  }
                              }
        - （实际操作）添加 /WEB-INF/views/home.jsp 视图文件，就完成了最简单的示例
    - （4）使用 Model
      - Spring MVC 中 View 和 Model 是一对多的，提供了 ModelMap 和其子类 ModelAndView
      - ModelMap的基类是 LinkedHashMap<String, Object>
      - 我们修改 MyController 的代码，使用 ModelAndView 来传递一个简单 UserModel 模型，作为参数的 UserModel 对象 model，会自动将请求参数映射到 model 的属性。
      - 返回值 ModelAndView 时，只不过因为 Spring MVC 模型是多个模型的列表，我们还需要指定返回模型的 Name
      - 实现：
          package s4s;

          import org.springframework.stereotype.Controller;
          import org.springframework.web.bind.annotation.ModelAttribute;
          import org.springframework.web.bind.annotation.RequestMapping;
          import org.springframework.web.servlet.ModelAndView;

          @Controller
          public class MyController {
              @RequestMapping("/")
              public ModelAndView Home(@ModelAttribute UserModel model) {
                  model.setUserName(model.getUserName() + "~");
                  return new ModelAndView("home", "model", model);
              }
          }

          class UserModel {
              String userName = "";

              public String getUserName() {
                  return userName;
              }

              public void setUserName(String userName) {
                  this.userName = userName;
              }
          }
    - （5）使用 View



      - doc
        http://www.cnblogs.com/wawlian/archive/2012/11/17/2775435.html

- 仓库:
  - https://github.com/yt46767/SpringMVCSummary/blob/master/README.md
- doc:
  - http://www.android100.org/html/201605/30/240209.html


## 数据类型
### 1. 数据类型
    - 基本数据类型（8个）
      short、int、boolean、long、char、byte、float、double
      - 易漏
        short、byte、char、float、double
      - 注意
        byte的大小范围：8-128、127-0
      - doc
        http://blog.csdn.net/xyh94233/article/details/6929332
    - 易错数据类型：
    | 数据类型   |  位数  |  字节数 |
    | ----------------------------  |
    | double     |  64位  |   8字节 |
    | integer    |  32位  |   4字节 |
    | character  |  16位  |   2字节 |
    | unicode    |  8位   |   1字节 |
    | byte       |  8位   |   1字节 |
     -------------------------------

### 2.enum
    - doc
      http://www.cnblogs.com/hyl8218/p/5088287.html

### 3.arrayList & linkedList & vector
    - arrayList
      - 描述
        - 异步
        - 便于查询和修改
        - 不便于插入和删除
    - linkedList
      - 描述
        - 可扩展性
        - 便于插入和删除
        - 不便于查询和修改
    - vector
      - 描述
        - 同步
        - 可扩展性
        - 便于查询和修改
        - 不便于插入和删除

### 4.Hashtable & HashMap
    - Hashtable
      - 描述
        - 键值不允许为null
        - 同步
        - 继承Dectionary类
    - HashMap
      - 描述
        - 只允许一个键值为null
        - 异步
        - 非线程安全
        - 树型存储结构，实现Map接口

### 5.树 & 二叉树
    - 树
      - 描述
        - 不可以为空
        - 没有顺序关系
        - 度最多为N
        - 分支度为无限制
    - 二叉树
      - 描述
        - 可为空
        - 有顺序关系
        - 度最多为0
        - 分支度为0,1,2



## 方法
### 1.传参
      - 参数类型
        - 基本类型
        - 对象类型

### 2.参数
    - 形式参数
      - 定义函数时，写在括号里的参数
    - 实际参数
      - 调用函数时，写在括号里的参数

### 3.== & equals
    - ==
      - 描述
        -用于八种基本数据类型，是比值
    - equals
      - 描述
        - 用于对象，是比地址

### 4.this & super
    - this
      - 描述
        调用本类的属性和方法
      - 特殊
        public class className{
          public static dataType className1(dataType2 param2){
            /*
              错误
              static修饰方法，this不能使用
            */
            this.property = "111";
            this.method();
          }
        }
    - super
      - 描述
        调用父类的属性和方法
      - 特殊
        public class className{
          public static dataType className1(dataType2 param2){
            /*
              错误
              static修饰方法，super不能使用
            */
            super.property = "111";
            super.method();
          }
        }

### 5.length
    - 方法
      - 如：String.length();
    - 属性
      - 如：数组.length = 10;




## 异常
### 1.处理异常
    - 关键字
      - throw
        - 描述
          - 往方法内部抛出异常
      - throws
        - 描述
          - 往方法外部抛出异常
          - 常用
      - try
      - catch
      - finally





## 修饰符
### 1.final & static
    - final
      - 描述:
        - 修饰变量、方法、类
        - 作为全局变量，一定要附初始值
          - 如：
            public class className{
              public final dataType paramName = initialValue; //全局变量，一定要附初始值

              public void className1(dataType1 param1){
                final dataType1 paramName1; //全局变量，可不附初始值
              }
            }
          - 注：
            - 全局变量，才可以用public、protected、default、private
            - 类函数，才可以用public、protected、default、private
            - 方法变量，用不了public、protected、default、private

      - 特殊:
        final static ，一定要附初始值
        - 如：
          final static paramName  = initialValue;
      - "三不"
        - 不重写
          - 如：
            public class className{
              public final dataType className1(dataType1 param1){
                ...
              }
              /*
                错误
                final修饰的类方法，不能重写
              */
              public final dataType className1(dataType2 param2){
                ...
              }
            }
        - 不继承
          - 如：
            public final class className1 {
                ...
            }
            /*
              此题，错误
              final修饰类，不可被继承
            */
            public class className2 extends className1 {
                ...
            }
        - 不改变
          - 如：
            public class className{
              public final String paramName = "111";
              ...
              /*
                错误
                final修饰后，不能改变
              */
              paramName = "1";
            }
      - doc
        http://yqgao.blog.51cto.com/773490/170194
    - static
      - 描述:
        作为全局变量，可以不附初始值
        - 如：
          public class className{
            public static String paramName;

            public void className1(type1 param1){
              ...
            }
          }

### 2.访问控制符
    - 描述
       -----------------------------------------------
      | 访问控制符  | 类内部 | 本包  | 子类  | 外部包 |
       -----------------------------------------------
      | public      | 允许   | 允许  | 允许  | 允许   |
      | protected   | 允许   | 允许  | 允许  | 拒绝   |
      | default     | 允许   | 允许  | 拒绝  | 拒绝   |
      | private     | 允许   | 拒绝  | 拒绝  | 拒绝   |
       -----------------------------------------------
    - doc
      http://www.cnblogs.com/jingmengxintang/p/5898900.html



## 同步与异步
### 1.线程
    - 五种状态
      - 新建
      - 就绪
      - 运行
      - 阻塞
      - 终止
    - 线程同步
      - wait() 让当前线程等待
      - sleep() 在指定时间暂停线程
      - notify() 与 wait() 同时使用 ，相当于解锁
      - notifyAll() 全部解锁




## IO层
### 1.collection
    - 结构：
      ＩＯ管道流
      缓冲流
      转换流
      打印流
      回压流
      过滤流
      数据流
      内存流
      对象流
      随机访问流
      - 描述：
        可以将文件同时读写出来

### 2.字符流
    - 读取输入流
      InputStreamReader      ->         BufferedReader
      读 字节流 转 字符流 传 输入流     读 字符输入流
    - 发送输出流
      BufferedWriter   ->  OutputStreamWriter
      写 字符输出流        字符流 转 字节流 传 底层传输流

## 系统
### 1.GC
    - 描述：
      - GC, gabage collection, 垃圾回收
    - 达到回收的条件：
      - 对象超过作用域
    - 严重：
      - 错误的垃圾回收机制，将导致系统崩溃
    - 启动
      - 一事
        - System.gc();
      - 多事
        - Runtime.getruntime.gc();



仓库：
https://github.com/yt46767/JavaKnowSummary/blob/master/README.md
doc:
http://www.th7.cn/Program/java/201510/633422.shtml

## 单线程socket/多线程socket

## 基础补充
https://lrh1993.gitbooks.io/android_interview_guide/content/
