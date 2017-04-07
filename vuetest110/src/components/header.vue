<template>
  <div id="header-box">
    <header class="title">
      <span class="logo">{{title}}</span>
    </header>
    <div class="nav center">
      <router-link :to="{name:'memberCurse'}">会员课程</router-link>
      <router-link :to="{name:'school'}">学校课程</router-link>
      <router-link :to="{name:'allCurse'}">报班课程</router-link>
      <router-link :to="{name:'WIKI'}">WIKI</router-link>
      <router-link :to="{name:'VIP'}">VIP会员</router-link>
    </div>
  </div>
</template>
<style>
  @import "../assets/less/header/header.less";
</style>
<script>
  export default {
    name: 'header-box',
    data () {
      return {
        title: '考A啦'
      }
    }
  }
</script>
