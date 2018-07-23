import React from 'react'
import ReactDOM from 'react-dom'
import TournamentResults from '../routes/tournament-results'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TournamentResults />, div)
  ReactDOM.unmountComponentAtNode(div)
})
