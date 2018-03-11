import Toggle from './Toggle'
import { testStateContainer } from '../../test-utils'

test('Toggle', () => {
  const { props } = testStateContainer(Toggle)

  expect(props().state).toBe(false)

  props().toggle()
  expect(props().state).toBe(true)
})
