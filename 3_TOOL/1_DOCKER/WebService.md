## web容器  

### 在docker里下载镜像  
```javascript  
docker pull training/webapp  
```  
注：拉取web项目代码  

### 后台运行web服务  
```javascript  
docker run -d -P training/webapp python app.py  
```

### 查看运行容器
```javascript
docker ps
```

### 映射到本机指定的端口
```javascript
docker run -d -p 5000:5000 training/webapp python app.py
```

### 停止web服务
语法：
```javascript
docker stop ID/名字
```
例：
```javascript
docker stop 49e94b856b2c
```

### 重启web服务
语法：
```javascript
docker stop ID/名字
```
例：
```javascript
docker start 49e94b856b2c
```

### 移除web服务
```javascript
docker rm 49e94b856b2c
```