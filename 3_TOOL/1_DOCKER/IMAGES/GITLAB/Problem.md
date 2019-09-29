## gitlab502的解决访问  
原因：  
测试访问的时候老是提示502，原因在于我的服务器只有1G的内容，不满足gitlab运行的最低配置,gitlab最低的运行内存要求是2GB,配置的虚拟内存来解决问题  
解决：  
setting->swap设置为2G  
参考：  
https://www.phpsong.com/3408.html  