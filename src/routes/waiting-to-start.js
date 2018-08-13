import React from 'react'
import Server from '../server'

export default class WaitingToStart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    if (!process.env.CI) {
      Server.waitForServerStart(() => {
        console.log('started!')
      })
    }
  }

  render() {
    return <div>The tournament will begin shortly...</div>
  }
}
