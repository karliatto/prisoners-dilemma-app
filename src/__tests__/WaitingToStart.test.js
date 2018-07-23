import React from 'react'
import ReactDOM from 'react-dom'
import WaitingToStart from '../routes/waiting-to-start'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WaitingToStart />, div)
  ReactDOM.unmountComponentAtNode(div)
})
