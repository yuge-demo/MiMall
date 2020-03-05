<template>
      <div class="order-header">
            <div class="container clearfix">
                  <div class="header-logo">
                        <a href="/#/index"></a>
                  </div>
                  <div class="title">
                        <h2>
                              {{title}}
                                 <slot name="tip"></slot>
                        </h2>
                  </div>
                  <div class="username">
                        <a href="javascript:;">{{username}}</a>
                  </div>
            </div>
      </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
      name: "order-header",
      props:{
        title:String
    },
    computed:{
        ...mapState(['username'])
    }
};
</script>
<style lang="scss"  scoped>
@import "./../assets/scss/base.scss";
.order-header {
      padding: 30px 0;
      .header-logo {
            // display: inline-block;
            width: 55px;
            height: 55px;
            float: left;
            a {
                  display: inline-block;
                  width: 55xp;
                  height: 55px;
                  background-color: #ff6600;
                  overflow: hidden;
                  &::before {
                        content: "";
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        background: url("/imgs/mi-logo.png") no-repeat center;
                        background-size: contain;
                        transition: margin 0.3s;
                  }
                  &::after {
                        content: "";
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        background: url("/imgs/mi-home.png") no-repeat center;
                        background-size: contain;
                  }
                  &:hover::before {
                        margin-left: -55px;
                        transition: margin 0.3s;
                  }
            }
      }
      .title , .username{
          display: inline-block;
          height: 55px;
          line-height: 55px;
      }
      .title{
          font-size: 28px;
          float: left;
          color: #333333;
          margin-left: 54px;
          span{
              margin-left: 17px;
              font-size: 14px;
              color: #999999;
              font-weight: bold;
          }
      }
      .username{
          float: right;
          a{
              color: #666666;
              font-size: 16px;
          }
      }
}
</style>