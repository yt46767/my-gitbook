## vultr-我的管理平台  
https://my.vultr.com/  

## 搭建架子ssr并开启bbr  
https://wistbean.github.io/vultr-vps-bbr-ss.html  

## 搭建ssr  
https://www.itwordsweb.com/linux_doc/ss.html  

SSR的密码&&端口：  
Tencent123-  
12508  
改为：  
25352  

## VPN  
Congratulations, Shadowsocks-python server install completed!  
Your Server IP        :  199.247.17.76  
Your Server Port      :  25352  
Your Password         :  Tencent123-  
Your Encryption Method:  aes-256-cfb  

## Welcome to visit:https://teddysun.com/342.html  
Enjoy it!  

## 默认客户端-代理端口：1080  
改为：1181  

## 本地局域网ip:  
192.168.0.103  

## ss服务基础操作  
启动：/etc/init.d/shadowsocks start  
停止：/etc/init.d/shadowsocks stop  
重启：/etc/init.d/shadowsocks restart  
状态：/etc/init.d/shadowsocks status  
配置文件路径：/etc/shadowsocks.json  
卸载方法：/usr/local/src/shadowsocks.sh uninstall  
日志： /var/log/shadowsocks.log  

## ping ip  
http://ping.chinaz.com  

## ping port(国内)  
国内  
http://tool.chinaz.com/port/  
国外  
https://www.yougetsignal.com/tools/open-ports/  

## 检测bbr是否启动  
lsmod | grep bbr  

## 【问题】500 Internal Privoxy Error  
firewall-cmd --zone=public --add-port=25352/tcp --permanent  
firewall-cmd --reload  
参考：  
https://www.cnblogs.com/love-wife/p/10903876.html  

