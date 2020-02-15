<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.mi.com/" target="_blank">小米商城</a><span>|</span>
      <a href="https://www.mi.com/" target="_blank">MIUI</a><span>|</span>
      <a href="https://www.mi.com/" target="_blank">米家</a><span>|</span>
      <a href="https://www.mi.com/" target="_blank">问题反馈</a><span>|</span>
      <a href="https://www.mi.com/" target="_blank">廉政举报</a><span>|</span>
      <a href="https://www.mi.com/" target="_blank">诚信合规</a>
    </div>
    <div class="copyright"> 
      © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号
      京网文[2020]0276-042号
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer"
};
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 36px;
      // height: 53px;
      background-size: contain;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
      margin-bottom: 13px;
    }
    span {
      margin: 0 10px;
    }
  }
}
</style>
