import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login.vue', () => {
    const wrapper = mount(Login)
    
    it('expect the render to contain a button in the html', () => {
      expect(wrapper.contains('button')).toBe(true)
    })

    it('simulate button clic with empty text', () => {
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.input.username).toBe("")
        expect(wrapper.vm.input.password).toBe("")
    })
    
    it('simulate button clic with wrong login', () => {
        const button = wrapper.find('button')
        wrapper.vm.input.username = "test"
        wrapper.vm.input.password = "pass"
        button.trigger('click')
        expect(wrapper.vm.input.username).toBe("test")
        expect(wrapper.vm.input.password).toBe("pass")
    })

    it('simulate button clic with a valid login', () => {
        const button = wrapper.find('button')
        wrapper.vm.input.username = "Lucas"
        wrapper.vm.input.password = "wrong"
        button.trigger('click')
        expect(wrapper.vm.input.username).toBe("Lucas")
        expect(wrapper.vm.input.password).toBe("wrong")
    })
})
