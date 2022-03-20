<!--
 * @Author: Fanpingfan
 * @Date: 2022-03-19 20:28:24
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2022-03-20 20:09:25
-->
<template>
  <div id="main">内存信息</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getMemoryInfo } from "../fetchapi/systeminfo";

export default defineComponent({
  setup() {
    let memory = ref<any>();
    const getMemory = async () => {
      memory.value = await getMemoryInfo();
    };
  },
}) 
</script>

<style>
#main {
  width: 200px;
  height: 200px;
  color: aqua;
  border: 2px solid blueviolet;
  text-align: center;
  position: relative;
  top: 20px;
  left: 50px;
}
</style>
