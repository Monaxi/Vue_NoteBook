<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>Student Name : {{ name }}</h2>
    <h2>Student Age : {{ age }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
const school = Vue.extend({
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
});
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>
