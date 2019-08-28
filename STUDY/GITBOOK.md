## gitbook块用法：/>  
<font size=2></font>
标签需正常闭合。

# gitbook资料：
https://www.imooc.com/article/22889

# gitbook用例：
https://docs.gitbook.com/account
https://www.jianshu.com/p/421cc442f06c

# 阮一峰的EcmaScript6文档
也是gitbook写成的。
+ 网址  
http://es6.ruanyifeng.com/#docs/set-map#Map
+ github   
https://github.com/ruanyf/es6tutorial

# 【问题】Error: ENOENT: no such file or directory, open '_book/index.html'
+ 描述：  
``` 
warn: "options" property is deprecated, use config.get(key) instead 
warn: "options.generator" property is deprecated, use "output.name" instead 
use simple mode:  true

Error: ENOENT: no such file or directory, open '_book/index.html'
```
+ 解决方法：   
gitbook update  
tnpm run book-install   

# gitbook写得好的作品
https://docs.cocos.com/creator/manual/zh/getting-started/
https://mta.qq.com/docs/?q=

# gitbook插件
logo: "insert-logo"    
高级搜索（支持中文）: "search-pro"   
代码复制按钮: "copy-code-button"   
导航目录折叠: "expandable-chapters"     
回到顶部: "back-to-top-button"   
在右上角添加github图标: "github"   
分享当前页面: "sharing-plus"   
页面添加页脚: "tbfed-pagefooter"   
打赏: "donate"   
自动生成目录树："atoc"
参考：
http://gitbook.zhangjikai.com/plugins.html

# 【问题】Error loading version latest: Error: Cannot find module 'internal/util/types'
原因：
这个问题原因在于graceful-fs引入了node模块internal/util/types，此模块用处是给vm引入内置js文件，具体作用不可知也不想去考究了，重点在于此法已被废除，只有低版本nodejs和npm可用，但是强行降低node版本有点削足适履的意思，这种天怒人怨的低级bug，graceful-fs开发团队应该早就修复了才对，为什么还会出现报错，去gitbook的git仓库看了一下版本更迭，gitbook-cli默认的版本是2.6.9，最新的版本3.2.2，推测是旧版本没有使用最新版本的graceful-fs导致的问题，果然。。更新之后即可正常运行
参考：
https://www.zhihu.com/question/270284604/answer/766617038
解决：
gitbook fetch 3.2.2

# 安装gitbook
tnpm install gitbook-cli -g

# 查看gitbook版本
gitbook -V

# 【插件】atoc
+ 用法：    
book.json
```
  "plugins": [
    "atoc"
  ],
  "pluginsConfig": {
    "atoc": {
      "addClass": true,
      "className": "atoc"
    }
  }
```
需要生成目录树的文件：   
```
<!-- toc -->
所有内容
<!-- endtoc -->
```

## Gitbook个人不错的使用教程
https://skyao.gitbooks.io/learning-gitbook/content/creation/multiple_lang.html

## gitbook Error: EPERM: operation not permitted, open
原因：  
不是这台机器创建的文件，由git工具拉取下来的新文件。
在windows中，创建的用户不一样，权限不一，导致部分文件没权限，最终热加载失败
解决办法：
赋予当前用户的读写权限
使用git-bash
```
chown -R 用户名 赋权文件夹/文件
```