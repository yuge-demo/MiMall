<template>
      <div id="app">
            <router-view></router-view>
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
            if (this.$cookie.get('userId')) {
                  this.getUser();         
                  this.getCartCount();
            }
      },
      methods: {
            getUser() {
                  this.axios.get("/user").then((res = {}) => {
                        this.$store.dispatch("saveUserName", res.username);
                        //to-do保存到vuex里面
                  });
            },
            getCartCount() {
                  this.axios.get("/carts/products/sum").then((res = 0) => {
                        this.$store.dispatch("saveCartCount", res);
                        //to-do 保存到vuex里面
                  });
            }
      }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
