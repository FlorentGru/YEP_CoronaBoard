import Vue from 'vue';
import jsdom from 'jsdom';
import HelloComponent from '../src/views/HomePage.vue';

const renderer = require('vue-server-renderer').createRenderer();

describe('Test suite for HomePage', () => {
  it('Test message in HomePage', () => {
    const ClonedComponent = Vue.extend(HelloComponent);
    const NewComponent = new ClonedComponent({
      data() {
        return {
          msg: 'Hello There',
        };
      },
    }).$mount();
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const firstHeading = dom.window.document.querySelector('h1');
      expect(firstHeading.textContent).toContain('Hello There');
    });
  });
});