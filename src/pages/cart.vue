<template>
      <div class="cart">
            <order-header title="我的购物车">
                  <template>
                        <span slot="tip">温馨提示：参评是否购买成功，以最终下单为准则，请尽快结算</span>
                  </template>
            </order-header>
            <div class="wrapper">
                  <div class="container">
                        <div class="cart-box">
                              <ul class="cart-item-head">
                                    <li class="col-1">
                                          <span
                                                class="checkbox"
                                                v-bind:class="{'checked':allChecked}"
                                                @click="toggleAll"
                                          ></span>全选
                                    </li>
                                    <li class="col-3">商品数量</li>
                                    <li class="col-1">单价</li>
                                    <li class="col-2">数量</li>
                                    <li class="col-1">小计</li>
                                    <li class="col-1">操作</li>
                              </ul>
                              <ul class="cart-item-list">
                                    <li
                                          class="item-item"
                                          v-for="(item , value) in list"
                                          :key="value"
                                    >
                                          <div class="item-check">
                                                <span
                                                      class="checkbox"
                                                      :class="{'checked' : item.productSelected}"
                                                      @click="updataCart(item)"
                                                ></span>
                                          </div>
                                          <div class="item-name">
                                                <img v-lazy="item.productMainImage" />
                                                <span>{{item.productName+ ' , ' + item.productSubtitle}}</span>
                                          </div>
                                          <div class="item-price">{{item.productPrice}}</div>
                                          <div class="item-num">
                                                <div class="num-box">
                                                      <a
                                                            href="javascript:;"
                                                            @click="updataCart(item , '-')"
                                                      >-</a>
                                                      <span>{{item.quantity}}</span>
                                                      <a
                                                            href="javascript:;"
                                                            @click="updataCart(item , '+')"
                                                      >+</a>
                                                </div>
                                          </div>
                                          <div class="item-total">{{item.productTotalPrice}}</div>
                                          <div class="item-del" @click="delProduct"></div>
                                    </li>
                              </ul>
                        </div>
                        <div class="order-wrap clearfix">
                              <div class="cart-tip fl">
                                    <a href="/#/index">继续购物</a>
                                    共
                                    <span>{{list.length}}</span>件商品,已选择
                                    <span>{{checkedNum}}</span>件
                              </div>
                              <div class="total fr">
                                    合计：
                                    <span>{{cartTotalPrice}}</span>元
                                    <a href="javascript:;" class="btn" @click="order">去结算</a>
                              </div>
                        </div>
                  </div>
            </div>
            <model
                  title="提示"
                  sureText="确定"
                  cannleText="取消"
                  btnType="3"
                  modelType="middle"
                  v-for="(item , value) in list"
                  :key="value"
                  v-bind:showModel="showModel"
                  @submit="goToTrue(item)"
                  @cancle="goToFalse"
            >
                  <template name="body">
                        <p>商品是否删除</p>
                  </template>
            </model>
            <nav-footer></nav-footer>
      </div>
</template>
<script>
import OrderHeader from "../components/orderHeader";
import NavFooter from "../components/NavFooter";
import Model from "../components/Model";
import {Message}  from "element-ui"
export default {
      name: "nav-cart",
      data() {
            return {
                  list: [], //商品列表
                  allChecked: false, //是否全选
                  cartTotalPrice: 0, //商品总金额
                  checkedNum: 0, //选中商品数量
                  showModel: false
            };
      },
      components: {
            OrderHeader,
            NavFooter,
            Model
      },
      mounted() {
            this.getCartList();
      },
      methods: {
            getCartList() {
                  this.axios.get("/carts").then(res => {
                        this.renderData(res);
                  });
            },
            toggleAll() {
                  let url = this.allChecked
                        ? "/carts/unSelectAll"
                        : "/carts/selectAll";
                  this.axios.put(url).then(res => {
                        this.renderData(res);
                  });
            },
            //item是当前数据   type是控制的类型
            updataCart(item, type) {
                  let quantity = item.quantity, //商品数量
                        selected = item.productSelected; //商品是否选中
                  if (type == "-") {
                        if (quantity == 1) {
                              // alert("商品至少保留一件");
                              Message.warning("商品至少保留一件")
                              return;
                        }
                        --quantity;
                  } else if (type == "+") {
                        if (quantity > item.productStock) {
                              // alert("商品不行超过库存数量");
                              Message.warning("商品不行超过库存数量")
                              Message.
                              return;
                        }
                        ++quantity;
                  } else {
                        selected = !item.productSelected;
                  }
                  this.axios
                        .put(`/carts/${item.productId}`, {
                              quantity,
                              selected
                        })
                        .then(res => {
                              this.renderData(res);
                        });
            },
            delProduct() {
                  this.showModel = true;
            },
            goToTrue(item) {
                  this.axios.delete(`/carts/${item.productId}`).then(res => {
                        this.renderData(res);
                  });
                  this.showModel = false;
            },
            goToFalse() {
                  this.showModel = false;
            },
            renderData(res) {
                  this.list = res.cartProductVoList || []; //控制商品列表
                  this.allChecked = res.selectedAll; //控制是否全选
                  this.cartTotalPrice = res.cartTotalPrice; //商品总金额
                  this.checkedNum = this.list.filter(
                        //过滤数组，选取已经选中的商品
                        item => item.productSelected
                  ).length; //选中数量
            },
            //下单
            order() {
                  let isCheck = this.list.every(item => !item.productSelected);
                  if (isCheck) {
                        Message.warning("至少选一件商品")
                        // alert("至少有一件商品");
                  } else {
                        this.$router.push("/order/confirm");
                  }
            }
      }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
.cart {
      .wrapper {
            background-color: $colorJ;
            padding-top: 30px;
            padding-bottom: 114px;
            .cart-box {
                  background-color: $colorG;
                  font-size: 14px;
                  color: $colorD;
                  text-align: center;
                  .checkbox {
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        vertical-align: middle;
                        border: 1px solid $colorH;
                        margin-right: 17px;
                        cursor: pointer;
                        &.checked {
                              background: url("/imgs/icon-gou.png") $colorA
                                    no-repeat center;
                              background-size: 16px 12px;
                              border: none;
                        }
                  }
                  .cart-item-head {
                        display: flex;
                        height: 79px;
                        line-height: 79px;
                        .col-1 {
                              flex: 1;
                        }
                        .col-2 {
                              flex: 2;
                        }
                        .col-3 {
                              flex: 3;
                        }
                  }
                  .cart-item-list {
                        .item-item {
                              display: flex;
                              align-items: center;
                              height: 125px;
                              border-top: 1px solid #e5e5e5;
                              font-size: 16px;
                              .item-check {
                                    flex: 1;
                              }
                              .item-name {
                                    flex: 3;
                                    font-size: 18px;
                                    color: #333333;
                                    display: flex;
                                    align-items: center;
                                    img {
                                          width: 80px;
                                          height: 80px;
                                          vertical-align: middle;
                                    }
                                    span {
                                          margin-left: 30px;
                                    }
                              }
                              .item-price {
                                    flex: 1;
                                    color: #333333;
                              }
                              .item-num {
                                    flex: 2;
                                    .num-box {
                                          display: inline-block;
                                          width: 150px;
                                          height: 40px;
                                          line-height: 40px;
                                          border: 1px solid #e5e5e5;
                                          font-size: 14px;
                                          a {
                                                display: inline-block;
                                                width: 50px;
                                                color: #333333;
                                          }
                                          span {
                                                display: inline-block;
                                                width: 50px;
                                                color: #333333;
                                          }
                                    }
                              }
                              .item-total {
                                    flex: 1;
                                    color: $colorA;
                              }
                              .item-del {
                                    flex: 1;
                                    width: 14px;
                                    height: 12px;
                                    background: url("/imgs/icon-close.png")
                                          no-repeat center;
                                    background-size: contain;
                                    cursor: pointer;
                              }
                        }
                  }
            }
            .order-wrap {
                  font-size: 14px;
                  color: #666666;
                  margin-top: 20px;
                  height: 50px;
                  line-height: 50px;
                  .cart-tip {
                        margin-left: 29px;
                        a {
                              color: #666666;
                              margin-right: 29px;
                        }
                        span {
                              color: $colorA;
                              margin: 0 5px;
                        }
                  }
                  .total {
                        font-size: 14px;
                        color: $colorA;
                        span {
                              font-size: 24px;
                        }
                        a {
                              width: 220px;
                              height: 50px;
                              line-height: 50px;
                              font-size: 18px;
                              margin-left: 37px;
                        }
                  }
            }
      }
}
</style>