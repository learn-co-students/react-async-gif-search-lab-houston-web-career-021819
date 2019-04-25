import React from 'react'


import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    first: null,
    second: null,
    third: null,
  }

  handleFetch = (val) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${val}&api_key=9mupaNXiOn308v0yk6Etlits8S4jBsSl`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        first: data.data[0],
        second: data.data[1],
        third: data.data[2]
      })
    })
  }

  changeQuery = (val) => {
    this.handleFetch(val)
  }

  componentDidMount() {
    this.changeQuery('ADAM')
  }

  render() {
    return (
      <div>
        < GifList {...this.state} />
        < GifSearch changeQuery={this.changeQuery} />
      </div>
    )
  }
}
