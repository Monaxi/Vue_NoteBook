<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>School Name : {{ schoolName }}</h2>
    <h2>School Address : {{ Address }}</h2>
    <button>点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default {
  name: 'SchoolMessage',
  data() {
    return {
      schoolName: 'BIGC',
      Address: 'Beijing',
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>
