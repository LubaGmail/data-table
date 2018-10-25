import React from 'react'
import '../../app.css';

export default function CoinTable(props) {

  // props:  0: {id: "bitcoin", name: "Bitcoin", symbol: "BTC", rank: "1", price_usd: "10406.5", …}

  return (
    <div className='tableDiv'>
      <table id="table1">
        <thead>
          <tr>
            <th>
              <div
                onClick={() => props.sortByNum('rank')}
              >
              Rank
              </div>
            </th>

            <th>
              <div
                onClick={() => props.sortByStr('name')}
              >
              Name
              </div>
            </th>
            <th>
              <div
                onClick={() => props.sortByStr('symbol')}
              >
              Symbol
              </div>
            </th>
            <th>
              <div
                onClick={() => props.sortByNum('price_usd')}
              >
              Price
              </div>
            </th>
            <th>
              <div
                onClick={() => props.sortByNum('percent_change_1h')}
              >
              percent_change_1h
              </div>
            </th>
            <th>
            <div
                onClick={() => props.sortByNum('percent_change_24h')}
              >
              percent_change_24h
              </div>
            </th>
            <th>
              <div
                onClick={() => props.sortByNum('percent_change_7d')}
              >
              percent_change_7d
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map(row => (
              <tr key={row.name}>
                <td>{row.rank}</td>
                <td>{row.name}</td>
                <td>{row.symbol}</td>
                <td>{row.price_usd}</td>
                <td>{row.percent_change_1h}</td>
                <td>{row.percent_change_24h}</td>
                <td>{row.percent_change_7d}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}