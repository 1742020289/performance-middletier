<!--
 * @Author: Fanpingfan
 * @Date: 2022-03-19 20:21:43
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2022-03-20 20:13:53
-->
<template>
  <div class="home">
    <MemoryInfo />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { defineComponent } from "@vue/runtime-core";
import MemoryInfo from "../components/MemoryInfo.vue"

export default defineComponent({
  components:{
    MemoryInfo,
  }
}) 
</script>
<style scoped>

  .home{
    height: 100%;
  }
</style>
