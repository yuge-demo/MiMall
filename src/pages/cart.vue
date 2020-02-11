<template>
    <div>
        <order-header></order-header>
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