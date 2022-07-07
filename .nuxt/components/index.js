export const NavBar = () => import('../..\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const PageAccordion = () => import('../..\\components\\PageAccordion.vue' /* webpackChunkName: "components/page-accordion" */).then(c => wrapFunctional(c.default || c))
export const PageApi = () => import('../..\\components\\PageApi.vue' /* webpackChunkName: "components/page-api" */).then(c => wrapFunctional(c.default || c))
export const PageGrid = () => import('../..\\components\\PageGrid.vue' /* webpackChunkName: "components/page-grid" */).then(c => wrapFunctional(c.default || c))
export const PageImages = () => import('../..\\components\\PageImages.vue' /* webpackChunkName: "components/page-images" */).then(c => wrapFunctional(c.default || c))
export const PageLanding = () => import('../..\\components\\PageLanding.vue' /* webpackChunkName: "components/page-landing" */).then(c => wrapFunctional(c.default || c))
export const PageRender = () => import('../..\\components\\PageRender.vue' /* webpackChunkName: "components/page-render" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
