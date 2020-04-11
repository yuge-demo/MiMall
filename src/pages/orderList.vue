<template>
      <div class="order-list">
            <order-header title="订单列表">
                  <template slot="tip">
                        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
                  </template>
            </order-header>

            <div class="wrapper">
                  <div class="container">
                        <div class="order-box">
                              <loading v-if="Loading"></loading>
                              <div class="order" v-for="(item, value) in list" :key="value">
                                    <div class="order-title">
                                          <div class="item-info">
                                                {{item.createTime}}
                                                <span>|</span>
                                                {{item.receiverName }}
                                                <span>|</span>
                                                订单号:{{item.orderNo}}
                                                <span>|</span>
                                                {{item.paymentTypeDesc}}
                                          </div>
                                          <div class="item-money">
                                                <span>应付金额：</span>
                                                <span class="money">{{item.payment}}</span>
                                                <span>元</span>
                                          </div>
                                    </div>
                                    <div class="order-content clearfix">
                                          <div class="good-box fl">
                                                <div
                                                      class="good-list"
                                                      v-for="(order , i) in item.orderItemVoList"
                                                      :key="i"
                                                >
                                                      <div class="good-img">
                                                            <img v-lazy="order.productImage" />
                                                      </div>
                                                      <div class="good-name">
                                                            <div
                                                                  class="p-name"
                                                            >{{order.productName}}</div>
                                                            <div
                                                                  class="p-money"
                                                            >{{order.currentUnitPrice+ "×" +order.quantity}}元</div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div class="good-state fr" v-if="item.status == 10">
                                                <!-- <router-link to="/order/pay?orderNo=item.orderNo"> -->
                                                <a
                                                      href="javascript:;"
                                                      @click="goPay(item.orderNo)"
                                                >{{item.statusDesc}}</a>
                                                <!-- </router-link> -->
                                          </div>
                                          <div class="good-state fr" v-else>
                                                <a
                                                      href="javascript:;"
                                                      @click="goPay(item.orderNo)"
                                                >{{item.statusDesc}}</a>
                                          </div>
                                    </div>
                              </div>
                              <no-data v-if="!Loading && list.length==0"></no-data>
                              <el-pagination
                                    class="pagination"
                                    background
                                    layout="prev, pager, next,jumper"
                                    :pageSize="pageSize"
                                    :pageNum="pageNum"
                                    :total="total"
                                    @current-change="handleChange"
                              ></el-pagination>
                        </div>
                  </div>
            </div>
      </div>
</template>
<script>
import OrderHeader from "./../components/orderHeader";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import { Pagination } from "element-ui";
var infiniteScroll = require("vue-infinite-scroll");
export default {
      name: "order-list",
      data() {
            return {
                  list: [],
                  Loading: true,
                  pageSize: 10,
                  pageNum: 1,
                  total: 0
            };
      },
      directives: { infiniteScroll },
      components: {
            OrderHeader,
            Loading,
            NoData,
            [Pagination.name]: Pagination
      },
      mounted() {
            this.getOrderList();
      },
      methods: {
            getOrderList() {
                  this.axios
                        .get("/orders", {
                              params: {
                                    pageNum: this.pageNum
                              }
                        })
                        .then(res => {
                              this.list = res.list || [];
                              this.total = res.total;
                              this.Loading = false;
                        })
                        .catch(() => {
                              this.Loading = false;
                        });
            },
            goPay(orderNo) {
                  // this.$router.push('/order/list')
                  // this.$router.push({
                  //     name:'order-list',
                  // params:{
                  //     orderNo
                  // }
                  //  query:{
                  //         orderNo
                  //     }
                  // })
                  this.$router.push({
                        path: "/order/pay",
                        query: {
                              orderNo
                        }
                  });
            },
            handleChange(pageNum) {
                  this.pageNum = pageNum;
                  this.getOrderList();
            }
      }
};
</script>
<style  lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.order-list {
      .wrapper {
            background-color: $colorJ;
            padding-top: 33px;
            padding-bottom: 110px;
            .order-box {
                  .order {
                        border: 1px solid $colorF;
                        background-color: $colorG;
                        margin-bottom: 31px;
                        // &:last-child {
                        //       margin-bottom: 0;
                        // }
                        .order-title {
                              height: 74px;
                              background-color: $colorK;
                              display: flex;
                              align-items: center;
                              justify-content: space-between;
                              padding: 0 43px;
                              font-size: 16px;
                              color: $colorC;
                              .item-info {
                                    span {
                                          margin: 0 9px;
                                    }
                              }
                              .money {
                                    font-size: 26px;
                                    color: $colorB;
                              }
                        }
                        .order-content {
                              padding: 0 43px;
                              .good-box {
                                    width: 88%;
                                    .good-list {
                                          display: flex;
                                          align-items: center;
                                          height: 145px;
                                          .good-img {
                                                width: 112px;
                                                img {
                                                      width: 100%;
                                                      // height: 100%;
                                                      background-color: $colorJ;
                                                }
                                          }
                                          .good-name {
                                                font-size: 20px;
                                                color: $colorA;
                                          }
                                    }
                              }
                              .good-state {
                                    height: 145px;
                                    line-height: 145px;
                                    font-size: 20px;
                                    color: $colorA;
                                    a {
                                          color: $colorA;
                                    }
                              }
                        }
                  }
            }
            .pagination {
                  text-align: right;
            }
            .el-pagination.is-background .el-pager li:not(.disabled).active {
                  background-color: #ff6700;
                  color: #ffffff;
            }
      }
}
</style>