<template>
    <div>
        <NavBar />
        <PageAccordion />
    </div>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import PageAccordion from '../components/PageAccordion.vue'

export default {
    name: "AccordionPage",
    head() {
        return {
            title: "Accordion"
        };
    },
    components: {
        NavBar,
        PageAccordion }
}
</script>