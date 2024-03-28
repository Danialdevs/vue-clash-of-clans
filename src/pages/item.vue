<script>
import items from '@/seeds/items.json'
import notf from '@/pages/404.vue'

export default {
    name: "item",
    data(){
        return{
            item: null
        }
    },
    created() {
        const id = this.$route.params.id
        const item = items.find(el => el.id === parseInt(id)); // преобразуем id в число для сравнения
        if(!item){
            this.$router.push('/404'); // перенаправляем на страницу 404
        }
        this.item = item
        console.log(item)
    }

}
</script>

<template>
    <div class="wrapper-person">
        <div v-if="item">
            <img :src="item.img" :alt="item.descr" />
            <h1  class="title">{{ item.title }}</h1>
            <p>{{ item.descr }}</p>


            <div>
                <router-link to="/" class="btn btnDefault">Back to home</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
