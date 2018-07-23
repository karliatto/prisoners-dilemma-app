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

  const rows = sortedResults.map((result, index) => (
    <tr>
      <td>{index + 1}</td>
      <td>{result.alias}</td>
      <td>{result.score}</td>
    </tr>
  ))
  return (
    <div>
      <div>This is the tournament results page</div>
      <table>
        <thead>
          <th>#</th>
          <th>Alias</th>
          <th>Score</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

export default TournamentResults
