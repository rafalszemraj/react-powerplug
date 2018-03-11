import { SFC } from 'react'

export type StateContainerRenderProps<State, RenderProps> = {
  state: State
  setState(setter: State): any
  setState(setter: (state: State) => State): any
} & RenderProps

export type StateContainerProps<State, Props = {}> = Props & {
  initial: State
  onChange(state: State): any
}

export type StateContainer<State, RenderProps, Props = {}> = SFC<
  {
    children: StateContainerRenderProps<State, RenderProps>
    render: StateContainerRenderProps<State, RenderProps>
  } & StateContainerProps<State, Props>
>
