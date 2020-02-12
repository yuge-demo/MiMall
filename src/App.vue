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
    // stroge.setItem("a", 1);
    // stroge.setItem('user',{a:1})
    // stroge.setItem('abc',{a:1},'user')
    // stroge.clear('a','a')'
    //本地加载请求json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=> {
    //   this.res = res;
    // });

    //通过easy-mock平台实现数据mock
    // this.axios.get('/mock/user/login.json').then((res)=> {
    //   this.res = res;
    // });

    //本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res)=> {
      this.res = res;
    });
  }
};
</script>

<style>
</style>
