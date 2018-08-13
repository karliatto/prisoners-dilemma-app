import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.count
    }
  }

  componentDidMount = () => {
    // Update every second.
    this.interval = setInterval(() => {
      const { count } = this.state
      if (count > 0) {
        this.setState({ count: count - 1 })
      } else {
        this.startTournament()
      }
    }, 1000)
  }

  componentWillUnmount = () => {
    this.stop()
  }

  stop = () => {
    clearInterval(this.interval)
  }

  addLeadingZeros = value => {
    let valueStr = String(value)
    while (valueStr.length < 2) {
      valueStr = `0${valueStr}`
    }
    return valueStr
  }

  startTournament = () => {
    this.stop()
    const { onCountdownDone } = this.props
    onCountdownDone()
  }

  render = () => {
    const { count } = this.state

    return (
      <div>
        <strong>{this.addLeadingZeros(count)}</strong>
      </div>
    )
  }
}

Countdown.propTypes = {
  count: PropTypes.number,
  onCountdownDone: PropTypes.func.isRequired
}

Countdown.defaultProps = {
  count: 10
}
export default Countdown
