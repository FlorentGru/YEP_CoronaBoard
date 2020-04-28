// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

//Vue test, not working because of import matters => lot of undefined var

const api = require("../../src/data/StatsApi")


describe('Data.js', () => {
  it('GetCountryData with France in argument', async () => {
    const response = await api.default.getCountryData("France");
    const latest = response.data[response.data.length - 1]

    // console.log(latest)

    expect(latest.Country).toBe("France")
    expect(typeof latest.Confirmed).toBe("number")
    expect(typeof latest.Deaths).toBe("number")
    expect(typeof latest.Recovered).toBe("number")
  })
})