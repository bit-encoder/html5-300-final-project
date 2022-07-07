import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ffb1d130 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _8d486bba = () => interopDefault(import('..\\pages\\accordion.vue' /* webpackChunkName: "pages/accordion" */))
const _6170528a = () => interopDefault(import('..\\pages\\grid.vue' /* webpackChunkName: "pages/grid" */))
const _45b93ca6 = () => interopDefault(import('..\\pages\\images.vue' /* webpackChunkName: "pages/images" */))
const _32d41a78 = () => interopDefault(import('..\\pages\\reader.vue' /* webpackChunkName: "pages/reader" */))
const _c0421ba6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _ffb1d130,
    name: "about"
  }, {
    path: "/accordion",
    component: _8d486bba,
    name: "accordion"
  }, {
    path: "/grid",
    component: _6170528a,
    name: "grid"
  }, {
    path: "/images",
    component: _45b93ca6,
    name: "images"
  }, {
    path: "/reader",
    component: _32d41a78,
    name: "reader"
  }, {
    path: "/",
    component: _c0421ba6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
