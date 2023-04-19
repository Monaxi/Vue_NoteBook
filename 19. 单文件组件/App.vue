<template>
  <!-- 组件的结构 -->
  <div>
    <School />
    <Student />
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
import School from './School.vue';
import Student from './Student.vue';
export default {
  name: 'App',
  components: {
    School,
    Student,
  },
};
</script>

<style>
/* 组件的样式 */
</style>
