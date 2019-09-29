## 搭建本地gitlab网站  
docker安装配置gitlab  
https://github.com/sameersbn/docker-gitlab

## 进入gitlab控制台
* 查看镜像名字/id
docker ps -a

找到gitlab镜像id/名字
eb82f7339baf
docker-gitlab-master_gitlab_1
* 启动gitlab镜像
docker start eb82f7339baf
docker start docker-gitlab-master_gitlab_1
* 先启动并进入docker上的gitlab  
docker exec -it a7328ec41e91 bash  
* 进入gitlab的bash-console  
cd bin && ./rails console production  
*  查看所有用户  
user=User.all  

参考：  
https://blog.csdn.net/AAA123524457/article/details/91351078  

## Shared Drives  
https://blog.csdn.net/qq_25800235/article/details/86536778  
参考：  
https://blog.csdn.net/qq_25800235/article/details/86536778  

## window 10 的 docker 安装 gitlab教程：
https://jingyan.baidu.com/article/6b97984dd946b31ca2b0bf97.html 