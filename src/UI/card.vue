<script>
export default {
    name: "card",
    props: ['name', 'title']
}
</script>

<template>
<div class="card">
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
        <slot/>
    </div>
</div>
</template>

<style scoped>

</style>
