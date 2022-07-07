<template>
    <div>
        <NavBar />
        <PageImages />
    </div>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import PageImages from '../components/PageImages.vue'

export default {
    name: "ImagesPage",
    head() {
        return {
            title: "Images"
        };
    },
    components: {
        NavBar,
        PageImages
    }
}
</script>