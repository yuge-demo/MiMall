<template>
      <div class="nav-bar" :class="{ 'is_fixed' : isFixed}">
            <div class="container">
                  <div class="pro-title">小米8 透明探索版</div>
                  <div class="pro-param">
                        <a href="javascript;:">概述</a>
                        <span>|</span>
                        <a href="javascript;:">参数</a>
                        <span>|</span>
                        <a href="javascript;:">用户评价</a>
                        <slot name="buy"></slot>
                  </div>
            </div>
      </div>
</template>

<script>
export default {
      name: "product-param",
      data() {
            return {
                  isFixed: false
            };
      },
      mounted() {
            window.addEventListener("scroll", this.handleScroll);
      },
      methods: {
            handleScroll() {
                  const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop ||
                        document.body.scrollTop;

                  this.isFixed = scrollTop > 152 ? true : false;
            }
      },
      destroyed(){
            //行为处理方式默认是true捕获  false冒泡
            window.removeEventListener('scroll' , this.handleScroll , false)
      }
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";

.nav-bar {
      height: 70px;
      line-height: 70px;
      border-top: 1px solid $colorH;
      background-color: $colorG;
      &.is_fixed {
            position: fixed;
            box-shadow: 0 5px 5px $colorE;
            top: 0;
      }
      width: 100%;
      .container {
            @include flex();
            // display: flex;
            // justify-content: space-between;
            // align-items: center;
            .pro-title {
                  font-size: $fontH;
                  color: $colorB;
                  font-weight: bold;
            }
            .pro-param {
                  font-size:$fontJ;
                  //a元素控制子元素margin-left
                  a {
                        color: $colorC;
                  }
                  span {
                        margin: 0 10px;
                  }
            }
      }
}
</style>