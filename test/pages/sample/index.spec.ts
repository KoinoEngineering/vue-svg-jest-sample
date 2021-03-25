import { mount } from '@vue/test-utils'
import Sample from '@/pages/sample/index.vue'

describe('test sample', () => {
  test('svg render test', () => {
    expect(mount(Sample).html()).toMatchSnapshot()
  })
})
