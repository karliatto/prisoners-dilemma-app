import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <div>This is the homepage</div>
    <div>
      Go and see the <Link to="/tournament-results">tournament results</Link>{' '}
      page.
    </div>
    <div>
      Go and see the{' '}
      <Link to="/rflnrwglkfwmed;,qwl,dpwergnerkfq;wdkmnqfogrwj">404</Link> page.
    </div>
  </div>
)

export default Home
