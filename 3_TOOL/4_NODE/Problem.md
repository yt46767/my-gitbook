## npm install 报错（npm ERR! errno -4048，Error: EPERM: operation not permitted,）解决方法  
直接用命令清理就行，控制台输入：  
npm cache clean --force  
https://blog.csdn.net/qq_35624642/article/details/78393035  

## 验证：用formidable上传文件  
可能报错：  
    Can t set headers after they are sent  
[情况1]  
错误:  
```javascript  
    res.send(data);  
    res.render('index', { title: TITLE });  
```  
解决：   
```javascript  
    return res.send(data);  
    return res.render('index', { title: TITLE });  
```  
[情况2]   
错误：  
    用formidable插件来上传文件  
源码：   
```javascript  
    form.parse(req, function(err, fields, files) {  
        console.log('22222222222222222222222222222222');  
        console.log(files);  
    
        if (err) {  
          res.locals.error = err;  // 接口回调：local.error  
          TITLE = '失败';  
          return res.render('index', { title: TITLE });  
        }  
    
        var extName = '';  //后缀名  
        switch (files.fulAvatar.type) {  
            case 'image/pjpeg':  
                extName = 'jpg';  
                break;  
            case 'image/jpeg':  
                extName = 'jpg';  
                break;  
            case 'image/png':  
                extName = 'png';  
                break;  
            case 'image/x-png':  
                extName = 'png';  
                break;  
        }  
    
        if(extName.length == 0){  
              res.locals.error = '只支持png和jpg格式图片';  // 接口回调：local.error  
              TITLE = '失败';  
              return res.render('index', { title: TITLE });  
        }  
    
        var avatarName = Math.random() + '.' + extName;  
        var newPath = form.uploadDir + avatarName;  
    
        console.log(newPath);  
        fs.renameSync(files.fulAvatar.path, newPath);  //重命名  
    });  
```  
解决：  
    form.parse解析的收尾，需要 return 出来。   
源码：  
```javascript  
    form.parse(req, function(err, fields, files) {  
        console.log('22222222222222222222222222222222');  
        console.log(files);  
        
        if (err) {  
          res.locals.error = err;  // 接口回调：local.error  
          TITLE = '失败';  
          return res.render('index', { title: TITLE });  
        }  
    
        var extName = '';  //后缀名  
        switch (files.fulAvatar.type) {  
            case 'image/pjpeg':  
                extName = 'jpg';  
                break;  
            case 'image/jpeg':  
                extName = 'jpg';  
                break;  
            case 'image/png':  
                extName = 'png';  
                break;  
            case 'image/x-png':  
                extName = 'png';  
                break;  
        }  
    
        if(extName.length == 0){  
              res.locals.error = '只支持png和jpg格式图片';  // 接口回调：local.error  
              TITLE = '失败';  
              return res.render('index', { title: TITLE });  
        }  
    
        var avatarName = Math.random() + '.' + extName;  
        var newPath = form.uploadDir + avatarName;  
    
        console.log(newPath);  
        fs.renameSync(files.fulAvatar.path, newPath);  //重命名  
    
        res.locals.success = '上传成功';  // 接口回调：local.success  
        TITLE = '成功';  
        return res.render('index', { title: TITLE });  
    });  
```  