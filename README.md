## 微信小程序组件库

### 介绍
`Mind UI Weapp` 是使用微信小程序原生语言开发的轻量、高效的 `UI` 组件库。
目前包含 30+ 个常用组件。

### 注意
本组件库是作者为 [慕影网(微信小程序版)](https://github.com/NameLi/muying-weapp) 项目所开发，未经过严格测试，不建议在生产环境使用。

### 预览
<img src="https://note-file.ixook.com/FmF45x96APZBVWtD5SMuf4wVHqf_" width="240" height="240" style="margin: 20px auto;">

### 安装
通过 `npm` 命令行安装
```
npm install mind-ui-weapp -S
```

### 构建
在微信小程序开发者工具组，点击“工具”菜单中的“构建 npm”，将其构建到 `miniprogram_npm` 目录下

### 使用
``` JSON
"usingComponents": {
  "m-button": "mind-ui-weapp/button"
}
```
``` HTML
<m-button type="primary">按钮</m-button>
```

### 微信开发者工具预览
```
# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

### 组件库文档地址
[使用文档](https://mind-ui-weapp.ixook.com)


### 作者主页
[ixook.com](https://ixook.com)
