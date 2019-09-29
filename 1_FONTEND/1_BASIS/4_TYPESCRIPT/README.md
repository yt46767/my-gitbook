<!-- toc -->
## 【问题】Cannot find module '../../package.json'. Consider using '--resolveJsonModule' to import module with '.json' extensionts(2732)
+ STEP 1:
```javascript
{
  "compilerOptions": {
    "resolveJsonModule": true, 
  }
}
```
+ STEP 2:
restart vscode
https://github.com/microsoft/TypeScript/issues/25400
<!-- endtoc -->