<script>
import Card from "@/UI/card.vue";

export default {
    name: "item_card",
    components: {Card},
    props: ['item']
}
</script>

<template>
    <div class="card_wrapper">
        <Card :title="item.title" :name="item.lvl + ' lvl'">
            <router-link :to="`${item.id}`">view</router-link>
            <img :src="item.img"/>
        </Card>
    </div>
</template>

<style scoped>

</style>
