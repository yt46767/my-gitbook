<!-- toc -->
## mac搭建docker的教程
重要教程：   
+ https://www.runoob.com/docker/macos-docker-install.html  
+ https://blog.51cto.com/13673090/2092462

## 使用步骤<span style="color: green;">（成功）</span> 
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

## docker容器的创建与操作
https://www.linuxidc.com/Linux/2017-12/149575.htm

## 后台运行
关键词：
```
-d
```

例子：
```
docker run -d ubuntu:15.10
```

## 查看
```
docker ps
```

## 关闭运行中的进程
```
docker stop xxx
```
备注：   
xxx，指容器启动后生成的进程ID字符串。一定要有开头，可以是片段
<!-- endtoc -->