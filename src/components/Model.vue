<template>
      <transition name="slide">
            <div class="model" v-show="showModel">
                  <div class="mask"></div>
                  <!-- 弹框 -->
                  <div class="model-dialog">
                        <div class="model-header">
                              <span>{{ title }}</span>
                              <a href="javascript:;" class="icon-close" @click="$emit('cancle')"></a>
                        </div>
                        <div class="model-body">
                              <slot class="body"></slot>
                        </div>
                        <div class="model-footer">
                              <a
                                    href="javascript:;"
                                    class="btn"
                                    v-if="btnType == 1"
                                    @click="$emit('submit')"
                              >{{ sureText }}</a>

                              <a
                                    href="javascript:;"
                                    class="btn"
                                    v-if="btnType == 2"
                                    @click="$emit('cancle')"
                              >{{ cannleText }}</a>

                              <div class="btn-group" v-if="btnType == 3">
                                    <a href="javascript:;" class="btn" @click="$emit('submit')">
                                          {{
                                          sureText
                                          }}
                                    </a>
                                    <a
                                          href="javascript:;"
                                          class="btn btn-default"
                                          @click="$emit('cancle')"
                                    >
                                          {{
                                          cannleText
                                          }}
                                    </a>
                              </div>
                        </div>
                  </div>
            </div>
      </transition>
</template>

<script>
export default {
      name: "model",
      props: {
            //接收框的类型，  弹框类型， 小small  中middle  大large ，表单form
            modalType: {
                  type: String,
                  default: "from"
            },
            //弹框的标题
            title: String,
            //按钮类型 1：确定按钮 2:取消按钮 3:确定取消
            btnType: String,
            sureText: {
                  type: String,
                  default: "确定"
            },
            cannleText: {
                  type: String,
                  default: "取消"
            },
            showModel: Boolean
      }
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/model.scss";
// .model {
//       position: fixed;
//       top: 0;
//       right: 0;
//       width: 100%;
//       height: 100%;
//       .mask {
//             position: fixed;
//             top: 0;
//             right: 0;
//             width: 100%;
//             height: 100%;
//             background-color: $colorD;
//             opacity: 0.5;
//       }
//       .slide-enter-active {
//             top: 0;
//       }
//       .slide-leave-active {
//             top: -100%;
//       }

//       .slide-enter {
//             top: -100%;
//       }
//       .slide-leave-to {
//             top: 0;
//       }
//       .model-dialog {
//             position: absolute;
//             top: 40%;
//             left: 50%;
//             width: 660px;
//             // @include position(absolute, 40%, 50%, 660px, auto);
//             background-color: $colorG;
//             transform: translate(-50%, -50%);
//             .model-header {
//                   height: 60px;
//                   line-height: 60px;
//                   font-size: 16px;
//                   padding: 0 10px;
//                   position: relative;
//                   .icon-close {
//                         position: absolute;
//                         top: 20px;
//                         right: 20px;
//                         width: 16px;
//                         height: 16px;
//                         background: url(/imgs/icon-close.png) no-repeat center;
//                         background-size: contain;
//                         &:hover {
//                               // transform: scale(1.5);
//                               // transform-origin: center center;
//                               transform: rotate(45deg);
//                         }
//                   }
//             }
//             .model-body {
//                   height: 100px;
//                   line-height: 100px;
//                   padding-left: 45px;
//                   // padding: 42px 40px 54px;
//                   font-size: 14px;
//                   border-top: 1px solid $colorE;
//                   border-bottom: 1px solid $colorE;
//             }
//             .model-footer {
//                   height: 82px;
//                   line-height: 82px;
//                   text-align: center;
//             }
//       }
// }
</style>
