<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import stroge from "./storage/index";
export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {}
    };
  },
  mounted() {

  }
};
</script>

<style>
@import './assets/scss/reset.scss'
</style>
