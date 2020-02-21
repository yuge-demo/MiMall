<template>
  <transition name="slide">
    <div class="model" v-show="showModel">
      <div class="mask"></div>
      <!-- 弹框 -->
      <div class="model-dialog">
        <div class="model-header">
          <span>标题</span>
          <a
            href="javascript:;"
            class="icon-close"
            @click="$emit('cancle')"
          ></a>
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
            >确定</a
          >
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 2"
            @click="$emit('cancle')"
            >取消</a
          >
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn" @click="$emit('submit')">确定</a>
            <a href="javascript:;" class="btn" @click="$emit('cancle')">取消</a>
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

<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/model.scss";
</style>
