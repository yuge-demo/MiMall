<template>
      <div class="order-confirm">
            <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  style="position: absolute; width: 0px; height: 0px; overflow: hidden;"
            >
                  <defs>
                        <symbol id="icon-add" viewBox="0 0 31 32">
                              <title>add</title>
                              <path
                                    d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"
                                    class="path1"
                              />
                        </symbol>
                        <symbol id="icon-del" viewBox="0 0 32 32">
                              <title>delete</title>
                              <path
                                    d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
                                    class="path1"
                              />
                              <path
                                    d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
                                    class="path2"
                              />
                              <path
                                    d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
                                    class="path3"
                              />
                              <path
                                    d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
                                    class="path4"
                              />
                        </symbol>
                        <symbol id="icon-edit" viewBox="0 0 32 32">
                              <title>edit</title>
                              <path
                                    d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"
                                    class="path1"
                              />
                        </symbol>
                  </defs>
            </svg>
            <div class="wrapper">
                  <div class="container">
                        <div class="order-box">
                              <div class="item-address">
                                    <h2 class="addr-title">收货地址</h2>
                                    <div class="addr-list clearfix">
                                          <div class="addr-info">
                                                <h2>连宇</h2>
                                                <div class="phone">13131326700</div>
                                                <div class="street">
                                                      河北省 张家口市 桥东区
                                                      <br />胜利北路
                                                </div>
                                                <div class="action">
                                                      <a
                                                            href="javascript:;"
                                                            class="fl"
                                                            @click="delAddress(item)"
                                                      >
                                                            <svg class="icon icon-del">
                                                                  <use xlink:href="#icon-del" />
                                                            </svg>
                                                      </a>
                                                      <a href="javascript:;" class="fr">
                                                            <svg class="icon icon-edit">
                                                                  <use xlink:href="#icon-edit" />
                                                            </svg>
                                                      </a>
                                                </div>
                                          </div>
                                          <div
                                                class="addr-info"
                                                v-for="(item ,value ) in list"
                                                :key="value"
                                          >
                                                <h2>{{item.receiverName}}</h2>
                                                <div class="phone">{{item.receiverMobile}}</div>
                                                <div
                                                      class="street"
                                                >{{item.receiverProvince + ' ' + item.receiverCity + '' + item.receiverDistrict + ' ' +item.receiverAddress}}</div>
                                                <div class="action">
                                                      <a
                                                            href="javascript:;"
                                                            class="fl"
                                                            @click="delAddress(item)"
                                                      >
                                                            <svg class="icon icon-del">
                                                                  <use xlink:href="#icon-del" />
                                                            </svg>
                                                      </a>
                                                      <a href="javascript:;" class="fr">
                                                            <svg class="icon icon-edit">
                                                                  <use xlink:href="#icon-edit" />
                                                            </svg>
                                                      </a>
                                                </div>
                                          </div>
                                          <div class="addr-add" @click="openAddressModel">
                                                <div class="icon-add"></div>
                                                <div>添加新地址</div>
                                          </div>
                                    </div>
                              </div>
                              <div class="item-good">
                                    <h2>商品</h2>
                                    <ul>
                                          <li v-for="(item ,value) in cartList" :key="value">
                                                <div class="good-name">
                                                      <img v-lazy="item.productMainImage" alt />
                                                      <span>{{ item.productName+ '' + item.productSubtitle}}</span>
                                                </div>
                                                <div
                                                      class="good-price"
                                                >{{item.productPrice}}x{{item.quantity}}</div>
                                                <div class="good-total">{{item.productTotalPrice}}元</div>
                                          </li>
                                    </ul>
                              </div>
                              <div class="item-shipping">
                                    <h2>配送方式</h2>
                                    <span>包邮</span>
                              </div>
                              <div class="item-invoice">
                                    <h2>发票</h2>
                                    <a href="javascript:;">电子发票</a>
                                    <a href="javascript:;">个人</a>
                              </div>
                              <div class="detail">
                                    <div class="item">
                                          <span class="item-name">商品数量：</span>
                                          <span class="item-val">{{count}}件</span>
                                    </div>
                                    <div class="item">
                                          <span class="item-name">商品总价：</span>
                                          <span class="item-val">{{cartTotalPrice}}元</span>
                                    </div>
                                    <div class="item">
                                          <span class="item-name">优惠价格：</span>
                                          <span class="item-val">0元</span>
                                    </div>
                                    <div class="item">
                                          <span class="item-name">运费：</span>
                                          <span class="item-val">0元</span>
                                    </div>
                                    <div class="item">
                                          <span class="item-name">应付总额：</span>
                                          <span class="item-val">{{cartTotalPrice}}元</span>
                                    </div>
                              </div>
                              <div class="btn-group">
                                    <a href="/#/cart" class="btn btn-default btn-large">返回购物车</a>
                                    <a href="javascript:;" class="btn btn-large">去结算</a>
                              </div>
                        </div>

                        <model
                              title="新增确认"
                              btnType="1"
                              v-bind:showModel="showEditModel"
                              @cancel="showEditModal=false"
                              @submit="submitAddress"
                        >
                              <template name="body">
                                    <div class="edit-wrap">
                                          <div class="item">
                                                <input
                                                      type="text"
                                                      class="input"
                                                      placeholder="姓名"
                                                      v-model="checkItem.receiverName"
                                                />
                                                <input
                                                      type="text"
                                                      class="input"
                                                      placeholder="手机号"
                                                      v-model="checkItem.receiverMobile"
                                                />
                                          </div>
                                          <div class="item">
                                                <!-- <input type="text" class="input" placeholder="选择省/市/区/街道"> -->
                                                <select
                                                      name="province"
                                                      v-model="checkItem.receiverProvince"
                                                >
                                                      <option value="北京">北京</option>
                                                      <option value="北京">天津</option>
                                                      <option value="北京">河北</option>
                                                </select>
                                                <select name="city" v-model="checkItm.receiverCity">
                                                      <option value="北京">北京</option>
                                                      <option value="北京">天津</option>
                                                      <option value="北京">河北</option>
                                                </select>
                                                <select
                                                      name="district"
                                                      v-model="checkItem.receiverDistrict"
                                                >
                                                      <option value="北京">北京</option>
                                                      <option value="北京">天津</option>
                                                      <option value="北京">河北</option>
                                                </select>
                                          </div>
                                          <div class="item">
                                                <textarea
                                                      name="street"
                                                      v-model="checkItem.receiverAddress"
                                                ></textarea>
                                          </div>
                                          <div class="item">
                                                <input
                                                      type="text"
                                                      class="input"
                                                      placeholder="邮编"
                                                      v-model="checkItem.receiverZip"
                                                />
                                          </div>
                                    </div>
                              </template>
                        </model>
                  </div>
            </div>
      </div>
</template>
<script>
import Model from "./../components/Model";
import { Message } from "element-ui";
export default {
      name: "order-confirm",
      data() {
            return {
                  list: [], //收货地址列表
                  cartList: [], // 购物车中需要结算的商品列表
                  cartTotalPrice: 0, //商品总金额
                  count: 0, //数量
                  checkItem: {}, //选中商品对象
                  userAction: "", //用户点击行为   0 就是新增   1就是 编辑  2就是删除
                  showDelModel: false, //是否显示删除框
                  showEditModel: false //是否显示编辑，新增列表框
            };
      },
      components: {
            Model
      },
      mounted() {
            this.getAddressList();
            this.getCartList();
      },
      methods: {
            //收货地址
            getAddressList() {
                  this.axios.get("/shippings").then(res => {
                        this.list = res.list;
                  });
            },
            //打开新增地址弹框
            openAddressModel() {
                  (this.userAction = 0),
                        (this.checkItem = {}),
                        (this.showEditModel = true);
            },
            delAddress(item) {
                  this.checkItem = item;
                  this.userAction = 2;
                  this.showDelModel = true;
            },
            //地址删除 编辑 新增功能
            submitAddress() {
                  let { checkItem, userAction } = this;
                  let method,
                        url,
                        params = {};
                  if (userAction == 0) {
                        (method = "post"),
                              (url = "/shippings")
                  }else if (userAction == 1) {
                        (method = "put"), (url = `/shippings/${checkItem.id}`);
                  }else {
                        (method = "delete"),
                              (url = `/shippings/${checkItem.id}`);
                  }
                  if(userAction ==0 || userAction ==1){
                        let  {receiverName,receiverMobile,receiverProvince,receiverCity,receiverDistrict,receiverAddress,receiverZip} = checkItem
                        let  errMsg;
                        if(!receiverName){
                              errMsg = '请输入收货人名称'
                        }
                        else if(!receiverMobile || !/\d{11}/.test(receiverMobile)){
                              errMsg = '请输入正确的手机号'
                         }
                         else if(!receiverProvince){
                              errMsg = '需要选择省份'
                         }
                         else if(!receiverCity){
                              errMsg = '需要选择城市'
                         }
                         else if(!receiverDistrict){
                              errMsg = '需要选择区县'
                         }
                          else if(!receiverAddress){
                              errMsg = '需要输入地址'
                         }
                         else if(!receiverZip){
                              errMsg = '请输入邮编地址'
                         }
                        if(errMsg){
                              Message.error('请输入收货人名称');
                              return;
                        }
                        params ={
                                    receiverName,
                                    receiverMobile,
                                    receiverProvince,
                                    receiverCity,
                                    receiverDistrict,
                                    receiverAddress,
                                    receiverZip
                        }
                  }
                  // this.axios.get(uel)
                  this.axios[method](url,params).then(() => {
                        this.closeModel();
                        this.getAddressList();
                        Message.success("操作成功");
                  });
            },
            closeModel() {
                  this.checkItem = {};
                  this.userAction = "";
                  this.showDelModel = false;
            },
            //获取商品列表
            getCartList() {
                  this.axios.get("/carts").then(res => {
                        let list = res.cartProductVoList; //购物车中所有的商品
                        this.cartTotalPrice = res.cartTotalPrice; //选中的商品总金额
                        this.cartList = list.filter(
                              item => item.productSelected
                        ); //商品列表
                        this.cartList.map(item => {
                              this.count += item.quantity;
                        });
                  });
            }
      }
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/button.scss";

.order-confirm {
      .wrapper {
            background-color: #f5f5f5;
            padding-top: 30px;
            padding-bottom: 84px;
            .order-box {
                  background-color: #ffffff;
                  padding-left: 40px;
                  padding-bottom: 40px;
                  .addr-title {
                        font-size: 20px;
                        color: #333333;
                        font-weight: 200;
                        margin-bottom: 21px;
                  }
                  .item-address {
                        padding-top: 20px;
                        .addr-list {
                              .addr-info,
                              .addr-add {
                                    box-sizing: border-box;
                                    float: left;
                                    width: 271px;
                                    height: 180px;
                                    border: 1px solid #e5e5e5;
                                    margin-right: 15px;
                                    padding: 15px 24px;
                                    font-size: 14pz;
                                    color: #757575;
                              }
                              .addr-info {
                                    cursor: pointer;
                                    h2 {
                                          height: 27px;
                                          font-size: 18px;
                                          font-weight: 300;
                                          color: #333333;
                                          margin-bottom: 10px;
                                    }
                                    .street {
                                          height: 50px;
                                    }
                                    .action {
                                          height: 50px;
                                          line-height: 50px;
                                          .icon {
                                                width: 20px;
                                                height: 20px;
                                                fill: #666666;
                                                vertical-align: middle;
                                                &:hover {
                                                      fill: #ff6700;
                                                }
                                          }
                                          &.checked {
                                                border: 1px solid #ff6700;
                                          }
                                    }
                              }
                              .addr-add {
                                    text-align: center;
                                    color: #999999;
                                    cursor: pointer;
                                    .icon-add {
                                          width: 30px;
                                          height: 30px;
                                          border-radius: 50%;
                                          background: url("/imgs/icon-add.png")
                                                #e0e0e0 no-repeat center;
                                          background-size: 14px;
                                          margin: 0 auto;
                                          margin-top: 45px;
                                          margin-bottom: 10px;
                                    }
                              }
                        }
                  }
                  .item-good {
                        margin-top: 34px;
                        border-bottom: 1px solid #e5e5e5;
                        padding-bottom: 12px;
                        h2 {
                              border-bottom: 1px solid #e5e5e5;
                              padding-bottom: 5px;
                        }
                        li {
                              display: flex;
                              align-items: center;
                              height: 40px;
                              line-height: 40px;
                              margin-top: 10px;
                              font-size: 16px;
                              color: #333333;
                              .good-name {
                                    flex: 5;
                                    img {
                                          width: 30px;
                                          height: 30px;
                                          vertical-align: middle;
                                    }
                              }
                              .good-price {
                                    flex: 2;
                              }
                              .good-total {
                                    padding-right: 44px;
                                    color: #ff6600;
                              }
                        }
                  }
                  .item-shipping,
                  .item-invoice {
                        margin-top: 31px;
                        line-height: 20px;
                        h2 {
                              display: inline-block;
                              margin-right: 71px;
                              font-size: 20px;
                              width: 80px;
                        }
                        span,
                        a {
                              font-size: 16px;
                              color: #ff6700;
                              margin-right: 23px;
                        }
                  }
                  .detail {
                        padding: 50px 44px 33px 0;
                        border-bottom: 1px solid #f5f5f5;
                        text-align: right;
                        font-size: 16px;
                        color: #666666;
                        .item-val {
                              color: #ff6700;
                        }
                        .item {
                              line-height: 15px;
                              margin-bottom: 12px;
                        }
                        .iten-val {
                              display: inline-block;
                              margin-bottom: 12px;
                        }
                        .item-val {
                              display: inline-block;
                              width: 100px;
                              .item-total {
                                    .item-val {
                                          font-size: 28px;
                                    }
                              }
                        }
                  }
                  .btn-group {
                        margin-top: 37px;
                        text-align: right;
                  }
            }
      }
      .edit-wrap {
            font-size: 14px;
            .item {
                  margin-bottom: 15px;
                  .input {
                        display: inline-block;
                        width: 283px;
                        height: 40px;
                        line-height: 40px;
                        padding-left: 15px;
                        border: 1px solid #e5e5e5;
                        & + .input {
                              margin-left: 14px;
                        }
                  }
                  select {
                        height: 40px;
                        line-height: 40px;
                        border: 1px solid #e5e5e5;
                        margin-right: 15px;
                        background-color: #cccccc;
                  }
                  textarea {
                        height: 62px;
                        width: 100%;
                        padding: 13px 15px;
                        box-sizing: border-box;
                  }
            }
      }
}
</style>