<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-one"></span>预约维修服务</li>
        <li><span class="icon-two"></span>7天无理由退货</li>
        <li><span class="icon-three"></span>15天免费换货</li>
        <li><span class="icon-four"></span>满99包邮</li>
        <li><span class="icon-five"></span>520余家售后网点</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-bar"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.service {
  padding: 33px 0;
  color: #666666;
  font-size: 16px;
  //li 标签是 行标签 设置inline-block 
  li {
    display: inline-block;
    width: 19.9%;
    text-align: center;
    border-right: 1px solid #e5e5e5;
  }
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 8px;
  }
  .icon-one {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("/imgs/icon-setting.png") no-repeat center;
    background-size: contain;
  }
  .icon-two {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("/imgs/icon-7day.png") no-repeat center;
    background-size: contain;
  }
  .icon-three {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("/imgs/icon-15day.png") no-repeat center;
    background-size: contain;
  }
  .icon-four {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("/imgs/icon-post.png") no-repeat center;
    background-size: contain;
  }
  .icon-five {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("/imgs/icon-setting.png") no-repeat center;
    background-size: contain;
  }
}
</style>
