import * as React from 'react'
import renderPropsUtil from './renderProps'

const isFn = arg => typeof arg === 'function'
const cbs = (...fns) => (...args) => fns.forEach(fn => isFn(fn) && fn(...args))

export const createStateContainer = ({
  initialState,
  renderProps,
  displayName,
}) => {
  return class StateContainer extends React.Component {
    static displayName = displayName || 'StateContainer'

    // We use `value` as main state for all components
    // so we can save simple values that are not objects
    state = {
      value:
        typeof this.props.initial === 'undefined'
          ? initialState
          : this.props.initial,
    }

    setStateValue = (setter, cb) =>
      this.setState(
        ({ value }) => ({ value: isFn(setter) ? setter(value) : setter }),
        cbs(cb, this.props.onChange)
      )

    stateHandler = () => ({
      state: this.state.value,
      setState: this.setStateValue,
    })

    // Bind this to renderProps fn so we can access
    // this while creating our custom methods/properties
    renderProps = renderProps.bind(this)
    propsToPass = () => this.renderProps(this.stateHandler(), this.props)

    render() {
      return renderPropsUtil(this.props, {
        ...this.stateHandler(),
        ...this.propsToPass(),
      })
    }
  }
}
