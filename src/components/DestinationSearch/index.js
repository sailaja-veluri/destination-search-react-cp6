// Write your code here
import {Component} from 'react'

import DestinationItems from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {DestinationSearchList} = this.props
    const {searchInput} = this.state
    const searchResults = DestinationSearchList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <h1 className="title"> Destination Search </h1>
        <div className="search-ele-container">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-img"
            alt="search icon"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <DestinationItems destinationDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
