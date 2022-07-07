<template>
    <div>
        <NavBar />
        <PageLanding />
    </div>

</template>

<script>
import NavBar from '../components/NavBar.vue';
import PageLanding from '../components/PageLanding.vue';
export default {
    name: "IndexPage",
    components: {
        NavBar,
        PageLanding
    },
    head() { return {
        title: "Home"
    }}
}
</script>
