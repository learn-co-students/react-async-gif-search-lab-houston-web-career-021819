import React from 'react'

export default class GifSearch extends React.Component {

  state = {
    value: ""
  }

  handleChange = (e) => {
    e.persist()
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.changeQuery(this.state.value)
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <h4>Enter a Search Term:</h4>
        <input type = "text" value = {this.state.value} />
        <button type = "submit"> Submit </button>
      </form>
    )
  }
}
