## Gruntfile实例  
https://www.gruntjs.net/sample-gruntfile  

## 安装  
npm install -g grunt-cli  
npm install grunt --save-dev  
参考：  
https://www.gruntjs.net/getting-started  

## 实现gitbook的livereload之必需插件
npm install grunt-contrib-watch --save-dev
npm install grunt-open --save-dev
npm install grunt-http-server --save-dev
npm install grunt-shell --save-dev

## grunt-http-server
https://www.npmjs.com/package/grunt-http-server

## 自定义任务
```
grunt.registerTask(taskName, [description,] taskFunction) 
```

## grunt实现livereload
https://github.com/LakesCode/learnJavascript/wiki/Grunt%E6%8F%92%E4%BB%B6%E4%B9%8BLiveReload-%E5%AE%9E%E7%8E%B0%E9%A1%B5%E9%9D%A2%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0%EF%BC%8C%E6%89%80%E8%A7%81%E5%8D%B3%E6%89%80%E5%BE%97%E7%BC%96%E8%BE%91