import { shallowMount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue'

describe('HomePage.vue', () => {
    const wrapper = shallowMount(HomePage)
    it('expect the render to contain a specific html', () => {
      expect(wrapper.html()).toContain('<h1>HomePage</h1>')
    })
  })
  