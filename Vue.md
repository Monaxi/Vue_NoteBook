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
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"
    ></script>
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
2. {{xxx}}中的xxx要写**js表达式**！并且xxx可以自动读取到data中的所有属性，注意区分 **js表达式** 和 **js代码** ：
   - js表达式：一个表达式会生成一个值，可以放在任何一个需要值的地方：
     1. a
     2. a+b
     3. demo(1)
     4. x === y ? 'a' : 'b'
   - js代码：语句
     1. if(){}
     2. for(){}
3. 真实开发中，只有一个Vue实例，并且会配合组件一起使用；
4. 一旦data中的数据发生改变，那么模板中用到该数据的地方也会自动更新。

### 007-模板语法

#### 插值语法与指令语法

1. 插值语法
   - 功能：用于解析标签体内容（写在<>中间这部分的内容<>）
   - 写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。
2. 指令语法
   - 功能：用于解析标签（包括标签属性、标签体内容、绑定事件等）
   - 举例：`v-bind:href="xxx"` 或简写为 `:href="xxx"`，xxx同样要写成js表达式的形式，且可以直接读取到data中的所有属性。
   - 备注：Vue中有很多指令，且形式都是：v-xxxx，v-bind只是个例子。

### 008-数据绑定

#### 单向数据绑定和双向数据绑定

1. 单向数据绑定（v-bind）：数据只能从data流向页面
2. 双向数据绑定（v-model）：数据不仅能从data流向页面，还可以从页面流向data。

NOTE：

- 双向绑定一般都应用在表单类元素上，比如input、select等
- `v-model:value`可以简写为 v-model，因为v-model默认收集的就是value的值

### 009-el与data的两种写法

#### el的两种写法

1. new Vue的时候配置el属性
2. 先创建Vue实例，随后再通过vm.$mount('#root')指定el的值

#### data的两种写法

1. 对象式

   ```vue
   data:{
   	name:'mona',
   }
   ```

2. 函数式

   ```vue
   data:function(){
   	name:'mona',
   }
   或者
   data(){
   	return{
   		name:'mona',
   	}
   }
   ```

选择方式：学习到组件时，data必须使用函数式，否则会报错；

NOTE：用Vue管理的函数，不可以写成箭头函数，一旦写了，this就不再是Vue实例了。

### 010-MVVM模型

1. MVVM定义：

   M：模型（model）：data中的数据

   V：视图（View）：模板代码

   VM：视图模型（ViewModel）：Vue实例

NOTE：观察发现

	1. data中的所有属性，最后都出现在了vm身上；
 	2. vm身上的所有属性，以及 Vue原型上的所有属性，在Vue模板中都可以直接使用。

### 011-Object.defineProperty()

1. 写法：`Object.defineProperty(obj, 'property', {descriptor})`

2. 控制属性的方法：

```vue
<body>
    <script>
        let number = 18;
        let person = {
            name='Mona',
        }
        
        Object.defineProperty(person,'age',{
            // 1. 控制属性是否可以枚举，默认值为false
            enumerable: true;
            // 2. 控制属性是否可以被修改，默认值为false
            writeable: true;
            // 3. 控制属性是否可以被删除，默认值为false
            configurable: true;
            // 4. 当有人读取person的age属性时，get函数就会被调用，且返回值就是age的值
            get:function(){
            	console.log('有人读取了age属性')
            	return number
        	}
        	// 可以简写为：
        	get(){
                console.log('有人读取了age属性')
                return number
            }
        	// 5. 当有人修改person的age属性时，get函数（getter）就会被调用，且会收到修改的具体值
        	set(value){
                console.log('有人修改了age属性，并且值为vaule')
                number = value;
            }
        })
    </script>
</body>
```

### 012-什么是数据代理

数据代理：通过一个对象代理对另一个对象中属性的操作  读/写

```vue
 <script>
      let obj = { x: 100 };

      let obj2 = { y: 200 };
      Object.defineProperty(obj2, 'x', {
        get() {
          return obj.x;
        },
        set(value) {
          obj.x = value;
        },
      });
    </script>
```

### 013-Vue中的数据代理

![02](Vue.assets/02.png)



通过vm对象来代理data对象中属性的操作（读/写）

