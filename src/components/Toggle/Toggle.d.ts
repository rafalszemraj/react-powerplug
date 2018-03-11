import { StateContainer } from '../..'

type State = boolean
type RenderProps = {
  toggle(): void
}

declare const Toggle: StateContainer<State, RenderProps>
export default Toggle
