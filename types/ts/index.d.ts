import { SFC } from 'react'
import Toggle from './components/Toggle'

export type StateContainer<State, Props> = SFC<
  {
    state: State
    setState: (setter: State) => any
    setState: (setter: (state: State) => State) => any
    onChange: (state: State) => any
  } & Props
>

type Foo = Toggle

export { Toggle }

import { SFC } from 'react'
import { StateContainer } from '../..'

type Props = { toggle: () => void }
type Toggle = StateContainer<boolean, Props>

export default Toggle
