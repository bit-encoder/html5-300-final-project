<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <ul class="navbar-nav">
            <li class="nav-item" v-for="entry in theseLinks" :key="entry.name">
                <NuxtLink class="nav-link" :to="'/' + entry.url" >{{entry.text}}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            theseLinks: [
                {"text": "home", "url": "" },
                {"text": "reader", "url": "reader"},
                {"text": "images", "url": "images" },
                {"text": "accordion", "url": "accordion" },
                {"text": "grid", "url": "grid" },
                {"text": "about", "url": "about" }]
        }
    }
}
</script>

<style>
    .nav-link::first-letter{
        text-transform: capitalize ;
    }
</style>