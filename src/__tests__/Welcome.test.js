import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import Welcome from '../routes/welcome'

/*
 * To test with <Link /> or <Route /> components,
 * necessary to wrap the component with <StaticRouter> or <MemoryRouter>;
 * see https://reacttraining.com/react-router/web/guides/testing
 */

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
