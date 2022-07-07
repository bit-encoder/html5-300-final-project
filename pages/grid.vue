<template>
    <div>
        <NavBar />
        <PageGrid />
    </div>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import PageGrid from '../components/PageGrid.vue'
export default {
    name: "GridPage",
    head() {
        return {
            title: "Grid"
        };
    },
    components: {
        NavBar,
        PageGrid }
}
</script>