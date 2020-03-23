<template>
      <div class="order-pay">
            <order-header title="订单支付">
                  <template slot="tip">
                        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
                  </template>
            </order-header>
            <div class="wrapper">
                  <div class="container">
                        <div class="order-wrap">
                              <div class="item-order">
                                    <div class="icon-succ"></div>
                                    <div class="order-info">
                                          <h2>订单提交成功！去付款咯～</h2>
                                          <p>
                                                请在
                                                <span>30分钟</span>内完成支付, 超时后将取消订单
                                          </p>
                                          <p>收货信息：{{addressInfo}}</p>
                                    </div>
                                    <div class="order-tatal">
                                          <p>
                                                应付总额:
                                                <span>{{payment}}</span>元
                                          </p>
                                          <p>
                                                订单详情
                                                <em
                                                      class="icon-down"
                                                      :class="{'up' :showDetail}"
                                                      @click="showDetail=!showDetail"
                                                ></em>
                                          </p>
                                    </div>
                              </div>
                              <div class="item-detail" v-if="showDetail">
                                    <div class="item">
                                          <div class="detail-title">订单号：</div>
                                          <div class="detail-info theme-color">{{orderNo}}</div>
                                    </div>
                                    <div class="item">
                                          <div class="detail-title">收货信息：</div>
                                          <div class="detail-info">{{addressInfo}}</div>
                                    </div>
                                    <div class="item good">
                                          <div class="detail-title">商品名称：</div>
                                          <div class="detail-info">
                                                <ul>
                                                      <li
                                                            v-for="(item ,value) in orderDetail"
                                                            :key="value"
                                                      >
                                                            <img v-lazy="item.productImage" alt />
                                                            {{item.productName}}
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div class="item">
                                          <div class="detail-title">发票信息：</div>
                                          <div class="detail-info">电子发票 个人</div>
                                    </div>
                              </div>
                        </div>

                        <div class="item-pay">
                              <h3>选择以下支付方式付款</h3>
                              <div class="pay-way">
                                    <p>支付平台</p>
                                    <div
                                          class="pay pay-ali"
                                          :class="{'checked' : payTpe == 1}"
                                          @click="paySubmit(1)"
                                    ></div>
                                    <div
                                          class="pay pay-wechat"
                                          :class="{'checked' : payTpe == 2}"
                                          @click="paySubmit(2)"
                                    ></div>
                              </div>
                        </div>
                  </div>
            </div>
            <scan-pay-code v-if="showPay" @close="showClose" :img="payImg"></scan-pay-code>
            <model
            title="支付确认"
            btnType = "3"
            :showModel = "showPayModel"
            sureText = "查看订单"
            cannleText = "未支付"
            @cancle = "showPayModel = false"
            @submit="goOrderList"
            >
            <template name="body">
                  <p>支付成功？</p>
            </template>
            </model>
      </div>
</template>
<script>
import ScanPayCode from "../components/ScanPayCode";
import OrderHeader from "../components/orderHeader"
import Model from "../components/Model"
import { Message } from "element-ui";
import QRCode from "qrcode";
export default {
      name: "order-pay",
      data() {
            return {
                  orderNo: this.$route.query.orderNo,
                  addressInfo: "", //收货人地址
                  orderDetail: [], //商品列表渲染
                  showDetail: false, //商品列表是否显示
                  payment: 0, //总金额
                  payTpe: "", //alipay支付和wechat支付
                  showPay: false, //微信支付是否显示
                  payImg: "", //wechat微信支付二维码
                  showPayModel : false  ,
                  T:'' //定时器
            };
      },
      components: {
            ScanPayCode,
            Model,
            OrderHeader
      },
      mounted() {
            this.getOrderDetail();
      },
      methods: {
            getOrderDetail() {
                  this.axios.get(`/orders/${this.orderNo}`).then(res => {
                        let item = res.shippingVo; //地址
                        this.addressInfo = `${item.receiverName}  
                                                                ${item.receiverMobile}  
                                                                ${item.receiverProvince}
                                                                ${item.receiverCity}
                                                                ${item.receiverDistrict}
                                                                ${item.receiverAddress}`;
                        this.orderDetail = res.orderItemVoList;
                        this.payment = res.payment;
                  });
            },
            paySubmit(payType) {
                  if (payType == 1) {
                        window.open(
                              "/app/#/order/aliPay?orderId=" + this.orderNo,
                              "_blank"
                        );
                        // this.$router.push('/order/alipay?orderId='+this.orderNo,'_blank')
                  } else {
                        this.axios
                              .post("/pay", {
                                    orderId: this.orderNo,
                                    orderName: "weChat-pay", //扫码支付时订单名称
                                    amount: 0.01, //单位元
                                    payType: 2//1支付宝，2微信
                              })
                              .then(res => {
                                    let content = res.content;
                                    QRCode.toDataURL(content)
                                          .then(url => {
                                                this.showPay = true;
                                                this.payImg = url;
                                                this.loopOrderState();
                                          })
                                          .catch(() => {
                                                Message.error("微信支付超时");
                                          });
                              });
                  }
            },
            showClose() {
                  this.showPay = false;
                  this.showPayModel = true;
                   clearInterval(this.T)
            },
            //轮循当前订单支付状态  查看订单详情 
            //订单状态 0 以取消 10 未付款 20已经付款 40以收货 50取消交易 60 交易关闭 
            loopOrderState(){
                 this.T =  setInterval(() => {
                        this.axios.get(`/orders/${this.orderNo}`).thne((res)=>{
                              if(res.status == 20){
                                    clearInterval(this.T)
                                    this.getOrderDetail();
                              }
                        })
                  }, 1000);
            },
            goOrderList(){
                  this.$router.push('/order/list')
            }
      }
};
</script>
<style lang="scss"  >
@import "./../assets/scss/base.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/button.scss";
.order-pay {
      .wrapper {
            background-color: #f5f5f5;
            padding-top: 30px;
            padding-bottom: 61px;
            .order-wrap {
                  padding: 62px 50px;
                  background-color: #fff;
                  font-size: 14px;
                  margin-bottom: 30px;
                  .item-order {
                        display: flex;
                        align-items: center;
                        .icon-succ {
                              width: 90px;
                              height: 90px;
                              border-radius: 50%;
                              background: url("/imgs/icon-gou.png") #80c58a
                                    no-repeat center;
                              background-size: 60px;
                              margin-right: 40px;
                        }
                        .order-info {
                              margin-right: 248px;
                              h2 {
                                    font-size: 24px;
                                    color: #333333;
                                    margin-bottom: 20px;
                              }
                              p {
                                    color: #666666;
                                    span {
                                          color: #ff6700;
                                    }
                              }
                        }
                        .order-tatal {
                              & > p:first-child {
                                    margin-bottom: 30px;
                              }
                              span {
                                    font-size: 28px;
                                    color: #ff6700;
                              }
                              .icon-down {
                                    display: inline-block;
                                    width: 14px;
                                    height: 10px;
                                    background: url("/imgs/icon-down.png")
                                          no-repeat center;
                                    background-size: contain;
                                    margin-left: 9px;
                                    transition: all 0.5s;
                                    cursor: pointer;
                                    &.up {
                                          transform: rotate(180deg);
                                    }
                              }
                              .icon-up {
                                    transform: rotate(180deg);
                              }
                        }
                  }
                  .item-detail {
                        border-top: 1px solid #d7d7d7;
                        padding-top: 47px;
                        padding-left: 130px;
                        font-size: 14px;
                        margin-top: 45px;
                        .item {
                              margin-bottom: 19px;
                              .detail-title {
                                    float: left;
                                    width: 100px;
                              }
                              .detail-info {
                                    display: inline-block;
                                    img {
                                          width: 30px;
                                          vertical-align: middle;
                                    }
                              }
                        }
                  }
            }
            .item-pay {
                  padding: 26px 50px 72px;
                  background-color: #fff;
                  color: #333333;
                  h3 {
                        font-size: 20px;
                        font-weight: 200;
                        color: #333333;
                        padding-bottom: 24px;
                        border-bottom: 1px solid #d7d7d7;
                        margin-bottom: 26px;
                  }
                  .pay-way {
                        font-size: 18px;
                        .pay {
                              display: inline-block;
                              width: 188px;
                              height: 64px;
                              border: 1px solid #d7d7d7;
                              cursor: pointer;
                              &:last-child {
                                    margin-left: 20px;
                              }
                              &.checked {
                                    border: 1px solid #ff6700;
                              }
                        }
                        .pay-ali {
                              background: url("/imgs/pay/icon-ali.png")
                                    no-repeat center;
                              background-size: 103px 38px;
                              margin-top: 19px;
                        }
                        .pay-wechat {
                              background: url("/imgs/pay/icon-wechat.png")
                                    no-repeat center;
                              background-size: 103px 38px;
                        }
                  }
            }
      }
}
</style>