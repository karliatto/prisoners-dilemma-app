import React from 'react'

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  onChangeInput = e => {
    const { data } = this.state
    data[e.target.name] = e.target.value
    this.setState({ data })
  }

  submit = async e => {
    e.preventDefault()
    const { data } = this.state
    const response = await fetch('http://localhost:3010/api/v1/participant', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { handleJoin } = this.props
    handleJoin(response.data)
  }

  render() {
    const { data } = this.state
    const { alias, tournament } = data
    return (
      <form onSubmit={this.submit}>
        <div className="form">
          <div className="form-row">
            <div className="form-label">
              <label htmlFor="tournament">Enter the tournament code:</label>
            </div>
            <div className="form-field">
              <input
                id="tournament"
                type="text"
                name="tournament"
                value={tournament}
                onChange={this.onChangeInput}
              />
            </div>
          </div>
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

Welcome.defaultProps = {
  handleJoin: () => {}
}
