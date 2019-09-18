# 建立容易迁移环境
docker

# 搭建本地gitlab网站
docker安装配置gitlab

# mac搭建docker的教程
重要教程：   
+ https://www.runoob.com/docker/macos-docker-install.html  
+ https://blog.51cto.com/13673090/2092462

# docker官网
https://hub.docker.com/

# 使用步骤<span style="color: green;">（成功）</span> 
+ STEP 1 安装docker
```
brew cask install docker
```
+ STEP 2 安装目录：   
```
/Applications/Docker.app
```

+ STEP 3 在docker.app登录账号   
![Image Text](../dockerApp.png)   
docker.app登录后，docker指令才会生效    

+ STEP 4 操作指令    
  > docker ps 查看正在运行的容器    

  > docker stop停止正在运行的容器

  > docker start启动容器

  > docker ps -a查看终止状态的容器   

  > docker rm -f webserver命令来移除正在运行的容器

  > docker list 列出本地镜像
  
  > docker rmi 删除的镜像

# docker.app之preferences全解：
https://blog.csdn.net/w275840140/article/details/80158972

# docker容器的创建与操作
https://www.linuxidc.com/Linux/2017-12/149575.htm

#【问题】Unable to find image 'hello-world
+ 分析：   
这个时候不要害怕，docker只是还没有下载这个镜像，所以我们重复命令，
这时我们就会发现，Docker从Docker Hub上获取到最新的Hello World镜像，下载到了本地   
+ 参考：https://blog.csdn.net/CaoMei_HuaCha/article/details/87544109
+ 解答：
1. 设置docker的镜像加速：
+ 阿里<span style="color: green;">（成功）</span>   
https://alzgoonw.mirror.aliyuncs.com    
+ 网易    
http://hub-mirror.c.163.com
2. 重启电脑，让它生效
3. docker run hello-world

# 后台运行
关键词：
```
-d
```

例子：
```
docker run -d ubuntu:15.10
```

# 查看
```
docker ps
```

# 关闭运行中的进程
```
docker stop xxx
```
备注：   
xxx，指容器启动后生成的进程ID字符串。一定要有开头，可以是片段

docker

