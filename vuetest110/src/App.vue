<template>
  <div id="app">
    <Headers></Headers>
    <Contents></Contents>
    <Footers></Footers>
  </div>
</template>

<script>
  import Headers from '@/components/Header.vue'
  import Contents from '@/components/Content.vue'
  import Footers from '@/components/Footer.vue'
  export default {
    components: {Headers, Contents, Footers}
  }
</script>
<style>
  @import "assets/less/public.less";
  @import "assets/css/test.css";
  @import "assets/less/test.less";
</style>
