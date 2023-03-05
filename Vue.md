# Vue

## 01-初识Vue

### 004-搭建开发环境

#### 引入Vue的方法

1. 下载vue.js，在项目中的html文件中引用

   `<script type="text/javascript" src="../js/vue.js"></script>`

2. 借助script标签直接通过CDN来使用Vue：

   Vue2：

   `<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>`

   Vue3：

   `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`

#### 下载开发者扩展程序

地址：https://github.com/vuejs/devtools

#### 阻止Vue在启动时生成生产提示

![01](Vue.assets/01.png)

### 005-Hello小案例

先说总结：

1. 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
2. root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
3. root容器里代码被称为**Vue模板**；

代码：

```vue
<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- 引入Vue -->
    <script type="text/javascript" src="../js/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <!-- 插值语法 -->
      <h1>Hello, {{name}}!</h1>
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false; // 阻止Vue在启动时生成生产提示

      // 创建Vue实例，Vue里只传一个参数，类型是个对象--{}配置对象
      new Vue({
        el: '#root', // element,用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串('#root')，也可以是'document.getElementById('root')'
        data: {
          //data中用于存储数据，数据供el所指定的容器去使用。值先暂时先写成一个对象。
          name: 'Mona',
        },
      });
    </script>
  </body>
</html>
```

### 006-分析Hello案例

总结：

1. 容器和实例是一一对应的；
2. 放在div容器中的，都是**js表达式**！注意区分 **js表达式** 和 **js代码** ：
   - js表达式：一个表达式会生成一个值，可以放在任何一个需要值的地方：
     1. a
     2. a+b
     3. demo(1)
     4. x === y ? 'a' : 'b'
   - js代码：语句
     1. if(){}
     2. for(){}
3. 

