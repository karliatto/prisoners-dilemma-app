import React from 'react'
import Server from '../server'
import Countdown from '../components/Countdown'

export default class WaitingToStart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startCountDown: false
    }
    if (!process.env.CI) {
      Server.waitForServerStart(() => {
        this.startCountDown()
      })
    }
  }

  startCountDown = () => {
    this.setState({ startCountDown: true })
  }

  startTournament = () => {
    // Go to tournament.
  }

  render() {
    const { startCountDown } = this.state

    if (startCountDown) {
      return <Countdown count={10} onCountdownDone={this.startTournament} />
    }
    return <div>The tournament will begin shortly...</div>
  }
}
