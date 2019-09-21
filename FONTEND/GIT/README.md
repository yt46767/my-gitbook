## vscode终端使用git的bash.exe  
设置：  
"terminal.integrated.shell.windows":"E:\\Install\\Git\\Git\\bin\\bash.exe"  
禁忌：  
"terminal.integrated.shell.windows":"E:\\Install\\Git\\Git\\git-bash.exe"  
这样会终端和git-bash.exe分离显示  
参考：  
https://www.cnblogs.com/iceorrange/p/10303516.html  

<!-- toc -->  
## 更换git账户的密码  
+ 没用做法：  
让系统重新弹框给用户重新填写用户名和密码，进行提交  
```  
git config --system --unset credential.helper  
```  
window系统（有用）  
https://my.oschina.net/Jackcrj/blog/2991933  

注意：  
修改sourcetree,是无用的。  

## 【问题】gitbook在window下，liveload失败的解决方案  
修改，gitbook serve就崩了的解决：  
gitbook serve执行后，删除_book   
https://cloud.tencent.com/developer/article/1426724   
复制粘贴，gitbook serve就崩了的解决：  
修改以下文件：  
C:\Users\tobeyang\.gitbook\versions\3.2.2\lib\output\website\copyPluginAssets.js  
文件中的 112 行   
将 confirm: true 改为 confirm: false   
参考：  
https://www.cnblogs.com/wenhui92/p/9482629.html  

## github的fork  
拷贝源目标git仓库到自己Git仓库  

## 回滚到某个版本  
前提条件：已远程提交   
操作：重置到当前分支   
结论：虽然可以回到之前的版本，但一更新就又回到未重置前的状态。<span style="color:red;">（无用功）</span>  

前提条件：已远程提交     
操作：回滚提交    
结论：回滚的是要回滚当前版本提交的内容，不能达到目的   
参考：     
https://www.cnblogs.com/hopeway-shaon/p/5740280.html  

命令回滚：   
git reflog   
git reset --hard commit_id  
git push origin HEAD --force   
前提条件：  
当远端设置了分支保护，则首先要将其取消，再强推；  
备注：  
HEAD就代表当前    
强推之后，之前的版本被覆盖了，无法再查看到。  
参考：   
https://jacheng.top/2017/02/16/Git-%E4%BB%A3%E7%A0%81%E5%9B%9E%E6%BB%9A/  

## 修改远程仓库地址  
+ 例：  
远程仓库迁移，本地提交地址需要更新   
操作：  
```  
git remote set-url origin [url]  
```  
参考：    
https://ddnode.com/2015/04/14/git-modify-remote-responsity-url.html  

## git命名规则  
Project 名称 全部小写 ，并且以横杠（-）作为连字符。  
命名规则：  
[产品名称]-[项目类型]-(自定义名称)-[日期]  
http://res.nie.netease.com/comm/doc/tutorial/git-naming.html  
<!-- endtoc -->  
