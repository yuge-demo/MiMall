<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import stroge from "./storage/index";
export default {
  name: "app",
  components: {},
  mounted() {
    // stroge.setItem("a", 1);
    // stroge.setItem('user',{a:1})
    // stroge.setItem('abc',{a:1},'user')
    stroge.clear('a','a')
  }
};
</script>

<style>
</style>
