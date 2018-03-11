import * as React from 'react'
import TestRenderer from 'react-test-renderer'

export const testStateContainer = (Component, { ...rest }) => {
  let props = {}
  const renderFn = _props => {
    props = _props
    return null
  }
  TestRenderer.create(<Component render={renderFn} {...rest} />)

  return { props: () => props }
}
