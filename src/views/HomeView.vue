<!--
 * @Author: Fanpingfan
 * @Date: 2022-03-19 20:21:43
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2022-03-19 22:02:15
-->
<template>
  <div class="home">
    <MemoryInfo />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import MemoryInfo from "@/components/MemoryInfo.vue";

@Options({
  components: {
    MemoryInfo,
  },
})
export default class HomeView extends Vue {}
</script>
<style scoped>

  .home{
    height: 100%;
  }
</style>
