<template>

<div class="content">
    <div class="card" v-for="entry in responseArticles">
        <img :src="NY_TIMES + entry.multimedia[14].url"/>
        <h5 class="card-title">{{entry.headline.main}}</h5>
        <h6 class="card-subtitle  mb-2 text-muted">{{entry.byline.original}}</h6>
        <div class="card-body">
            {{entry.abstract}}
        </div>

        <a :href="entry.web_url" class="btn btn-primary">Read at nytimes.com</a>
    </div>
</div>
    

</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'PageApi',
        props: {
            newsDesk: String,
            earliestDate: String,
            latestDate: String,
            page: {
                default: 0
            }
        },
        
        data() { return {
            loading: true,
            responseArticles: null,
            inError: false,
            NY_TIMES: 'https://www.nytimes.com/',
            API_NYT_ARTICLE: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?',
            NEWSDESK: `begin_date=${this.earliestDate}&end_date=${this.latestDate}&fq=news_desk:(%22${this.newsDesk}%22)&page=${this.page}&sort=newest&api-key=`,
            API_KEY: '5K7S1Io86tSdhZgxgg514mGvp7Km3sUX'
        }},
            

        mounted() {
            const finalCall = `${this.API_NYT_ARTICLE}${this.NEWSDESK}${this.API_KEY}`

            axios.get(finalCall)
                .then(resp => { this.responseArticles = resp.data.response.docs,
                    console.log(this.responseArticles)})
                .catch(error => console.log(error), this.inError = true)
                .finally(() => this.loading = false)
        },
    }
</script>

<style scoped>
    .content{
        display: flex;

        flex-flow: row wrap;
    }

    .card {
        width: 240px;

        margin: 1em;
        padding: 1em;

    }

    img {
        margin-bottom: 1em;
    }

    .card-title {
        height: 7em;
    }
</style>