<template>
      <div class="product">
            <product-param>
                  <template slot="buy">
                        <button class="btn">立即购买</button>
                  </template>
            </product-param>
            <div class="content">
                  <div class="item-bg">
                        <h2>红米Note7</h2>
                        <h3>4800万拍照千元机 / 品质“小金刚”</h3>
                        <div class="p">
                              <a href="javascridivt:;">全球首款双屏 GP</a>
                              <span>|</span>
                              <a href="javascript:;">晓龙845</a>
                              <span>|</span>
                              <a href="javascript:;">AI变焦双摄</a>
                              <span>|</span>
                              <a href="javascript:;">红外人脸识别</a>
                        </div>
                        <div class="price">
                              <span>
                                    $
                                    <em>9000</em>
                              </span>
                        </div>
                  </div>
                  <div class="item-bg-2"></div>
                  <div class="item-bg-3"></div>
                  <div class="item-swiper">
                        <swiper :options="swiperOption">
                              <swiper-slide>
                                    <img src="/imgs/product/gallery-2.png" alt />
                              </swiper-slide>
                              <swiper-slide>
                                    <img src="/imgs/product/gallery-3.png" alt />
                              </swiper-slide>
                              <swiper-slide>
                                    <img src="/imgs/product/gallery-4.png" alt />
                              </swiper-slide>
                              <swiper-slide>
                                    <img src="/imgs/product/gallery-5.jpg" alt />
                              </swiper-slide>
                              <swiper-slide>
                                    <img src="/imgs/product/gallery-6.jpg" alt />
                              </swiper-slide>
                              <div class="swiper-pagination" slot="pagination"></div>
                              <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
                        </swiper>
                        <p class="desc">小米8 AI变焦双摄拍摄</p>
                  </div>
                  <div class="item-video">
                        <h2>
                              60帧超慢动作摄影
                              <br />慢慢回味每一瞬间的精彩
                        </h2>
                        <p>
                              后置960帧电源般超慢动作视频，将眨眼间的美妙展现的连淋漓尽致！
                              <br />更能AI精准分析视频内容，15个场景智能匹配背景音效。
                        </p>
                        <div class="video-bg"></div>
                        <div class="video-box">
                              <!-- 后面背景图片的背景 （遮罩） -->
                              <div class="overlay"></div>
                              <div class="video">
                                    <video src="/imgs/product/video.mp4"  muted  autoplay controls="controls"></video>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>
<script>
import ProductParam from "./../components/ProductParam";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
      name: "nav-product",
      components: {
            ProductParam,
            swiper,
            swiperSlide
      },
      data() {
            return {
                  swiperOption: {
                        autoplay: true,
                        loop: true,
                        slidesPerView: 2,
                        spaceBetween: 30,
                        freeMode: true,
                        pagination: {
                              el: ".swiper-pagination",
                              clickable: true
                        }
                  }
            };
      }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/button.scss";
.product {
      .content {
            .item-bg {
                  background: url("/imgs/product/product-bg-1.png") no-repeat
                        center;
                  height: 718px;
                  text-align: center;
                  h2 {
                        font-size: 80px;
                        padding-top: 10px;
                  }
                  h3 {
                        font-size: 24px;
                        //属性增加或减少字符间的空白
                        letter-spacing: 10px;
                  }
                  .p {
                        margin-top: 21px;
                        margin-bottom: 10px;
                        a {
                              font-size: 16px;
                              color: $colorB;
                        }
                        span {
                              margin: 0 15px;
                        }
                  }
                  .price {
                        font-size: 30px;
                        color: $colorB;
                        //概属性设置使用斜体，倾斜或正常字体，
                        em {
                              font-style: normal;
                              font-size: 38px;
                        }
                  }
            }
            .item-bg-2 {
                  background: url("/imgs/product/product-bg-2.png") no-repeat
                        center;
                  height: 480px;
                  background-size: 1226px 397px;
            }
            .item-bg-3 {
                  background: url("/imgs/product/product-bg-3.png") no-repeat
                        center;
                  height: 638px;
                  background-size: cover;
            }
            .item-swiper {
                  margin: 36px auto 52px;
                  .desc {
                        font-size: 18px;
                        color: $colorB;
                        text-align: center;
                  }
                  img {
                        width: 100%;
                  }
            }
      }
}
</style>