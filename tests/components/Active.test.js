import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Active } from '../../src/old'

test('<Active />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Active render={renderFn} />)
  // TODO
})
