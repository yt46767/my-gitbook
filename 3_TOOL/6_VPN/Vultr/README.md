## vultr-我的管理平台  
https://my.vultr.com/  

## 搭建架子ssr并开启bbr  
https://wistbean.github.io/vultr-vps-bbr-ss.html  

## 搭建ssr  
https://www.itwordsweb.com/linux_doc/ss.html  

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
firewall-cmd --zone=public --add-port=80/tcp --permanent && &nbsp;firewall-cmd --reload  
参考：  
https://www.cnblogs.com/love-wife/p/10903876.html  

## 腾讯文档：
https://docs.qq.com/doc/DS3VZcUhEWUdmVmpm

## 快照备份与迁移
https://www.laozuo.org/11188.html
https://www.duoluodeyu.com/2481.html

## ISP运营商屏蔽的常见端口如下：
目的端口：137-139，协议：TCP/UDP
目的端口：593，协议：TCP/UDP
目的端口：445，协议：TCP/UDP
目的端口：4444，协议：TCP/UDP
目的端口：135，协议：TCP/UDP
目的端口：3332，协议：TCP
目的端口：9996，协议：TCP/UDP
目的端口：6669，协议：TCP
目的端口：1434，协议：TCP/UDP
目的端口：3127-3130，协议：TCP
目的端口：42，协议：TCP
目的端口：1068，协议：TCP/UDP
目的端口：5554，协议：UDP
目的端口：17185，协议：UDP
参考：
https://www.jianshu.com/p/4ed1c21ff326