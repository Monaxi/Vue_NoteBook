# Vue

## 01-初识Vue

### 004-搭建开发环境

#### 引入Vue的方法

1. 下载vue.js，在项目中的html文件中引用

   `<script type="text/javascript" src="../js/vue.js"></script>`

2. 借助script标签直接通过CDN来使用Vue：

   `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`

#### 下载开发者扩展程序

地址：https://github.com/vuejs/devtools

#### 阻止Vue在启动时生成生产提示![image-20230303162534369](../../Applications/Typora/Photo/Vue/01.png)

### 005-Hello小案例

容器中某些内容是变化的，可以把变化的内容存放在data中，data写成一个对象，可以存多个变化的值，再在容器中引用