<template>
    <div>
        <order-header  title="我的购物车">
            <template>
                <span slot="tip">温馨提示：参评是否购买成功，以最终下单为准则，请尽快结算</span>
            </template>
        </order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from '../components/orderHeader'
import NavFooter from '../components/NavFooter'
export default {
    name:'nav-cart',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>
<style scoped>

</style>