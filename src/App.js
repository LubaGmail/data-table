import React from 'react'
import CoinTable from './components/coin-table'

import data from './data/coins.json'

import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        data: data,
        direction:  {
          rank: 'asc',
          name: 'asc',
          symbol: 'asc',
          price_usd: 'asc',
          percent_change_1h: 'asc',
          percent_change_24h: 'asc',
          percent_change_7d: 'asc'
        }
      }
  }

  sortByStr = (key) => {
    this.setState({

      data: data.sort((a, b) => (
        this.state.direction[key] === 'asc'
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key])
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }

  sortByNum = (key) => {
    this.setState({
      data: data.sort( (a, b) => (
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key]) 
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      } 
    })
  }

  render() {
    return (
      <div
        className="page-container"
      >
        <CoinTable
          data={this.state.data}
          sortByNum={this.sortByNum}
          sortByStr={this.sortByStr}
        />
      </div>
    )
  }
}

export default App
