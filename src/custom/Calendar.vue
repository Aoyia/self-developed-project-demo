<template>
  <div class="calendar">
    <div>自开发日历组件</div>
    <el-calendar v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref(new Date());
</script>
