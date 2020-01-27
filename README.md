## 环境配置

先在跟目下运行`npm install`或`yarn install`安装依赖

因为是使用es6写的，所以必须有运行环境

根目录下创建`.babelrc`配置如下
```
{
  "presets": ["@babel/preset-env"]

```
**这里使用代码测试，并不是直接在LeetCode上运行**

根目录下创建`.eslintrc.js`配置如下
```
module.exports = {
    "extends": ["standard","plugin:jest/recommended"]
};


```

然后按照`环境安装.md`进行操作

测试也可以这样做：
全局安装jest： `npm install jest-cli -g`
运行 `jest 要测试的测试文件`

[jest官网](https://jestjs.io/)