import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Compose, Counter, Toggle } from '../../src/old'

test('<Compose />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Compose states={[Counter, Toggle]} render={renderFn} />)
  // TODO
})
