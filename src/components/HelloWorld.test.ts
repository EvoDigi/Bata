// @vitest-environment happy-dom

import { expect, it } from 'vitest';
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue';

it('should render', async () => {
   const wrapper = mount(HelloWorld);
   expect(wrapper.find('count is 0')).toBeDefined();
});