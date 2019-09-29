## 下载命令
apt-get ....

### 启动ssh
生成ssh key
root@f031e62c7661:/var/run/sshd# ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:YsGovhoCRsWf+JECJKkt8TrEYKi7HyRXIIukj6r2zoA root@f031e62c7661
The key's randomart image is:
+---[RSA 2048]----+
|=+o.             |
|X=.o o           |
|X=. = =          |
|==o= = .         |
|=== o + S        |
|O=   o .         |
|E+o              |
|+ooo             |
|+o=+             |
+----[SHA256]-----+

注意：
[fsmythe@example.com ~]$ /usr/bin/ssh-keygen -t dsa
Generating public/private dsa key pair.
Enter file in which to save the key (/home/fsmythe/.ssh/id_dsa):
Enter passphrase (empty for no passphrase): ****** (Enter 'mypassword')
Enter same passphrase again: ****** (Enter 'mypassword')
Your identification has been saved in /home/fsmythe/.ssh/id_dsa.
Your public key has been saved in /home/fsmythe/.ssh/id_dsa.pub.
The key fingerprint is:
33:af:35:cd:58:9c:11:91:0f:4a:0c:3a:d8:1f:0e:e6 fsmythe@example.com

## 修改sshd-config允许root登陆
sed -i 's+PermitRootLogin prohibit-password+PermitRootLogin yes' /etc/ssh/sshd-config
https://www.vediotalk.com/archives/606

## ubuntu无脑操作直接开放root快速操作
sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config
sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config
service ssh restart

## 进入ubuntu命令
docker exec -it  f031e62c7661 /bin/bash

## 启动sshd命令
/usr/sbin/sshd -D &
或
service ssh start

## linux ssh连接本机
查看sshd启动状态：
service ssh status
否时，sshd启动命令
service ssh start
ssh连接
ssh root@127.0.0.1 -p 22

## 宿主机连接linux
ssh root@172.17.179.49 -p 10022
ssh root@172.17.0.2 -p 10022
ssh root@127.0.0.1 -p 10022

## ubuntu安装ssh
https://www.cnblogs.com/jie-fang/p/7928406.html
重要
https://www.cnblogs.com/gavin-guo/p/11461577.html
https://blog.csdn.net/weixin_33691598/article/details/92134075


## ubuntu安装防火墙
https://www.cnblogs.com/xwgcxk/p/10820518.html
