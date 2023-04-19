<template>
  <!-- 组件的结构 -->
  <div>
    <h2>Student Name : {{ name }}</h2>
    <h2>Student Age : {{ age }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default {
  name: 'StudentMessage',
  data() {
    return {
      studentName: 'Mona',
      Age: 25,
    };
  },
};
</script>

<style>
/* 组件的样式 */
</style>
