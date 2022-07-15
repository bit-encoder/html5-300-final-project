export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as PageAccordion } from '../..\\components\\PageAccordion.vue'
export { default as PageApi } from '../..\\components\\PageApi.vue'
export { default as PageGrid } from '../..\\components\\PageGrid.vue'
export { default as PageImages } from '../..\\components\\PageImages.vue'
export { default as PageLanding } from '../..\\components\\PageLanding.vue'
export { default as PageRender } from '../..\\components\\PageRender.vue'

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
