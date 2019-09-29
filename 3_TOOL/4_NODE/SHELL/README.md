<!-- toc -->  
## node中执行shell命令  
```
//使用插件child_process

var process = require('child_process');

//清空指定文件夹下文件
process.exec('rm -fr '+copyUrl+'*',function(err){
  console.log(err) //当成功是error是null 
})

//复制指定文件夹下文件到另一个文件下
process.exec('cp  -r  复制指定文件夹路径（绝对文件夹路径）      粘贴指定文件夹路径（绝对地址）’,function(err){
     console.log(err) //当成功是error是null
})
```
https://www.jianshu.com/p/a48ac64aa3a7  
<!-- endtoc -->  