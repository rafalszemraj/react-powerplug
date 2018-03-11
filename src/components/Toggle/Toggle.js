import { createStateContainer } from '../../utils/creators'

const Toggle = createStateContainer({
  state: false,
  props: ({ setState }) => ({
    toggle: () => setState(state => !state),
  }),
})

export default Toggle
