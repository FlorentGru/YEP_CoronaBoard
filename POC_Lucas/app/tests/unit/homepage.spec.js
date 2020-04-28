import { shallowMount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue'

describe('HomePage.vue', () => {
    const wrapper = shallowMount(HomePage)
    it('expect the render to contain a specific html conponent', () => {
      expect(wrapper.html()).toContain('<h1>HomePage</h1>')
    })
    
    it('verify the variable value at init', () => {
      expect(wrapper.vm.message).toBe("i am beautifull")
    })

    it('Change the variable value that have been init', async () => {
      expect(wrapper.vm.message).toBe("i am beautifull")
      wrapper.vm.message = "changed"
      await wrapper.vm.$nextTick() // pour actualliser la vue
      expect(wrapper.vm.message).toBe("changed")
    })
})
