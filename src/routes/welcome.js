import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      done: false,
      error: null,
      info: null
    }
    if (!process.env.CI) {
      this.getInfo().then(info => {
        this.setState({ info })
      })
    }
  }

  onChangeInput = e => {
    const { data } = this.state
    data[e.target.name] = e.target.value
    this.setState({ data })
  }

  getInfo = async () => {
    const response = await fetch('http://localhost:3010/info', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    })
    return response.json()
  }

  submit = async e => {
    e.preventDefault()
    const { data } = this.state
    const response = await fetch('http://localhost:3010/join', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.status >= 400) {
      response.json().then(responseData => {
        this.setState({ error: responseData.error })
      })
    } else {
      this.setState({ done: true })
    }
  }

  render() {
    const { data, done, error, info } = this.state

    if (!info) {
      return <p>Waiting for tournament info...</p>
    }

    if (info.alias || done) {
      return <Redirect to="/waiting-to-start" />
    }

    if (!info.alias && info.started) {
      return <Redirect to="/tournament-results" />
    }

    const { alias } = data
    return (
      <form onSubmit={this.submit}>
        <div className="form">
          <div className="form-error">{error}</div>
          <div className="form-row">
            <div className="form-label">
              <label htmlFor="alias">What is your name?</label>
            </div>
            <div className="form-field">
              <input
                id="alias"
                type="text"
                name="alias"
                value={alias}
                onChange={this.onChangeInput}
              />
            </div>
          </div>
          <div className="form-buttons">
            <button type="submit">Join</button>
          </div>
        </div>
      </form>
    )
  }
}
