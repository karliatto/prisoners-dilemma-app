import React from 'react'
import ReactDOM from 'react-dom'
import CountDown from '../components/Countdown'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const onCountDownDone = () => {}
  ReactDOM.render(
    <CountDown count={10} onCountdownDone={onCountDownDone} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
