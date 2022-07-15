import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a295144 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _3c949402 = () => interopDefault(import('..\\pages\\accordion.vue' /* webpackChunkName: "pages/accordion" */))
const _4968f15f = () => interopDefault(import('..\\pages\\grid.vue' /* webpackChunkName: "pages/grid" */))
const _53686351 = () => interopDefault(import('..\\pages\\images.vue' /* webpackChunkName: "pages/images" */))
const _adcdc7c8 = () => interopDefault(import('..\\pages\\reader.vue' /* webpackChunkName: "pages/reader" */))
const _69e12c09 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4a295144,
    name: "about"
  }, {
    path: "/accordion",
    component: _3c949402,
    name: "accordion"
  }, {
    path: "/grid",
    component: _4968f15f,
    name: "grid"
  }, {
    path: "/images",
    component: _53686351,
    name: "images"
  }, {
    path: "/reader",
    component: _adcdc7c8,
    name: "reader"
  }, {
    path: "/",
    component: _69e12c09,
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
