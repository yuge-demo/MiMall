<template>
      <div class="ali-pay">
            <order-header title="支付宝支付">
                  <template slot="tip">
                        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
                  </template>
            </order-header>
            <loading v-if="loading"></loading>
            <div class="form"   v-html="content"></div>
      </div>
</template>
<script>
import Loading  from './../components/Loading';
import OrderHeader from "../components/orderHeader"
export default {
      name: "alipay",
      data() {
            return {
                  orderId: this.$route.query.orderId,
                  content: "",
                  loading:true
            };
      },
      components: {
            Loading,
            OrderHeader
      },
      mounted() {
            this.paySubmit()
      },
      methods: {
            paySubmit() {
                  this.axios.post("/pay", {
                        orderId : this.orderId,
                        orderName : '皮囊', //扫码支付时订单名称
                        amount : 0.01, //单位元
                        payType:1 //1支付宝，2微信
                  }).then((res)=>{
                        this.content = res.content;
                        setTimeout(()=>{
                              //提交
                              document.forms[0].submit();
                        },100)
                  })
            }
      }
};
</script>
<style lang="scss"  >
@import "./../assets/scss/base.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/button.scss";
</style>