(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{324:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("1cd25f71",content,!0,{sourceMap:!1})},325:function(t,e,n){"use strict";n.r(e);n(14),n(1);var r=n(101),c=n.n(r),o={name:"PageApi",props:{newsDesk:String,earliestDate:String,latestDate:String,page:{default:0}},data:function(){return{loading:!0,responseArticles:null,inError:!1,NY_TIMES:"https://www.nytimes.com/",API_NYT_ARTICLE:"https://api.nytimes.com/svc/search/v2/articlesearch.json?",NEWSDESK:"begin_date=".concat(this.earliestDate,"&end_date=").concat(this.latestDate,"&fq=news_desk:(%22").concat(this.newsDesk,"%22)&page=").concat(this.page,"&sort=newest&api-key="),API_KEY:"5K7S1Io86tSdhZgxgg514mGvp7Km3sUX"}},mounted:function(){var t=this,e="".concat(this.API_NYT_ARTICLE).concat(this.NEWSDESK).concat(this.API_KEY);c.a.get(e).then((function(e){t.responseArticles=e.data.response.docs,console.log(t.responseArticles)})).catch((function(t){return console.log(t)}),this.inError=!0).finally((function(){return t.loading=!1}))}},l=(n(327),n(64)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},t._l(t.responseArticles,(function(n){return e("div",{staticClass:"card"},[e("img",{attrs:{src:t.NY_TIMES+n.multimedia[14].url}}),t._v(" "),e("h5",{staticClass:"card-title"},[t._v(t._s(n.headline.main))]),t._v(" "),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(n.byline.original))]),t._v(" "),e("div",{staticClass:"card-body"},[t._v("\r\n            "+t._s(n.abstract)+"\r\n        ")]),t._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:n.web_url}},[t._v("Read at nytimes.com")])])})),0)}),[],!1,null,"74adab5c",null);e.default=component.exports},327:function(t,e,n){"use strict";n(324)},328:function(t,e,n){var r=n(104)(!1);r.push([t.i,".content[data-v-74adab5c]{display:flex;flex-flow:row wrap}.card[data-v-74adab5c]{width:240px;margin:1em;padding:1em}img[data-v-74adab5c]{margin-bottom:1em}.card-title[data-v-74adab5c]{height:7em}",""]),t.exports=r},329:function(t,e,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("28fd431f",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n(329)},339:function(t,e,n){var r=n(104)(!1);r.push([t.i,"h1[data-v-bbb53f4e]{text-align:center;margin:1em}",""]),t.exports=r},343:function(t,e,n){"use strict";n.r(e);var r={name:"PageRender",components:{PageApi:n(325).default}},c=(n(338),n(64)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h1",[t._v("Reader")]),t._v(" "),e("PageApi",{attrs:{newsDesk:"business",earliestDate:"20210705",latestDate:"20220705"}})],1)}),[],!1,null,"bbb53f4e",null);e.default=component.exports;installComponents(component,{PageApi:n(325).default})}}]);