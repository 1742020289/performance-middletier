
<!--
 * @Author: Fanpingfan
 * @Date: 2022-03-19 20:28:24
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2022-03-19 22:09:16
-->
<template>
  <div id="main">内存信息</div>
</template>

<script lang="ts">

import { Options, setup, Vue } from "vue-class-component";

setup(()=>{
    
})
@Options({
  props: {
    msg: String,
  },
})
export default class MemoryInfo extends Vue{
    
}
</script>

<style>
    #main{
        width:200px;
        height:200px;
        color: aqua;
        border: 2px solid blueviolet;
        text-align: center;
        position: relative;
        top:20px;
        left: 50px;
    }
</style>