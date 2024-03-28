<script>
import Card from "@/UI/card.vue";
import Item_card from "@/UI/item_card.vue";
import items from '@/seeds/items.json'
export default {
    name: "test",
    components: {Card, Item_card},
    data(){
        return{
            items: items
        }
    }
}
</script>

<template>
    <div class="md-body">

        <Item_card v-for="item in items" :item="item" :key="item.id"/>


    </div>
</template>
<style scoped>
.md-body{
    display: flex;
    gap: 10px;
}
</style>
