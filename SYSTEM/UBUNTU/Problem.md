## 【问题】docker的ubuntu镜像无ifconfig和ping netstat命令
apt-get update
apt-get install net-tools
apt-get install iputils-ping
参考：
https://www.cnblogs.com/jifeng/p/9397304.html

## 【问题】docker apt-get update一直报错
https://blog.csdn.net/qq_29422251/article/details/78488647

## 【问题】ssh免密登录-permission deny(publickey,password)
1. id_rsa.pub复制到authorized_keys(新文件)
2. chmod -R 600 /root/.ssh

## 【问题】解决Ubuntu的SSH自动断线问题
https://www.jianshu.com/p/f8d9f28b830e
https://www.cnblogs.com/daxin/p/5603837.html
https://blog.csdn.net/qq_21405949/article/details/52539686


## Ubuntu下"sshd:unrecognized service"
https://blog.csdn.net/u013015629/article/details/70045809

## iptables v1.6.1: can't initialize iptables table `filter': Permission denied (you must be root)
docker run -ti --privileged ubuntu:latest
docker run -ti --privileged zen_wozniak
参考：
https://blog.csdn.net/Magic_Ninja/article/details/88432140

## ssh_exchange_identification:read connection reset by peer
https://www.cnblogs.com/taoquns/p/9590960.html