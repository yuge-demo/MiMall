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
  mounted() {}
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss"
// @import "./assets/scss/mixin.scss";
// @import "./assets/scss/model.scss";
</style>
