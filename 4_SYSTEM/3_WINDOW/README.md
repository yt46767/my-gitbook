<!-- toc -->  
## 记一次Git push 项目输入账号密码后无法再次弹出认证窗口且一直认证失败[fatal: Authentication failed for]的解决办法  
https://my.oschina.net/Jackcrj/blog/2991933  

## window的edge浏览器自带滚动截图  
https://www.jianshu.com/p/c9311194c6bd  

## 我的window 10 版本  
Microsoft Windows [版本 10.0.17763.593]  
(c) 2018 Microsoft Corporation。保留所有权利。  

## microsoft store 个人资料设置  
https://account.microsoft.com/profile/preferred-language-selector  

## 查看运行的tcp端口及其进程号：  
netstat -ano  

## 查看进程号对应的程序  
netstat -aon|findstr pid  

## 杀掉该程序  
taskkill /f /t /im com.docker.backend.exe  
参考：  
https://www.cnblogs.com/micenote/p/6063242.html  

## 文件授权  
赋权给所有人完全控制  
CACLS /f/My/GitBook/my-gitbook/LIFE/VPN /T /C /G everyone:F  
cacls F:/My/GitBook/my-gitbook/LIFE/VPN /T /C /G everyone:F  
cacls F:/My/GitBook/my-gitbook /T /C /G everyone:F
https://jingyan.baidu.com/article/afd8f4de4298ab34e386e966.html  
<!-- endtoc -->  