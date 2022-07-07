<template>
    <div class="container">
        <h1>Reader</h1>
        
        <PageApi 
            newsDesk="business"
            earliestDate="20210705"
            latestDate="20220705"
        />

    </div>
</template>

<script>
import PageApi from './PageApi.vue';

    export default {
    name: "PageRender",
    components: { PageApi }
}
</script>

<style scoped>
    h1 {
        text-align: center;
        margin: 1em;
    }
</style>