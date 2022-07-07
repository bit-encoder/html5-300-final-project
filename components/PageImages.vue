<template>
    <div class="container">

        <h1>Images</h1>

        <p>
            Tried to migrate <code>mixin</code>, but <code>babel-loader</code> kept freezing. Had to remove
            a component that called the <code>mixin</code>. Tried and tried, but could not make it work. For
            whatever reason, <code>babel</code> just did not like that. Opted to render the items <em>in
            situ</em>, that is, in this page.
        </p>

        <div class="image-container" v-for="entry in imageList" 
            :key="entry.title">

            <h3>{{entry.title}}</h3>
            <img
                :src="entry.url"
                :alt="entry.alt"/>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'PageImages',
    data() { return {
        imageList: [
            { 
                title:"Away from Civilization",
                url:require('@/assets/cabin.jpg'),
                alt: 'a cabin in the woods'
            },
            {
                title:"Apolizing to the Wife",
                url:require('@/assets/bouquet.jpg'),
                alt: 'bouquet of flowers'
            },
            {
                title:"Bold and Brave",
                url:require('@/assets/bird-branch.jpg'),
                alt: 'bird sittin on a branch'
            },
            {
                title:"Happy Place",
                url:require('@/assets/hills.jpg'),
                alt: 'hills on the foreground, clouds in the background'
            },
            {
                title:"Kink in the Neck",
                url:require('@/assets/birdy-tilted-head.jpg'),
                alt: 'bird tilting its head'
            },
            {
                title:"Comb the Desert!",
                url:require('@/assets/lego-stormtrooper.jpg'),
                alt: 'lego stormtrooper walkin on sand'
            }
        ]
    }}
}
</script>

<style scoped>
    h1 {
        text-align: center;
        margin: 1em;
    }
    
    .image-container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
    }

    .image-container h3 {
        text-align: center;
        margin-top: 2em;
        margin-bottom: 0.5em;
    }

    .image-container img {
        margin-left: auto;
        margin-right: auto;
    }
</style>