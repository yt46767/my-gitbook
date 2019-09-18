<!-- toc -->
## gitbook插件  
logo: "insert-logo"  
高级搜索（支持中文）: "search-pro"  
代码复制按钮: "copy-code-button"  
导航目录折叠: "expandable-chapters"  
回到顶部: "back-to-top-button"  
在右上角添加github图标: "github"  
分享当前页面: "sharing-plus"  
页面添加页脚: "tbfed-pagefooter"  
打赏: "donate"  
自动生成目录树："atoc"  
根据文件夹自动生成SUMMARY.md文件: "summary"  
菜单可以折叠: "toggle-chapters"  
主题插件, 修改标题和表格颜色: "theme-comscore"  
侧边栏宽度可调节: "splitter"
参考：  
http://gitbook.zhangjikai.com/plugins.html  

## 【插件】atoc  
+ 用法：  
book.json  
```  
  "plugins": [  
    "atoc"  
  ],  
  "pluginsConfig": {  
    "atoc": {  
      "addClass": true,  
      "className": "atoc"  
    }  
  }  
```  
需要生成目录树的文件：  
```  
<!-- toc -->  
所有内容  
<!-- endtoc -->  
```  

## 【插件】theme-comscore  
改变文章里标题的字体颜色  

## 【插件】theme-default  
给文章里标题自动添加序号  
具体如：  
"theme-default": {  
  "showLevel": true  
},  
<!-- endtoc -->