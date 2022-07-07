<template>
    <div>
        <NavBar />
        <PageRender />
    </div>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import PageRender from '../components/PageRender.vue'

export default {
    name: "ReaderPage",
    head() {
        return {
            title: "Reader"
        };
    },
    components: {
        NavBar,
        PageRender
        }
}
</script>