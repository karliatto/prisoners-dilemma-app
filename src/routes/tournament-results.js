import React from 'react'

const expectedDataExample = [
  {
    alias: 'Tyrion',
    score: '10000000'
  },
  {
    alias: 'Hodor',
    score: '-4'
  },
  {
    alias: 'Jon Snow',
    score: '10'
  },
  {
    alias: 'Sam',
    score: '0'
  }
]

const TournamentResults = () => {
  const sortedResults = expectedDataExample.sort((a, b) => b.score - a.score)
  const rows = sortedResults.map(result => (
    <tr key={result.alias}>
      <td>{result.alias}</td>
      <td>{result.score}</td>
    </tr>
  ))

  return (
    <div>
      <h1>Tournament Results</h1>
      <table>
        <thead>
          <tr>
            <th>Alias</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

export default TournamentResults
